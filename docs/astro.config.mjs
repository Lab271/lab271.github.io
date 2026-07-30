// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// This is the Lab271 org site (https://lab271.github.io), so it deploys at the
// domain root - no base path. Project sites (e.g. a repo's own Pages site) live
// under their own subpaths and are unaffected.
// https://astro.build/config
export default defineConfig({
	site: 'https://lab271.github.io',
	integrations: [
		starlight({
			title: 'Lab271',
			description: 'Open source from Lab271, the Schuberg Philis innovation lab.',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'Lab271',
				// The logo is the wordmark, so the text beside it would be a duplicate.
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			head: [
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				},
				{
					tag: 'link',
					attrs: { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
				},
				// Inter and JetBrains Mono are the Lab271 brand kit's open stand-ins for
				// TT Interphases and TT Interphases Mono, the licensed SBP brand faces.
				// See src/styles/custom.css.
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
					},
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Lab271' },
				{ icon: 'external', label: 'schubergphilis.com', href: 'https://schubergphilis.com' },
			],
			// A single landing page; hide pagination and disable search (one page).
			pagination: false,
			pagefind: false,
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
