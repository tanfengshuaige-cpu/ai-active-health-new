Page({
  data: {
    tests: [
      { key: "anxiety", title: "焦虑自测量表", desc: "了解焦虑程度的工具", tone: "orange" },
      { key: "depression", title: "抑郁自评量表", desc: "反映主观感受和变化", tone: "orange" },
      { key: "bone", title: "骨质疏松测评", desc: "骨质疏松情况测评", tone: "green" },
      { key: "sleep", title: "失眠测评", desc: "失眠自我测评", tone: "green" }
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  onStart(event) {
    const key = event.currentTarget.dataset.key || "anxiety"
    wx.navigateTo({ url: `/pkg-content/fun-quiz/index?type=${key}` })
  }
})
