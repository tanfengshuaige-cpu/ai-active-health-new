Page({
  data: {
    current: 0,
    questions: [
      { title: "您精力充沛吗？", options: ["没有", "很少", "有时", "经常", "总是"] },
      { title: "您容易疲乏吗？", options: ["没有", "很少", "有时", "经常", "总是"] },
      { title: "您容易气短，接不上气吗？", options: ["没有", "很少", "有时", "经常", "总是"] },
      { title: "您面色晦暗或容易出现瘀斑吗？", options: ["没有", "很少", "有时", "经常", "总是"] }
    ],
    selected: {}
  },

  onSelect(event) {
    const value = event.currentTarget.dataset.value
    const selected = Object.assign({}, this.data.selected, { [this.data.current]: value })
    this.setData({ selected })
  },

  onNext() {
    if (this.data.current < this.data.questions.length - 1) {
      this.setData({ current: this.data.current + 1 })
      return
    }
    wx.navigateTo({ url: "/pages/constitution-result/index" })
  }
})
