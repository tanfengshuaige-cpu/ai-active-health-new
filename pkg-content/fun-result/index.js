Page({
  data: {
    type: "anxiety",
    title: "焦虑自测结果",
    conclusion: "您处于正常状态",
    desc: "结果仅供参考，如有不适建议尽快就医。",
    suggestions: [
      { title: "继续保持", text: "保持稳定作息，注意劳逸结合。" },
      { title: "放松训练", text: "每天安排 10 分钟呼吸放松或散步。" },
      { title: "及时就医", text: "如持续不适或影响生活，请前往正规医疗机构咨询。" }
    ]
  },

  onLoad(options) {
    const resultMap = {
      anxiety: { title: "焦虑自测结果", conclusion: "您处于正常状态", desc: "如果总分小于 4，无明显焦虑；总分在 4-6 之间，可能存在轻度紧张；总分大于 6，建议重点关注近期情绪与睡眠。" },
      depression: { title: "抑郁自评结果", conclusion: "近期情绪基本平稳", desc: "若持续出现兴趣下降、睡眠变化或精力不足，建议增加陪伴沟通并及时咨询专业人员。" },
      bone: { title: "骨质疏松测评结果", conclusion: "骨骼风险较低", desc: "建议保持适量运动、均衡饮食和规律日照，如有疼痛或骨折史请及时检查。" },
      sleep: { title: "失眠测评结果", conclusion: "睡眠状态可继续观察", desc: "建议保持固定作息，减少睡前刺激；若长期入睡困难或早醒，请及时就医。" }
    }
    const type = options.type || "anxiety"
    this.setData({ type, ...(resultMap[type] || resultMap.anxiety) })
  },

  onBack() {
    wx.navigateBack()
  },

  goList() {
    wx.navigateBack({ delta: 2 })
  }
})
