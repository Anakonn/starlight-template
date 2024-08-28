import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { makeLocalesConfig } from "./config/locales";
import node from "@astrojs/node";

const site = "https://docsforall.com/";
const googleAds = "ca-pub-2130210715518535";
const github = "https://github.com/Anakonn/docsforall";

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			title: "Docsforall",
			defaultLocale: "en",
			locales: makeLocalesConfig(),
			head: [
				// Add ICO favicon fallback for Safari.
				{
					tag: "link",
					attrs: {
						rel: "icon",
						href: "/favicon.ico",
						sizes: "32x32",
					},
				},
				{
					tag: "script",
					attrs: {
						async: true,
						src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAds}`,
						crossorigin: "anonymous",
					},
				},
			],
			social: {
				github: github,
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Example Guide",
							slug: "guides/example",
						},
					],
				},
				{
					label: "Reference",
					autogenerate: {
						directory: "reference",
					},
				},
			],
		}),
	],
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
});
