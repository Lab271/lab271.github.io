# AGENTS.md

Source for <https://lab271.github.io/>, an Astro Starlight landing page for the
[Lab271](https://github.com/Lab271) organization. The site lives in `docs/` (a
subdirectory, not the repo root) so it can sit alongside repo-level tooling like
`.mise.toml` and `.github/`.

This is a sibling of
[schubergphilis.github.io](https://github.com/schubergphilis/schubergphilis.github.io),
which it is derived from and links back to. Keep the two structurally aligned
(same layout, same tasks, same workflows) and diverge only on branding and
content.

## Development

Tools are pinned with [mise](https://mise.jdx.dev/); tasks run through
[mise tasks](https://mise.jdx.dev/tasks/) defined in `.mise.toml`.

```sh
mise install            # install bun
mise run docs-install   # bun install
mise run docs-dev       # dev server at http://localhost:4321/
mise run docs-check     # astro check (type/content check)
mise run docs-build     # static build into docs/dist
mise run docs-repos     # regenerate docs/src/data/repos.json from the Lab271 org (needs `gh` auth)
mise run docs-icons     # re-export the favicon PNGs from src/assets/badge.svg (needs librsvg)
```

When starting the dev server directly (not via mise), use background mode:
`astro dev --background`, then `astro dev stop`/`status`/`logs`.

## Layout

- `docs/`: the Astro Starlight site.
  - `src/content/docs/index.mdx`: the landing page (single `template: splash`
    page, no sidebar).
  - `src/intro.md`: the intro paragraphs, imported into the landing page.
  - `src/styles/custom.css`: Lab271 brand theme (colors, fonts) mapped onto
    Starlight's CSS custom properties.
  - `src/assets/logo.svg`: the horizontal wordmark used in the nav bar. Vendored
    from the design team's final artwork (the Lab271 design refresh) rather than
    generated - see Branding below.
  - `src/assets/badge.svg`: the badge mark, and the master for the favicon PNGs
    in `public/`. Also vendored artwork. The PNGs are re-exported from it with
    `scripts/refresh-icons.sh` (`mise run docs-icons`).
  - `src/assets/hero.jpg`: the hero photo.
  - `src/data/repos.json`: committed, auto-generated list of public `Lab271`
    repos that carry an open source license. Regenerate with `mise run
    docs-repos` rather than editing by hand.
  - `scripts/refresh-repos.mjs`: what `mise run docs-repos` runs. Plain node, no
    dependencies, so it works without `bun install`.
- `.github/workflows/ci.yml`: build and type-check on push/PR, plus a `zizmor`
  job auditing the workflows themselves.
- `.github/workflows/deploy.yml`: builds and publishes `docs/dist` to GitHub
  Pages on every push to `main`. The repository's Pages source must be set to
  "GitHub Actions" (Settings, then Pages) for this to work.
- `.github/workflows/refresh-repos.yml`: weekly (Monday) rerun of `mise run
  docs-repos`, committing `repos.json` to `main` if it changed. A push made with
  `GITHUB_TOKEN` does not trigger other workflows, so it dispatches `deploy.yml`
  afterwards instead of relying on the push event.
- `.github/dependabot.yml`: weekly updates for the `docs/` bun lockfile and the
  GitHub Actions used in workflows.

## Branding

The theme implements the Lab271 design refresh (see ADR-0005 in
`Lab271/www.lab271.io`), which supersedes the `labs-branding`
(`brand/visual-identity.md`, `brand/tokens/lab271.tokens.json`) Navy/Primary
Blue/Teal system this site carried before. `labs-branding` has not been
re-derived from the refresh yet, so it is temporarily stale - treat this
repo's `custom.css` and its `www.lab271.io` sibling as authoritative in the
meantime. The rules that shaped what is here:

- **Palette.** Near-black `#020C17` anchors dark surfaces, including the nav
  bar in both color modes (never pure black). Cyan `#1EE8ED` (dark mode) /
  `#18B9BD` (light mode, darkened for contrast) is the signature accent.
  Orange `#FF7000`/`#FF8D33` is a spark: at most one per composition, which
  here is the rule in the badge. Light mode's canvas is a warm paper off-white
  (`#FAF9F5`), not a cool gray.
- **Type.** Inter and JetBrains Mono are the open stand-ins for TT Interphases
  and TT Interphases Mono, the licensed SBP faces that cannot ship on a public
  build - unchanged by the refresh. Sentence case headings with tight
  tracking. Mono is "a pinch of tech", so it is limited to the `e = 2.71828`
  motif and the language labels.
- **Marks.** `logo.svg` and `badge.svg` are vendored directly from the design
  team's final artwork for the refresh, not generated - the previous
  Inter-outlined-to-paths approach (`scripts/refresh-marks.py`) is retired.
  Update them by replacing the SVG file with a new export from the design
  source, not by hand-editing the path data.
- **Written "Lab271"**, sentence case, no space, in all prose and copy. Never
  "LAB271" in running text - the all-caps treatment is reserved for the
  wordmark graphic itself (`logo.svg`).
- US English throughout.
- No em dashes in the copy. `docs/scripts/refresh-repos.mjs` normalizes them out
  of upstream GitHub descriptions too.

## Conventions

- This is an org/root-name GitHub Pages site (`lab271.github.io`), so it deploys
  at the domain root, with no Astro `base` path.
- Only **public** Lab271 work belongs on this page. The org is mostly private
  (customer, demo, infrastructure and thesis repos). `docs-repos` filters to
  public sources, and hand-written sections must do the same.
- Third-party GitHub Actions are pinned to a full commit SHA with a trailing
  `# vX.Y.Z` comment; Dependabot bumps them.
- `@astrojs/check` doesn't yet support TypeScript's native (7.x) compiler API,
  so `docs/package.json` pins `typescript` to `^6`. See
  `.github/dependabot.yml` for the corresponding ignore rule.
