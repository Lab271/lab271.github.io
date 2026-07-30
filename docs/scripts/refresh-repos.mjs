#!/usr/bin/env node
// Regenerates src/data/repos.json from the Lab271 GitHub org, so the site build
// has no network dependency. Run via `mise run docs-repos` (needs an
// authenticated `gh` CLI).
//
// The org is small enough to list in full, so - unlike the schubergphilis
// equivalent - there is no "recent activity" cutoff here. Forks and archived
// repos are excluded by `gh`; this repo and the org profile repo are excluded
// below because neither is a project.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ORG = 'Lab271';
const EXCLUDE = new Set(['lab271.github.io', '.github']);

// GitHub descriptions are written per repo and some use an em dash where a
// sentence break works just as well. The site's copy avoids them, so normalize.
const normalize = (text) =>
	text.replace(/\s+[—–]\s+(.)/g, (_, next) => `. ${next.toUpperCase()}`).trim();

const raw = execFileSync(
	'gh',
	[
		'repo',
		'list',
		ORG,
		'--source',
		'--no-archived',
		'--visibility',
		'public',
		'--limit',
		'1000',
		'--json',
		'name,description,url,homepageUrl,primaryLanguage,pushedAt',
	],
	{ encoding: 'utf8' },
);

const repos = JSON.parse(raw)
	.filter((repo) => !EXCLUDE.has(repo.name.toLowerCase()))
	.sort((a, b) => new Date(b.pushedAt) - new Date(a.pushedAt))
	.map(({ name, description, url, homepageUrl, primaryLanguage, pushedAt }) => ({
		name,
		description: description ? normalize(description) : '',
		url,
		homepageUrl: homepageUrl || '',
		language: primaryLanguage?.name ?? '',
		pushedAt,
	}));

const outFile = fileURLToPath(new URL('../src/data/repos.json', import.meta.url));
writeFileSync(outFile, `${JSON.stringify(repos, null, '\t')}\n`);
console.log(`Wrote ${repos.length} repos to ${outFile}`);
