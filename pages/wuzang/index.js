const echarts = require("../../components/ec-canvas/echarts")

function initTrendChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width,
    height,
    devicePixelRatio: dpr
  })
  canvas.setChart(chart)

  chart.setOption({
    color: ["#ff4d57", "#0aaf60", "#ff9f1c", "#12b8a6", "#2f80ed"],
    grid: { left: 8, right: 12, top: 54, bottom: 26, containLabel: true },
    legend: {
      top: 8,
      left: "center",
      icon: "circle",
      itemWidth: 7,
      itemHeight: 7,
      itemGap: 12,
      textStyle: { color: "#4b5563", fontSize: 11, fontWeight: 600 },
      data: ["心", "肝", "脾", "肺", "肾"]
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["06/21", "06/22", "06/23", "06/24", "06/25", "06/26", "06/27"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#8a9490", fontSize: 10 }
    },
    yAxis: {
      type: "value",
      min: 60,
      max: 95,
      splitNumber: 3,
      axisLabel: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#e8f0ec", type: "dashed" } }
    },
    series: [
      { name: "心", type: "line", smooth: 0.35, showSymbol: false, lineStyle: { width: 2.4 }, areaStyle: { opacity: 0.05 }, data: [79, 80, 81, 82, 81, 82, 83] },
      { name: "肝", type: "line", smooth: 0.35, showSymbol: false, lineStyle: { width: 2.4 }, areaStyle: { opacity: 0.05 }, data: [82, 82, 83, 83, 84, 84, 85] },
      { name: "脾", type: "line", smooth: 0.35, showSymbol: false, lineStyle: { width: 2.4 }, areaStyle: { opacity: 0.04 }, data: [75, 76, 76, 77, 78, 78, 79] },
      { name: "肺", type: "line", smooth: 0.35, showSymbol: false, lineStyle: { width: 2.4 }, areaStyle: { opacity: 0.04 }, data: [86, 85, 85, 84, 84, 83, 83] },
      { name: "肾", type: "line", smooth: 0.35, showSymbol: false, lineStyle: { width: 2.4 }, areaStyle: { opacity: 0.04 }, data: [72, 73, 73, 74, 74, 75, 75] }
    ]
  })

  return chart
}

Page({
  data: {
    ec: { onInit: initTrendChart },
    organs: [
      { name: "心", desc: "神志与血脉", score: 83, color: "red" },
      { name: "肝", desc: "疏泄与情志", score: 85, color: "green" },
      { name: "脾", desc: "运化与气血", score: 79, color: "orange" },
      { name: "肺", desc: "呼吸与卫表", score: 83, color: "mint" },
      { name: "肾", desc: "精气与腰膝", score: 75, color: "blue" }
    ],
    ranges: [
      { label: "较差", value: "0-60", color: "#b91c1c" },
      { label: "一般", value: "60-70", color: "#f06d16" },
      { label: "较好", value: "70-80", color: "#f2cf24" },
      { label: "好", value: "80-90", color: "#70c84b", active: true },
      { label: "很好", value: "≥90", color: "#0aaf60" }
    ],
    tabs: [
      { key: "home", label: "首页", active: false },
      { key: "index", label: "五脏指数", active: true },
      { key: "record", label: "记录", active: false },
      { key: "mine", label: "我的", active: false }
    ]
  },

  onConstitutionTap() {
    wx.navigateTo({ url: "/pages/constitution-test/index" })
  },

  onWuzangTestTap() {
    wx.navigateTo({ url: "/pages/wuzang-test/index" })
  },

  onTabTap(event) {
    const key = event.currentTarget.dataset.key
    if (key === "home") wx.redirectTo({ url: "/pages/index/index" })
    if (key === "record") wx.redirectTo({ url: "/pages/record/index" })
    if (key === "mine") wx.redirectTo({ url: "/pages/mine/index" })
  }
})
