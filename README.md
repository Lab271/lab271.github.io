# lab271.github.io

Source for <https://lab271.github.io/>, a landing page indexing the public
open source work of [Lab271](https://github.com/Lab271), the Schuberg Philis
innovation lab, built with
[Astro Starlight](https://starlight.astro.build/).

A sibling of
[schubergphilis.github.io](https://github.com/schubergphilis/schubergphilis.github.io),
which covers the rest of Schuberg Philis's open source.

## Develop

Tools are pinned with [mise](https://mise.jdx.dev/); tasks run through mise.

```sh
mise install            # install bun
mise run docs-install   # bun install
mise run docs-dev       # dev server at http://localhost:4321/
mise run docs-build     # static build into docs/dist
mise run docs-repos     # regenerate the repo list from the Lab271 org
mise run ci             # install, check and build, exactly as CI does
mise run ci-watch       # follow the GitHub Actions run for the current branch
```

`mise tasks` lists all of them.

## Publish

Every push to `main` runs `.github/workflows/deploy.yml`, which builds
`docs/dist` and publishes it to GitHub Pages at <https://lab271.github.io/>.
The Pages source must be set to "GitHub Actions" in the repository settings.

## Layout

- `docs/`: the Astro Starlight site. Landing page:
  `docs/src/content/docs/index.mdx`.
- `.mise.toml`: pinned tools and dev/build tasks (run with `mise run <task>`).
- `.github/workflows/`: `ci.yml` (build and check on PRs), `deploy.yml`
  (publish on push to main) and `refresh-repos.yml` (weekly repo-list refresh).

Branding follows the Lab271 design refresh; see [AGENTS.md](AGENTS.md) for the
rules the theme implements.

## Contributing

This repository is maintained by Schuberg Philis and is not open to
third-party contributions. Reports of a broken or inaccurate page are welcome:
see [CONTRIBUTING.md](CONTRIBUTING.md), and
[SECURITY.md](SECURITY.md) for anything security-related.

## License

Proprietary, all rights reserved. See [LICENSE](LICENSE). The repository is
public so GitHub Pages can serve the site, not so the source can be reused.
