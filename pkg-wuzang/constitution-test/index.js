Page({
  data: {
    notices: [
      { label: "测评说明", value: "根据近 3-6 个月的身体状态，辨析当前体质倾向。" },
      { label: "适宜人群", value: "12 周岁以上人群" },
      { label: "结果用途", value: "用于日常调养参考，不替代医疗诊断。" }
    ],
    tags: ["饮食", "睡眠", "出汗", "情绪", "二便", "运动"]
  },

  onStart() {
    wx.navigateTo({ url: "/pkg-wuzang/constitution-quiz/index" })
  },

  onBack() {
    wx.navigateBack()
  }
})
