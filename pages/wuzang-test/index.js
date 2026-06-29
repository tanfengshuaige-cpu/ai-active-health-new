Page({
  data: {
    introItems: [
      {
        title: "情志状态",
        desc: "观察情绪与压力",
        icon: "../../assets/images/icon-ai-chat.png"
      },
      {
        title: "睡眠出汗",
        desc: "了解恢复情况",
        icon: "../../assets/images/data-habit.png"
      },
      {
        title: "饮食体感",
        desc: "辅助判断脏腑",
        icon: "../../assets/images/data-sugar.png"
      }
    ],
    noticeRows: [
      { label: "适宜人群", value: "成人" },
      { label: "禁忌人群", value: "儿童" },
      { label: "适用年龄段", value: "12 周岁以上" }
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  onStart() {
    wx.navigateTo({
      url: "/pages/wuzang-quiz/index"
    })
  }
})
