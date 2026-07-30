#!/bin/sh
# Re-exports the favicon/apple-touch-icon PNGs from the badge master SVG.
# Run via `mise run docs-icons`. Needs librsvg (`brew install librsvg`).
set -eu
cd "$(dirname "$0")/.."

badge=src/assets/badge.svg

rsvg-convert -w 512 -h 512 "$badge" -o public/favicon.png
rsvg-convert -w 180 -h 180 "$badge" -o public/apple-touch-icon.png
rsvg-convert -w 32 -h 32 "$badge" -o public/favicon-32x32.png

echo "Re-exported favicon.png, apple-touch-icon.png and favicon-32x32.png from $badge"
