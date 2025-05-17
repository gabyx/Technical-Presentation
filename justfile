set positional-arguments
set shell := ["bash", "-cue"]
set dotenv-load := true
root_dir := justfile_directory()
flake_dir := root_dir / "tools/nix"
build_dir := root_dir / "build"

# General Variables:
# You can chose either "podman" or "docker"
container_mgr := env("CONTAINER_MGR", "podman")

# The presentation to render.
presentation := env("PRESENTATION", "presentation-1")

# Enter the default Nix development shell.
develop *args:
    just nix-develop default "$@"


# Format the project.
format *args:
    nix run --accept-flake-config {{flake_dir}}#treefmt -- "$@"

# Clean the build folder.
clean:
    cd "{{root_dir}}" && \
      rm -rf "{{build_dir}}" && \
      mkdir -p "{{build_dir}}"

# Serve the presentation.
# Runs `process-compose` with the task to serve the whole
# presentation with automatic update etc.
serve:
    #!/usr/bin/env bash
    set -eu
    devenvup=$(nix build --print-out-paths --no-out-link --no-link "./tools/nix#devenv-up")
    "$devenvup"

# Build the reveal presentation.
build: init
    cd "{{build_dir}}" && \
      pnpm run build

# Convert the presentation to a `.pdf`.
pdf: init
    cd "{{build_dir}}" && \
      CONTAINER_MGR="{{container_mgr}}" \
      pnpm run pdf

# Convert to `.pdf` and package into a `.zip` file which is standalone shareable.
package file="presentation.zip": pdf
    "{{root_dir}}/tools/scripts/package-presentation.sh" "{{container_mgr}}" "{{file}}"

# Prepare a folder `name` to make later a PR to branch `publish` to serve your presentation.
publish pres=presentation:
    "{{root_dir}}/tools/scripts/publish-pages.sh" "{{pres}}"

# Bake the logo into the style-sheets.
bake-logo mime="svg":
    cd "{{root_dir}}" && \
      tools/scripts/bake-logo.sh "{{mime}}"

# Build the container for `.devcontainer`.
build-dev-container *args:
    cd "{{root_dir}}" && \
      "{{container_mgr}}" build \
      --build-arg "REPOSITORY_COMMIT_SHA=$(git rev-parse --short=11 HEAD)" \
      -f tools/nix/devcontainer/Containerfile \
      -t technical-presentation:latest \
      "$@" \
      tools/nix

# Init reveal.js into build folder.
[private]
init pres=presentation:
    #!/usr/bin/env bash
    set -eu
    just clean

    echo "Init pinned reveal.js folder to 'build'..."
    git submodule update --init
    rsync -a "external/reveal.js/" "{{build_dir}}/"

    just sync "{{pres}}"

    echo "Install node packages in '{{build_dir}}' ..."
    (cd "{{build_dir}}" && pnpm install && pnpm run build)

    just pandoc "{{pres}}"


# Syncs everything to the build folder, where pandoc is run and the
# we build the presentation with reveal.js.
[private]
sync pres=presentation:
    #!/usr/bin/env bash
    set -eu
    cd "{{root_dir}}"

    sync() {
      # Resolve all symlinks to make independent presentations.
      rsync --checksum -a --copy-links "$@"
    }

    echo "Add additional 'npm' scripts."
    jq -s '.[0] *= .[1] | .[0]' external/reveal.js/package.json src/package.json > build/package.json

    # Cannot use symlink because `serve` does not like it.
    mkdir -p "{{build_dir}}/presentations"
    echo "Add additional files (styles, themes, etc.) ..."
    sync "src/presentations/{{pres}}" "{{build_dir}}/presentations/"
    sync src/mixin/ "{{build_dir}}/"

# Watch the files in `src` and synchronize them into the `build` folder.
[private]
watch pres=presentation:
    #!/usr/bin/env bash
    set -eu
    cd "{{root_dir}}"

    watch() {
      echo "Starting watchman ..."
      watchman-wait -m 0 -t 0 "$@"
    }

    checksum_dir="{{build_dir}}/.checksums"
    mkdir -p "$checksum_dir"

    watch src tools | (
      while true; do
        read -t 1 LINE && { echo "Watchman: $LINE"; } || continue

        if [ ! -f "$LINE" ]; then
          continue
        fi

        # Ignore some stupid files.
        if echo "$LINE" | grep ".temp.pandoc-include"; then
          continue
        fi

        key=$(echo "$LINE" | sha1sum | cut -f 1 -d ' ')
        current_hash=$(sha1sum "$LINE" | cut -f 1 -d ' ')

        if [ -f "$checksum_dir/$key" ]; then
          if [ "$(cat "$checksum_dir/$key")" = "$current_hash" ]; then
            echo "No changes detected."
            continue
          fi
        fi

        # Store file hash.
        echo "$current_hash" > "$checksum_dir/$key"

        echo "File: '$LINE' changes"
        just sync "{{pres}}"
        just pandoc "{{pres}}"
      done
    )

# Render the presentation with pandoc
# in the build folder.
[private]
pandoc pres=presentation:
    #!/usr/bin/env bash
    set -eu

    root_dir="{{root_dir}}"
    build_dir="{{build_dir}}"
    presentation="{{pres}}"
    presentation_dir_rel="presentations/$presentation"
    presentation_dir="$build_dir/$presentation_dir_rel"
    image_convert_dir="$presentation_dir_rel/assets/images/convert"
    lua_path="$root_dir/tools/pandoc/lua/?.lua;;"
    data_dir="$root_dir/tools/pandoc"

    # Execute pandoc in folder where the presentation should be built is.
    cd "$build_dir" &&
    LUA_PATH="$lua_path" \
    PRESENTATION_ROOT="$presentation_dir" \
    IMAGE_CONVERT_ROOT="$image_convert_dir" \
    BUILD_ROOT="$build_dir" \
      pandoc \
         --data-dir="$data_dir" \
         --defaults=pandoc-dirs.yaml \
         --defaults=pandoc-general.yaml \
         --defaults=pandoc-revealjs.yaml \
         --defaults=pandoc-filters.yaml \
         -o "$build_dir/index.html" \
         "$presentation_dir/main.md" &&
      echo "Pandoc converted successfully." || {
      echo "Pandoc failed!"
    }

# Present the presentation.
[private]
present:
    cd "{{build_dir}}" && \
      pnpm run present

# Enter the Nix development shell `$1` and execute the command `${@:2}`.
[private]
nix-develop *args:
    #!/usr/bin/env bash
    set -eu
    cd "{{root_dir}}"
    shell="$1"; shift 1;
    args=("$@") && [ "${#args[@]}" != 0 ] || args="$SHELL"
    nix develop --no-pure-eval --accept-flake-config \
        "{{flake_dir}}#$shell" \
        --command "${args[@]}"
