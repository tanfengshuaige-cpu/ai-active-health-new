Page({
  data: { title: "节气养生药膳", desc: "顺应节气，温和调理，帮助保持身体平衡。" },
  onLoad(options){ this.setData({ title: decodeURIComponent(options.title || "节气养生药膳") }) },
  onBack(){ wx.navigateBack() }
})
