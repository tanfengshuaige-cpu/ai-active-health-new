Page({
  data:{
    sections:[
      {
        title:"开篇序章",
        desc:"中医理论认为：人与自然是一个整体，人体的身体状态会随着自然界的节气变化而变化。节气养生药膳，就是根据二十四个节气变化，搭配不同食材，保持身体健康与平衡。",
        video:"民以食为天"
      },
      {
        title:"北方养生药膳",
        desc:"北方气候夏季多高温多雨，冬季寒冷干燥。北方养生药膳特色是浓郁醇厚、暖身驱寒，展现北方人一种生活方式和文化象征。",
        video:"夏至-益脾饼"
      },
      {
        title:"南方养生药膳",
        desc:"南方气候夏季多高温多雨，冬季温和少雨。南方养生药膳特色细腻温润、滋阴润燥，体现人与养生之道的独特见解。",
        video:"夏至-黄杞香菇拌凉面"
      }
    ]
  },
  onBack(){wx.navigateBack()},
  onPlay(event){
    const title = event.currentTarget.dataset.title || "节气养生药膳"
    wx.navigateTo({ url: `/pages/soup-video/index?title=${encodeURIComponent(title)}` })
  }
})
