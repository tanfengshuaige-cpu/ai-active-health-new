Page({
  data: {
    menus: [
      { key: "profile", icon: "/assets/images/data-user.png", title: "个人信息", desc: "姓名、年龄、基础档案" },
      { key: "member", icon: "/assets/images/data-habit.png", title: "会员中心", desc: "AI 健康服务与权益" },
      { key: "address", icon: "/assets/images/data-weight.png", title: "我的收货地址", desc: "汤方与健康用品配送地址" },
      { key: "agreement", icon: "/assets/images/card-report-art.png", title: "用户协议", desc: "查看服务使用说明" },
      { key: "privacy", icon: "/assets/images/card-test-art.png", title: "隐私服务条款", desc: "了解健康数据保护方式" },
      { key: "service", icon: "/assets/images/icon-ai-chat.png", title: "联系客服", desc: "使用问题与服务咨询" }
    ],
    tabs: [
      { key: "home", label: "首页", active: false },
      { key: "index", label: "五脏指数", active: false },
      { key: "record", label: "记录", active: false },
      { key: "mine", label: "我的", active: true }
    ]
  },

  onTabTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "home") wx.redirectTo({ url: "/pages/index/index" })
    if (key === "index") wx.redirectTo({ url: "/pkg-wuzang/wuzang/index" })
    if (key === "record") wx.redirectTo({ url: "/pkg-profile/record/index" })
  }
})
