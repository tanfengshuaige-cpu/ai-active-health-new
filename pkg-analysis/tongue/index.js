Page({
  data: {
    tips: [
      {
        title: "保证光线充足",
        desc: "避免强反光、暗光和偏色环境。"
      },
      {
        title: "露出完整舌根",
        desc: "舌面自然伸出，不要用力过度。"
      },
      {
        title: "保持画面清晰",
        desc: "拍摄时尽量保持手机稳定。"
      }
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  onTakePhoto() {
    wx.navigateTo({
      url: "/pkg-analysis/tongue-result/index"
    })
  }
})
