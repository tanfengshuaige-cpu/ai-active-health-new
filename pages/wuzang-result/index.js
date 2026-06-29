Page({
  data: {
    bars: [
      { name: "肝", value: "87.50", height: 188, key: "liver" },
      { name: "肾", value: "47.45", height: 112, key: "kidney" },
      { name: "心", value: "30.40", height: 78, key: "heart" },
      { name: "脾", value: "15.45", height: 48, key: "spleen" },
      { name: "肺", value: "4.35", height: 26, key: "lung" },
      { name: "胃", value: "2.80", height: 20, key: "stomach" }
    ],
    organs: [
      {
        name: "肝",
        tag: "重点调养",
        desc: "肝脏与疏泄、情绪、气血运行相关。近期若出现口干、口苦、耳鸣、头痛、两胁胀痛、易怒等表现，可优先关注肝的调养。",
        symptoms: ["口干", "口苦", "耳鸣", "易怒", "两胁胀痛"]
      },
      {
        name: "肾",
        tag: "需关注",
        desc: "肾为先天之本，与生长发育、腰膝、精力和水液代谢相关。若有腰膝酸软、尿频、怕冷、头晕等表现，可结合日常作息进行调理。",
        symptoms: ["腰膝酸软", "怕冷", "头晕", "夜尿", "乏力"]
      },
      {
        name: "心",
        tag: "辅助调养",
        desc: "心与神志、睡眠、血脉运行相关。若近期睡眠浅、多梦、心悸、健忘或胸闷，可关注休息、情绪稳定与规律作息。",
        symptoms: ["失眠", "多梦", "心悸", "健忘", "胸闷"]
      }
    ],
    recipe: [
      { label: "组成", text: "山绿茶 3.5g" },
      { label: "使用", text: "每日 2 次，每次 3.5g，开水冲泡饮服。" },
      { label: "功效", text: "有生津润肺、舒通血脉、稳定血压、调节机体代谢功效。" },
      { label: "主治", text: "主治肥胖症。" }
    ],
    commonSymptoms: [
      "肝蓄",
      "肝痛",
      "肾著",
      "皮水",
      "急淋",
      "胆瘤",
      "石淋",
      "肾水",
      "口苦",
      "头痛"
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  goList() {
    wx.navigateBack({
      delta: 2
    })
  }
})
