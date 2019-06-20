#!/bin/bash

file=@presentationIndexFileName@

currentDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

if [[ "$OSTYPE" == "linux-gnu" ]]; then
    chromePath="google-chrome"
    userDir="$TMPDIR/Presentation"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    chromePath="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    userDir="$TMPDIR/Presentation"
elif [[ "$OSTYPE" == "msys" ]]; then
    chromePath="C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
    userDir="$TEMP/Presentation"
else
    echo "System not supported!"
    exit -1
fi

function openChrome()
{
    # Start Chrome without CORS
    if [[ "$OSTYPE" == "linux-gnu" ]] || [[ "$OSTYPE" == "msys" ]]; then
        "$chromePath" --disable-web-security \
                      -–allow-file-access-from-files \
                      --user-data-dir "${userDir}/chrome-data" \
                      "${currentDir}"

    elif [[ "$OSTYPE" == "darwin"* ]]; then
        open -n -a "$chromePath" --disable-web-security \
                    -–allow-file-access-from-files \
                    --user-data-dir "${userDir}/chrome-data" \
                    "${currentDir}"
    else
        echo "System not supported!"
        exit -1
    fi
}

function checkPath()
{
    while ! type "${chromePath}" > /dev/null 2>&1 ;
    do
        echo >&2 "I require 'Google Chrome' but path '${chromePath}' is not existing!"; 
        read -p "Enter the path to Google Chrome: " chromePath
    done
    echo "Found Google Chrome @ '${chromePath}'"
}

checkPath
openChrome