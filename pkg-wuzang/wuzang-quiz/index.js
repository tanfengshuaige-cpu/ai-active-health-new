Page({
  data: {
    questions: [
      { id: "mood", title: "您近期心情如何？", options: ["高兴", "心烦", "急躁易怒", "忧郁", "焦虑", "悲伤", "惊恐", "心情正常"], selected: "" },
      { id: "spirit", title: "您近期精神如何？", options: ["亢奋", "平静", "压力感", "精神疲倦", "健忘", "喜欢打哈欠", "叹气", "精神正常"], selected: "" },
      { id: "sleep", title: "您的睡眠如何？", options: ["失眠", "多梦", "嗜睡", "入睡困难", "易惊醒", "早醒", "睡眠正常"], selected: "" },
      { id: "sweat", title: "您有出汗的情况吗？", options: ["盗汗", "头面部出汗", "心胸部出汗", "手足心出汗", "少汗", "出汗正常"], selected: "" },
      { id: "appetite", title: "您的饮食胃口如何？", options: ["食欲差", "容易腹胀", "口苦", "口干", "喜欢热饮", "饮食正常"], selected: "" },
      { id: "body", title: "您近期身体感受如何？", options: ["乏力", "怕冷", "头晕", "腰膝酸软", "胸闷", "身体正常"], selected: "" }
    ],
    answeredCount: 0,
    progress: 0
  },

  onBack() {
    wx.navigateBack()
  },

  onSelect(event) {
    const { qid, option } = event.currentTarget.dataset
    const questions = this.data.questions.map((item) => {
      if (item.id === qid) {
        return { ...item, selected: option }
      }
      return item
    })
    const answeredCount = questions.filter((item) => item.selected).length

    this.setData({
      questions,
      answeredCount,
      progress: Math.round((answeredCount / questions.length) * 100)
    })
  },

  onSubmit() {
    if (this.data.answeredCount < this.data.questions.length) {
      wx.showToast({
        title: "请先完成所有题目",
        icon: "none"
      })
      return
    }

    wx.navigateTo({
      url: "/pkg-wuzang/wuzang-result/index"
    })
  }
})
