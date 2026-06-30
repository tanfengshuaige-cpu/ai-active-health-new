Page({
  data: {
    chartGrid: [0, 25, 50, 75, 100],
    chartDates: ["6/21", "6/22", "6/23", "6/24", "6/25", "6/26", "6/27"],
    trendPoints: [
      { left: 0, top: 75 },
      { left: 16.6, top: 67.5 },
      { left: 33.2, top: 60 },
      { left: 49.8, top: 52.5 },
      { left: 66.4, top: 60 },
      { left: 83, top: 37.5 },
      { left: 99.6, top: 30 }
    ],
    trendSegments: [
      { left: 0, top: 72.8, width: 17.7, rotate: -14 },
      { left: 16.6, top: 65.3, width: 17.7, rotate: -14 },
      { left: 33.2, top: 57.8, width: 17.7, rotate: -14 },
      { left: 49.8, top: 55.2, width: 17.7, rotate: 14 },
      { left: 66.4, top: 51.2, width: 18.1, rotate: -37 },
      { left: 83, top: 35.3, width: 17.7, rotate: -14 }
    ],
    organs: [
      { name: "心", desc: "神志与血脉", score: 83, color: "red" },
      { name: "肝", desc: "疏泄与情志", score: 85, color: "green" },
      { name: "脾", desc: "运化与气血", score: 79, color: "orange" },
      { name: "肺", desc: "呼吸与卫表", score: 83, color: "mint" },
      { name: "肾", desc: "精气与腰膝", score: 75, color: "blue" }
    ],
    ranges: [
      { label: "较差", value: "0-60", color: "#b91c1c" },
      { label: "一般", value: "60-70", color: "#f06d16" },
      { label: "较好", value: "70-80", color: "#f2cf24" },
      { label: "好", value: "80-90", color: "#70c84b", active: true },
      { label: "很好", value: "≥90", color: "#0aaf60" }
    ],
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

  onWuzangTestTap() {
    wx.navigateTo({ url: "/pages/wuzang-test/index" })
  },

  onTabTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "home") wx.redirectTo({ url: "/pages/index/index" })
    if (key === "record") wx.redirectTo({ url: "/pages/record/index" })
    if (key === "mine") wx.redirectTo({ url: "/pages/mine/index" })
  }
})
