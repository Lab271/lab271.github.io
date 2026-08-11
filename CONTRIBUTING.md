# Contributing

This repository holds the source for <https://lab271.github.io/>, the Lab271
open source landing page. It is maintained by Schuberg Philis and is **not
open to third-party contributions**: it is a company-branded page, and its
content and design are ours to decide.

That does not mean feedback is unwelcome. Two things are useful:

- **Something on the page is wrong, broken or out of date.** Open an
  [issue](https://github.com/Lab271/lab271.github.io/issues). Wrong links,
  a project described inaccurately, a broken layout and accessibility
  problems are all worth reporting.
- **You found a security problem.** Do not open an issue. Follow
  [SECURITY.md](SECURITY.md) instead.

Note that the list of repositories on the page is generated, not hand-written.
It comes from the public, licensed repositories in the
[Lab271](https://github.com/Lab271) organization, refreshed weekly by
`.github/workflows/refresh-repos.yml`. To get a project listed or delisted,
change the repository itself (its visibility, license or description) rather
than this site.

Everyone taking part is expected to follow the
[Code of Conduct](CODE_OF_CONDUCT.md). Anything in this repository is governed
by its [License](LICENSE).

## For maintainers

Setup, tasks and layout are in [README.md](README.md); the branding rules and
the conventions an agent needs are in [AGENTS.md](AGENTS.md).

- Work on a branch and open a pull request; `main` is what deploys.
- `mise run ci` runs the same install, type-check and build that
  `.github/workflows/ci.yml` runs. Run it before pushing.
- After pushing, `mise run ci-watch` follows the real run.
- Keep this repository structurally aligned with its sibling,
  [schubergphilis.github.io](https://github.com/schubergphilis/schubergphilis.github.io):
  same layout, same tasks, same workflows, diverging only on branding and
  content.
