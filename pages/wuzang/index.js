const echarts = require("../../components/ec-canvas/echarts")

function initTrendChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width,
    height,
    devicePixelRatio: dpr
  })
  canvas.setChart(chart)

  chart.setOption({
    color: ["#0a8f68"],
    grid: { left: 4, right: 14, top: 18, bottom: 34, containLabel: true },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["06/21", "06/22", "06/23", "06/24", "06/25", "06/26", "06/27"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#8a9490", fontSize: 10, margin: 14 }
    },
    yAxis: {
      type: "value",
      min: 70,
      max: 90,
      interval: 5,
      axisLabel: {
        show: true,
        color: "#8a9490",
        fontSize: 10,
        margin: 8,
        formatter: "{value}"
      },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#e8f0ec", type: "dashed" } }
    },
    series: [
      {
        name: "综合指数",
        type: "line",
        smooth: 0.45,
        symbol: "circle",
        symbolSize: 7,
        lineStyle: {
          width: 4,
          color: "#0a8f68",
          shadowBlur: 8,
          shadowColor: "rgba(10,143,104,.2)"
        },
        itemStyle: {
          color: "#ffffff",
          borderColor: "#0a8f68",
          borderWidth: 3
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(10,143,104,.22)" },
              { offset: 1, color: "rgba(10,143,104,0)" }
            ]
          }
        },
        data: [78, 79, 80, 81, 80, 82, 83]
      }
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
