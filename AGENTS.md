# AGENTS.md

This file (`AGENTS.md`) is the canonical agent configuration. `CLAUDE.md` is a
symlink to this file.

## This repository is retired

It served <https://lab271.github.io/>, an Astro Starlight landing page indexing
the public open source work of [Lab271](https://github.com/Lab271). That page is
now built by [`Lab271/www.lab271.io`](https://github.com/Lab271/www.lab271.io)
and published at <https://lab271.io/open-source/>. See ADR-0009 there.

What remains here is `index.html` and `404.html`, which redirect to that URL, so
the old address keeps working. There is no site, no build, no dependency and no
workflow left.

**Do not add content or features here.** Anything that would have been a change
to this site is a change to `Lab271/www.lab271.io`:

| What | Where |
|---|---|
| The list of public repositories | `site/src/data/repos.json` |
| The generator behind it | `site/scripts/refresh-repos.mjs` (`mise run site-repos`) |
| The page and its hand-written highlights | `site/src/pages/open-source/index.astro` |
| The weekly refresh | `.github/workflows/refresh-repos.yml` |

The only changes that belong in this repository are to the redirect itself, or
to the standard policy files (`LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`,
`CODE_OF_CONDUCT.md`).

## Editing the redirect

Both files are hand-written, self-contained HTML with no build step. If you
change the destination, change it in **four** places across the two files:
`rel=canonical` (index.html only), the `meta http-equiv="refresh"`, the
`location.replace()` call, and the visible link.

GitHub Pages cannot return a 301 — that needs a custom domain on this
repository, and `lab271.io` resolves to CloudFront rather than to Pages, so it
cannot be one. The layered approach in those files is the strongest redirect a
static host can give; the comments in `index.html` explain the ordering.

Pages is served from `main` at the repository root, not from a workflow.
`.nojekyll` disables Jekyll processing.

## Agent skills

### Git remote

Use GitHub with the `gh` CLI. The remote is
<https://github.com/Lab271/lab271.github.io>.

### Issue tracker

Use GitHub issues: <https://github.com/Lab271/lab271.github.io/issues>.

Issues are the reason this repository is public and unarchived rather than
archived. `www.lab271.io` is private, so this is the only public place to report
that a page is wrong or that a repository is missing from the list. Triage them
here; fix them there.

### Triage labels

needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix.

`good first issue` and `help wanted` are misleading here: this repository is not
open to third-party contributions (see `CONTRIBUTING.md`). Do not apply them.

## Conventions

- Written **"Lab271"**, sentence case, no space, in all prose and copy. Never
  "LAB271" in running text.
- US English throughout.
- No em dashes in the copy.
