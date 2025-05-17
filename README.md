<img src="docs/logo.svg" style="margin-right: 10pt;width:100pt" align="right">
<h1>Technical Presentation</h1>

<br>

Make technical presentations in Markdown/HTML etc.

This uses [`revealjs`](https://github.com/hakimel/reveal.js) with some
modifications to package to PDF and standalone HTML format. Also it includes a
company `scss` file for design modifications.

- **See the
  [demo presentation here](https://gabyx.github.io/Technical-Presentation/gh-pages/demo)**.
- **See some other
  [Rust Workshop](https://sdsc-ordes.github.io/technical-presentation/gh-pages/rust-workshop/part-1/#/title-slide)
  [[src]](https://github.com/sdsc-ordes/technical-presentation/tree/feat/rust-workshop).**
- **See some other
  [C++ presentation here](https://gabyx.github.io/tech-pr-cpp-value-catergories)
  [[src]](https://github.com/gabyx/tech-pr-cpp-value-catergories).**

Authors:

- [Gabriel Nützi](https://github.com/gabyx) and

> [!WARNING]
>
> This is the `pandoc` tooling branch, if you want a simpler version with
> `reveal.js` only, use `main-simple`.

Current [`revealjs`](https://github.com/hakimel/reveal.js) version: `4.6.1`

## Requirements

### Using [`nix`](https://nixos.org)

You can enter a development shell with

```shell
nix develop './tools/nix#default'
```

where all requirements are installed to start working on your first
presentation.

### DevContainer

There is a [`.devcontainer`](.devcontainer) to be run over `code` or the
[devcontainer](https://github.com/devcontainers/cli) CLI. First build the
container:

```shell
just build-dev-container
```

or with `docker` instead of `podman`:

```shell
just container_mgr=docker build-dev-container
```

### Manual

You need the following tools:

- `bash`
- `just`
- `rsync`
- `watchman`
- `npm`
- `yarn`

## Usage

1. **`just serve`** -> Launches process-compose to initialize/watch and present
   the presentation. You can edit and see the changes on-the-fly on
   `http://localhost:3000`.

1. **`just package`** -> Export the presentation as HTML and PDF inside a `.zip`
   file to the [`publish`](publish) folder.

1. **`just publish`** -> Build and upload the (selected) presentation to the
   `publish` **branch** in the folder `docs/gh-pages` which can then be served
   by Github pages. The
   [`.publish.yaml`](./src/presentations/presentation-1/.publish.yaml) helps in
   defining the name and output folder in `docs/gh-pages` to host multiple
   presentations alongside.

## Make a Presentation

- Write your presentation in Markdown in
  [`src/presentations`](src/presentations). All images and other assets needed
  by the presentation should go into the respective `assets` directory (e.g.
  [`presentation-1/assets`](/src/presentations/presentation-1/assets))

## Resources

Check the following resources with additional slide materials:

- [Documentation](https://revealjs.com/)
- [Markdown from a C++ presentation](https://github.com/gabyx/tech-pr-cpp-value-catergories/blob/main/files/cpp-meeting/Vortrag.md)
  [View](https://gabyx.github.io/tech-pr-cpp-value-catergories)

## Modifications

- Edit the design in [`company.scss`](css/theme/source/company.scss).

- Company Logo: Edit the file
  [`company-logo.svg`](css/theme/source/files/company-logo.svg).

  - Replace embedded image in [`company.scss`](css/theme/source/company.scss)
    with

  ```shell
  just bake-logo
  ```
