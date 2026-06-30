Page({
  data: { title: "名医科普", desc: "北京中医医院独家视频，专业解读常见健康问题。" },
  onLoad(options){ this.setData({ title: decodeURIComponent(options.title || "名医科普") }) },
  onBack(){ wx.navigateBack() }
})
