Page({
  data: {
    traits: [
      { label: "字形稳定", value: "82", status: "较好" },
      { label: "笔压节奏", value: "76", status: "平稳" },
      { label: "行距布局", value: "69", status: "略紧" }
    ],
    detailRows: [
      { name: "整体倾向", value: "书写较规整，做事有计划感" },
      { name: "近期状态", value: "节奏偏快，可能有轻度紧绷" },
      { name: "情绪提示", value: "稳定性较好，需注意放松休息" }
    ],
    advice: [
      { title: "放慢节奏", text: "每天留 10 分钟做慢呼吸或散步，帮助降低紧绷感。" },
      { title: "规律作息", text: "尽量固定睡眠时间，减少临睡前长时间刷屏。" },
      { title: "轻量记录", text: "可用手写日记记录情绪，观察一周内状态变化。" }
    ]
  },

  onBack() {
    wx.navigateBack()
  },

  onAgain() {
    wx.navigateBack()
  }
})
