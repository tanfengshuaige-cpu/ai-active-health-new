Page({
  data: {
    rows: [
      { label: "姓名", value: "xxx" },
      { label: "出生日期", value: "2002-07-09" }
    ]
  },
  onBack(){ wx.navigateBack() },
  onSave(){ wx.showToast({ title:"已完善", icon:"success" }) }
})
