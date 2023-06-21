/*
 * @Author: moxiang
 * @Date: 2023-01-11 16:58:58
 * @LastEditors: moxiang
 */
module.exports = {
  title: "微微习惯",
  dest: "./public",
  themeConfig: {
    navbar: true,
    sidebar: [
      {
        title: 'Habit',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          "/",
          'problem',
          'update',
          'home',
          {
            title: "今天",
            path: "/record",
            initialOpenGroupIndex: 0, // 可选的, 默认值是 0
            sidebarDepth: 1,    // 可选的, 默认值是 1
            collapsable: true, // 可选的, 默认值是 true,
            children: [
              "/record/",
              "/record/transfer",
              "/record/reimburse",
              "/record/settings",
            ]
          },
          "type_mgr",
          {
            title: "全部",
            path: "/assets",
            initialOpenGroupIndex: 0, // 可选的, 默认值是 0
            sidebarDepth: 1,    // 可选的, 默认值是 1
            collapsable: true, // 可选的, 默认值是 true,
            children: [
              "/assets/"
            ]
          },
          { 
            title: "番茄钟",
            path: "/pomodoro",
            initialOpenGroupIndex: 0,
            sidebarDepth: 1,
            collapsable: true,
            children: [
              "/pomodoro/",
              "/pomodoro/time_stat"
            ]
          },
          "user_agreement",
          "privacy_policy"
        ]
      }
    ]
	}
}