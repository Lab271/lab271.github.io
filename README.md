# lab271.github.io

**This site has moved to <https://lab271.io/open-source/>.**

<https://lab271.github.io/> still resolves and redirects there. This repository
now contains nothing but that redirect.

## Where the content went

The open source index this repository used to serve is built by
[`Lab271/www.lab271.io`](https://github.com/Lab271/www.lab271.io) as an ordinary
page in the main site's design system, and published to <https://lab271.io/>
behind CloudFront. See ADR-0009 there.

**If you came here to change something, change it there.** Specifically:

| What | Where it lives now |
|---|---|
| The list of public repositories | `site/src/data/repos.json`, regenerated weekly by `.github/workflows/refresh-repos.yml` |
| The generator behind it | `site/scripts/refresh-repos.mjs` (`mise run site-repos`) |
| The page, and its hand-written highlights | `site/src/pages/open-source/index.astro` |

The weekly refresh moved across unchanged. It still regenerates the repository
list from the `Lab271` organization, commits it, and asks for a deploy; only the
publishing target changed, from GitHub Pages to S3 behind CloudFront.

## Why this repository still exists

Three reasons, all of them about not breaking things:

- **The URL has inbound links** we do not control, including from
  [schubergphilis.github.io](https://schubergphilis.github.io/). Archiving or
  deleting this repository would turn those into 404s.
- **It holds the history** of the content, and of how the site was built.
- **Issues still work here.** The site it now points at is built from a private
  repository, so this is the one public place to report that a page is wrong or
  a repository is missing from the list.

It is deliberately **not archived**: archiving is an org-level act, and an
archived repository cannot take issues.

## How the redirect works

`index.html` and `404.html` are hand-written, and there is no build step, no
dependency and no workflow left in this repository.

GitHub Pages cannot return a 301. A real one needs a custom domain on this
repository, and `lab271.io` resolves to CloudFront rather than to Pages, so it
cannot be one. The pages therefore use, in the order they take effect:
`location.replace()` for anyone with JavaScript, a zero-delay `meta refresh` for
anyone without, `rel=canonical` for crawlers, and a visible link if all three are
ignored. `404.html` covers any deep link, since Pages serves it for every path it
cannot match.

Pages is served from the `main` branch at the repository root. `.nojekyll` turns
off Jekyll processing, which has nothing to do here.

## License

Proprietary, all rights reserved. See [LICENSE](LICENSE). The repository is
public so GitHub Pages can serve it, not so the source can be reused.
