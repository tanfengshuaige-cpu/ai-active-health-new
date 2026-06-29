Page({
  data: {
    systems: ["心系统", "肝系统", "脾系统", "肺系统", "肾系统"],
    ranges: [
      { label: "较差", value: "0-60", color: "#b91c1c" },
      { label: "一般", value: "60-70", color: "#f06d16" },
      { label: "较好", value: "70-80", color: "#f2cf24" },
      { label: "好", value: "80-90", color: "#70c84b", active: true },
      { label: "很好", value: ">=90", color: "#0aaf60" }
    ],
    advice: "您当前心系统的健康状态良好。建议继续保持每日午休片刻以养心神，夏季合理使用空调，保持午餐饮食清淡，可适当吃黑芝麻、小枣、莲子等。",
    tabs: [
      { key: "home", label: "首页", active: false },
      { key: "index", label: "五脏指数", active: true },
      { key: "record", label: "记录", active: false },
      { key: "mine", label: "我的", active: false }
    ]
  },

  onConstitutionTap() {
    wx.navigateTo({ url: "/pages/constitution-test/index" })
  },

  onTabTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "home") wx.redirectTo({ url: "/pages/index/index" })
    if (key === "record") wx.redirectTo({ url: "/pages/record/index" })
    if (key === "mine") wx.redirectTo({ url: "/pages/mine/index" })
  }
})
