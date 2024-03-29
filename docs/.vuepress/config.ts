import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
	lang: "zh-CN",
	title: "微微习惯 Docs",
	description: "微微习惯应用文档",
	dest: "./public",
	theme: defaultTheme({
		logo: "/assets/images/icon.png",
		repo: "mox1206/habit_doc",
		docsDir: "docs",
		lastUpdatedText: '上次更新',
		editLinkText: "在Github上编辑",
		editLink: false,
		contributors: false,
		sidebar: [{
			text: "微微习惯指南",
			children: [
				"/",
				"/bases/problem",
				"/bases/update",
				"/habit/today",
				"/habit/all_habit",
				"/habit/pomoboro",
				"/habit/main",
				"/habit/accessibility",
				"/habit/other",
				"/bases/privacy_policy",
				"/bases/user_agreement",
			]
		}]
	})
})