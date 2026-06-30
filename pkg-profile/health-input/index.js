Page({
  data: {
    metricTabs: ["心率", "血压", "血糖", "血脂", "血氧", "体重", "习惯"],
    fields: [
      { label: "心率", placeholder: "心率（次/分）" },
      { label: "血压", placeholder: "120/80 mmHg" },
      { label: "血糖", placeholder: "空腹血糖 mmol/L" }
    ],
    habits: [
      { label: "抽烟", placeholder: "没有抽烟，不用填写" },
      { label: "喝酒", placeholder: "没有喝酒，不用填写" },
      { label: "运动", placeholder: "分钟/天" },
      { label: "睡眠", placeholder: "小时/天" }
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  onSave() {
    wx.showToast({ title: "已保存", icon: "success" })
  },

  onQuery() {
    wx.showToast({ title: "已查询", icon: "success" })
  }
})
