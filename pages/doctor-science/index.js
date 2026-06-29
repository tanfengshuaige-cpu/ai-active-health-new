Page({
  data:{
    week:[
      {day:"周一",title:"周梦玲-老忘事当心是老年痴呆的表现",icon:"data-heart.png"},
      {day:"周二",title:"张帆-面瘫治疗多久会康复？",icon:"card-report-art.png"},
      {day:"周三",title:"张旭-春节将至警惕隐形油",icon:"data-sugar.png"},
      {day:"周四",title:"张磊-结石还可以分析成分？",icon:"data-fat.png"},
      {day:"周五",title:"赵冰璇-卒中后抑郁只是想不开吗？",icon:"data-oxygen.png"},
      {day:"周六",title:"周末健康日八段锦运动",icon:"data-habit.png"},
      {day:"周日",title:"周末健康日易筋经运动",icon:"data-sugar.png"}
    ],
    videos:[
      "如何自我判断脑梗的发病风险",
      "颈动脉狭窄会遗传吗",
      "药物治疗完成后还需要继续用药吗",
      "使用中成药控制血压副作用更小吗",
      "青年人如何预防脑血管疾病",
      "发生脑梗后需要留意哪些方面"
    ]
  },
  onBack(){wx.navigateBack()},
  onPlay(event){
    const title = event.currentTarget.dataset.title || "名医科普"
    wx.navigateTo({ url: `/pages/doctor-video/index?title=${encodeURIComponent(title)}` })
  }
})
