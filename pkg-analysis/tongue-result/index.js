Page({
  data: {
    tongueRows: [
      { name: "苔色 | 黄苔", meaning: "主热证、里证，病邪在里", warn: true },
      { name: "厚薄 | 薄苔", meaning: "正常，若有病见之，亦属病较轻，邪在表" },
      { name: "齿痕 | 有齿痕", meaning: "主脾虚、湿证", warn: true },
      { name: "点刺 | 有点刺", meaning: "主脏腑阳热亢盛，或血分热盛", warn: true },
      { name: "裂纹 | 有裂纹", meaning: "主精血亏虚，或阴津耗损", warn: true },
      { name: "舌形 | 舌形正常", meaning: "正常" },
      { name: "润燥 | 燥苔", meaning: "主热盛伤津或阴液亏耗", warn: true },
      { name: "舌质 | 红绛舌", meaning: "为火热上炎的外在表现", warn: true }
    ],
    advice: [
      { title: "经络保健", text: "常按足三里、气海、关元等穴位，促进气血生成，提高正气。" },
      { title: "用药禁忌", text: "慎少苦寒攻伐之品，调理用药需遵循专业医师建议。" },
      { title: "饮食方向", text: "可选择黄芪、山药、白扁豆、莲子、红枣等温和食材。" },
      { title: "少吃食物", text: "少吃荞麦、柚子、生萝卜、空心菜等偏凉或耗气食物。" }
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  goList() {
    wx.navigateBack()
  }
})
