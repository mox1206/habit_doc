import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
	lang: "zh-CN",
	title: "微微习惯 Docs",
	description: "微微习惯应用文档",
	dest: "./public",
	theme: defaultTheme({
		repo: "https://github.com/mox1206/habit_doc.git",
		sidebar: [
			'/',
			'problem',
			'update',
			'home',
			'today',
			'all_habit',
			'pomoboro',
			"user_agreement",
          	"privacy_policy",
		]
	})
})