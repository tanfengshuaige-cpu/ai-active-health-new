Page({
  data: {
    tags: [
      "不适",
      "乏力",
      "怕冷",
      "皮肤问题",
      "容易烦躁",
      "急躁易怒",
      "头晕",
      "失眠",
      "发热"
    ],
    quickQuestions: [
      {
        title: "睡眠与疲劳",
        desc: "睡不好、白天没精神",
        icon: "../../assets/images/data-habit.png"
      },
      {
        title: "饮食调养",
        desc: "脾胃、饮食、忌口建议",
        icon: "../../assets/images/data-sugar.png"
      },
      {
        title: "血压管理",
        desc: "血压波动与日常注意",
        icon: "../../assets/images/data-pressure.png"
      }
    ],
    history: [
      { title: "睡眠与疲劳问询", time: "今天 09:40" },
      { title: "饮食调养建议", time: "昨天 18:12" }
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  goResult() {
    wx.navigateTo({
      url: "/pages/ai-result/index"
    })
  }
})
