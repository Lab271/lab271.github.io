# Security Policy

This repository holds the source for the static landing page published at
<https://lab271.github.io/>. It has no backend, no user data, and no
authentication. The main risks are a compromised build/deploy pipeline or a
vulnerable build-time dependency.

## Reporting a vulnerability

Please report privately. Do not open a public GitHub issue, and do not
discuss the vulnerability publicly until a fix is available.

**Preferred:** email
[abuse@schubergphilis.com](mailto:abuse@schubergphilis.com) with
`[lab271.github.io]` in the subject. This is Schuberg Philis's standing
responsible-disclosure channel; the PGP public key is at
<https://keybase.io/schubergphilis>. The company's full responsible disclosure
policy, including credit, the hall of fame and the bounty, is at
<https://schubergphilis.com/security> and takes precedence over this document
on anything it covers.

**On GitHub:** private vulnerability reporting is enabled on this repository.
Use the
["Report a vulnerability" button](https://github.com/Lab271/lab271.github.io/security/advisories/new)
under the Security tab.

## Scope

In scope: the site source, its build pipeline (GitHub Actions workflows), and
its dependencies as pinned in `docs/bun.lock`.

Out of scope:

- Schuberg Philis's corporate website (<https://schubergphilis.com>), the lab's
  own platforms (<https://lab271.io>, <https://demos.lab271.io>) and any other
  Schuberg Philis production system. Report those under
  <https://schubergphilis.com/security> instead.
- Individual project repositories linked from this landing page. Report those
  to the respective repository.
- Third-party dependencies themselves (report upstream), unless the way this
  site uses them turns a non-issue into an exploitable one.

## What to expect

This repository is maintained on a best-effort basis. We aim to acknowledge
reports within 5 business days and follow up with a resolution or explanation
within 15 business days. These are targets, not contractual commitments.
