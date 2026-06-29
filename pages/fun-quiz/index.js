Page({
  data: {
    type: "anxiety",
    title: "焦虑自测量表",
    questions: [],
    options: ["没有或很少部分时间", "小部分时间", "相当多时间", "绝大部分或全部时间"]
  },

  onLoad(options) {
    const banks = {
      anxiety: { title: "焦虑自测量表", questions: ["觉得比平常容易紧张和着急", "无缘无故地感到害怕", "容易心里烦乱或觉得惊恐", "觉得可能要发疯"] },
      depression: { title: "抑郁自评量表", questions: ["觉得情绪低落或提不起兴趣", "睡眠或食欲有明显变化", "觉得自己精力不足", "对平常事情缺少愉快感"] },
      bone: { title: "骨质疏松测评", questions: ["是否经常腰背酸痛", "是否身高较年轻时降低", "是否有轻微外力后骨折经历", "日常运动是否明显不足"] },
      sleep: { title: "失眠测评", questions: ["入睡是否超过 30 分钟", "夜间是否容易醒来", "是否比期望时间早醒", "总睡眠时间是否不足"] }
    }
    const type = options.type || "anxiety"
    const current = banks[type] || banks.anxiety
    this.setData({ type, title: current.title, questions: current.questions })
  },

  onBack() {
    wx.navigateBack()
  },

  onSubmit() {
    wx.navigateTo({ url: `/pages/fun-result/index?type=${this.data.type}` })
  }
})
