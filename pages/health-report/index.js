Page({
  data: {
    months: ["五月", "六月"],
    reports: [
      {
        title: "BMI",
        icon: "../../assets/images/data-weight.png",
        value: "暂无记录",
        text: "建议：这期间没有记录，为了您的健康请及时测量并记录。长期坚持合理饮食、适当运动，可以降低疾病风险。"
      },
      {
        title: "血脂",
        icon: "../../assets/images/data-fat.png",
        value: "暂无记录",
        text: "建议：这期间没有记录，为了您的健康请及时测量并记录。高血脂会引起多种疾病，如发现血脂异常，应及时就医。"
      },
      {
        title: "心率",
        icon: "../../assets/images/data-heart.png",
        value: "72 次/分",
        text: "建议：心率异常可单独发生，也可伴随其他疾病。请保持规律作息，若长期异常需高度重视，及时就医。"
      },
      {
        title: "血氧",
        icon: "../../assets/images/data-oxygen.png",
        value: "98%",
        text: "建议：血氧低于正常范围需要关注，尤其要重视沉默性低氧。若出现呼吸困难或胸闷，应立即就医。"
      },
      {
        title: "血压",
        icon: "../../assets/images/data-pressure.png",
        value: "120/80",
        text: "建议：高血压会引起多种疾病，也不能忽视低血压。如发现血压异常，应及时就医。"
      }
    ]
  },

  onBack() {
    wx.navigateBack()
  }
})
