Page({
  data: {
    tips: [
      {
        title: "使用白纸深色笔",
        desc: "字迹和纸面反差越清楚，分析结果越稳定。"
      },
      {
        title: "保持整页平整",
        desc: "尽量避免折痕、阴影、反光和倾斜拍摄。"
      },
      {
        title: "书写自然放松",
        desc: "建议写 2-3 行日常文字，不要刻意模仿字体。"
      }
    ],
    samples: [
      { label: "字形", value: "大小与结构" },
      { label: "力度", value: "笔压与节奏" },
      { label: "行距", value: "布局与稳定性" }
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  onStartAnalyze() {
    wx.navigateTo({
      url: "/pages/handwriting-result/index"
    })
  }
})
