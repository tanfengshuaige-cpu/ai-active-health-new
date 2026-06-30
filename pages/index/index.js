Page({
  data: {
    featureCards: [
      {
        key: "ai",
        image: "../../assets/images/icon-ai-chat.png",
        title: "AI 问询",
        desc1: "智能问答",
        desc2: "了解健康状况"
      },
      {
        key: "wuzang",
        image: "../../assets/images/icon-wuzang.png",
        title: "五脏测评",
        desc1: "评估五脏状态",
        desc2: "掌握身体平衡"
      },
      {
        key: "tongue",
        image: "../../assets/images/icon-tongue.png",
        title: "舌象分析",
        desc1: "AI 识别舌象",
        desc2: "洞察体质状态"
      },
      {
        key: "handwriting",
        image: "../../assets/images/icon-handwriting.png",
        title: "笔迹分析",
        desc1: "分析书写特征",
        desc2: "评估身心状态"
      }
    ],
    dataCards: [
      { key: "heart", image: "../../assets/images/data-heart.png", title: "心率", value: "72", unit: "次/分" },
      { key: "pressure", image: "../../assets/images/data-pressure.png", title: "血压", value: "120/80", unit: "mmHg" },
      { key: "sugar", image: "../../assets/images/data-sugar.png", title: "血糖", value: "5.6", unit: "mmol/L" },
      { key: "weight", image: "../../assets/images/data-weight.png", title: "体重", value: "62.5", unit: "kg" },
      { key: "user", image: "../../assets/images/data-user.png", title: "身份", value: "已完善", unit: "", status: true },
      { key: "oxygen", image: "../../assets/images/data-oxygen.png", title: "血氧", value: "98", unit: "%" },
      { key: "fat", image: "../../assets/images/data-fat.png", title: "血脂", value: "正常", unit: "", status: true },
      { key: "habit", image: "../../assets/images/data-habit.png", title: "习惯", value: "3/5", unit: "达成" }
    ],
    adviceCards: [
      {
        key: "soup",
        image: "../../assets/images/card-soup-lite.jpg",
        title: "节气养生汤",
        tags: ["顺时养生", "温和调理"],
        desc: "应时而养，为身体充电",
        action: "查看汤谱"
      },
      {
        key: "doctor",
        image: "../../assets/images/card-doctor-lite.jpg",
        title: "名医科普",
        tags: ["权威专家", "健康知识"],
        desc: "专业解读常见健康问题，科学守护健康",
        action: "立即查看"
      }
    ],
    recommendCards: [
      {
        key: "test",
        image: "../../assets/images/card-test-art.png",
        title: "趣味测评",
        desc: "好玩有趣，了解自己",
        action: "立即测评"
      },
      {
        key: "report",
        image: "../../assets/images/card-report-art.png",
        title: "健康日报",
        desc: "每日健康一览，趋势早知道",
        action: "查看日报"
      }
    ],
    tabs: [
      { key: "home", label: "首页", active: true },
      { key: "index", label: "五脏指数", active: false },
      { key: "record", label: "记录", active: false },
      { key: "mine", label: "我的", active: false }
    ]
  },

  onStartAssess() {
    wx.navigateTo({ url: "/pages/ai/index" })
  },

  onInputHealth() {
    wx.navigateTo({ url: `/pages/health-metric/index?type=${key}` })
  },

  onMetricTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "user") {
      wx.navigateTo({ url: "/pages/profile-form/index" })
      return
    }
    wx.navigateTo({ url: "/pages/health-input/index" })
  },

  onAdviceTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "soup") {
      wx.navigateTo({ url: "/pages/soup-detail/index" })
    }
    if (key === "doctor") {
      wx.navigateTo({ url: "/pages/doctor-science/index" })
    }
  },

  onRecommendTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "test") {
      wx.navigateTo({ url: "/pages/fun-test/index" })
    }
    if (key === "report") {
      wx.navigateTo({ url: "/pages/health-report/index" })
    }
  },

  onFeatureTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "ai") {
      wx.navigateTo({ url: "/pages/ai/index" })
    }
    if (key === "wuzang") {
      wx.navigateTo({ url: "/pages/wuzang-test/index" })
    }
    if (key === "tongue") {
      wx.navigateTo({ url: "/pages/tongue/index" })
    }
    if (key === "handwriting") {
      wx.navigateTo({ url: "/pages/handwriting/index" })
    }
  },

  onTabTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "index") {
      wx.redirectTo({ url: "/pages/wuzang/index" })
    }
    if (key === "record") {
      wx.redirectTo({ url: "/pages/record/index" })
    }
    if (key === "mine") {
      wx.redirectTo({ url: "/pages/mine/index" })
    }
  }
})
