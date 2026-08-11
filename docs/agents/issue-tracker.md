# Issue tracker: GitHub

Issues for this project are managed as GitHub issues.

The issues live in the same remote as the source code (the GitHub default):
<https://github.com/Lab271/lab271.github.io/issues>.

Use the `gh` CLI for all operations.

You can learn about the `gh` issue CLI with `gh issue --help`.

Note this file sits at `docs/agents/` for consistency with the other
Schuberg Philis repositories. `docs/` is also the Astro site root here, but
Astro only builds `docs/src/`, so nothing in `docs/agents/` is published.

## Labels

The following issue labels are used:

```
NAME              DESCRIPTION                                     COLOR
bug               Something isn't working                         #d73a4a
documentation     Improvements or additions to documentation      #0075ca
enhancement       New feature or request                          #a2eeef
needs-triage      Maintainer needs to evaluate this issue         #e6e6fa
needs-info        Waiting on reporter for more information        #e6e6fa
ready-for-agent   Fully specified, ready for an autonomous agent  #e6e6fa
ready-for-human   Requires human implementation                   #e6e6fa
wontfix           This will not be worked on                      #ffffff
```

The repository also carries GitHub's stock labels (`duplicate`,
`good first issue`, `help wanted`, `invalid`, `question`) and two applied by
automation to pull requests (`dependencies`, `javascript`). Prefer the set
above when triaging.

`good first issue` and `help wanted` are misleading here: this repository is
not open to third-party contributions (see `CONTRIBUTING.md`). Do not apply
them.
