Page({
  data: {
    activeKey: "tongue",
    recordTabs: [
      { key: "tongue", label: "舌象" },
      { key: "constitution", label: "体质" },
      { key: "ai", label: "问询" },
      { key: "wuzang", label: "五脏" }
    ],
    currentRecords: [],
    records: {
      tongue: [
        { title: "舌象分析", result: "气虚体质倾向", desc: "舌苔偏薄，建议温和调养脾胃。", time: "2026-06-09 10:28", icon: "../../assets/images/icon-tongue.png", url: "/pages/tongue-result/index" },
        { title: "舌象分析", result: "湿气偏重倾向", desc: "建议清淡饮食，减少甜腻。", time: "2026-06-08 18:16", icon: "../../assets/images/icon-tongue.png", url: "/pages/tongue-result/index" }
      ],
      constitution: [
        { title: "中医测体质", result: "血瘀质", desc: "建议活血行气，保持适度运动。", time: "2026-06-09 11:02", icon: "../../assets/images/wuzang-orbit-lite.jpg", url: "/pages/constitution-result/index" },
        { title: "中医测体质", result: "平和质", desc: "整体状态较稳定，继续保持规律作息。", time: "2026-06-06 09:40", icon: "../../assets/images/wuzang-orbit-lite.jpg", url: "/pages/constitution-result/index" }
      ],
      ai: [
        { title: "中医问询", result: "心肝血虚", desc: "已生成饮食、作息与情绪调养建议。", time: "2026-06-09 14:20", icon: "../../assets/images/icon-ai-chat.png", url: "/pages/ai-result/index" },
        { title: "中医问询", result: "肾虚肝郁", desc: "建议关注睡眠、腰膝酸软和情绪压力。", time: "2026-06-05 20:11", icon: "../../assets/images/icon-ai-chat.png", url: "/pages/ai-result/index" }
      ],
      wuzang: [
        { title: "中医测五脏", result: "重点调养：肝、肾、心", desc: "综合指数 82 分，整体平衡。", time: "2026-06-09 08:55", icon: "../../assets/images/icon-wuzang.png", url: "/pages/wuzang-result/index" },
        { title: "中医测五脏", result: "重点调养：脾、肺、肝", desc: "建议调整饮食和运动节奏。", time: "2026-06-03 17:45", icon: "../../assets/images/icon-wuzang.png", url: "/pages/wuzang-result/index" }
      ]
    },
    tabs: [
      { key: "home", label: "首页", active: false },
      { key: "index", label: "五脏指数", active: false },
      { key: "record", label: "记录", active: true },
      { key: "mine", label: "我的", active: false }
    ]
  },

  onLoad() {
    this.setData({ currentRecords: this.data.records[this.data.activeKey] })
  },

  onRecordTab(event) {
    const activeKey = event.currentTarget.dataset.key
    this.setData({
      activeKey,
      currentRecords: this.data.records[activeKey]
    })
  },

  onOpenRecord(event) {
    const url = event.currentTarget.dataset.url
    if (url) wx.navigateTo({ url })
  },

  onTabTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "home") wx.redirectTo({ url: "/pages/index/index" })
    if (key === "index") wx.redirectTo({ url: "/pages/wuzang/index" })
    if (key === "mine") wx.redirectTo({ url: "/pages/mine/index" })
  }
})
