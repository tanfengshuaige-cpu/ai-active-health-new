Page({
  data: { title: "心率", fields: [], activeTabs: [], normal: "", color: "#0a8f68" },
  onLoad(options){
    const map = {
      heart:{title:"心率",fields:["心跳"],activeTabs:["心率"],normal:"正常心率：60-100 次/分"},
      pressure:{title:"血压",fields:["高压","低压"],activeTabs:["低压","高压"],normal:"血压低压正常范围：60-90mmHg"},
      sugar:{title:"血糖",fields:["空腹血糖","餐后血糖"],activeTabs:["空腹血糖","餐后血糖"],normal:"空腹血糖应低于 6.1mmol/L，低于 2.8mmol/L 为低血糖"},
      fat:{title:"血脂",fields:["甘油三酯","总胆固醇","低密度脂蛋白"],activeTabs:["甘油三酯","总胆固醇","低密度脂蛋白"],normal:"正常甘油三酯大于 0.56 mmol/L 且小于 1.7mmol/L"},
      oxygen:{title:"血氧",fields:["血氧"],activeTabs:["血氧"],normal:"正常血氧通常大于 95"},
      weight:{title:"体重",fields:["身高","体重"],activeTabs:["体重","BMI"],normal:"建议结合身高体重记录 BMI 趋势"},
      habit:{title:"生活习惯",fields:["抽烟","喝酒","运动时间","睡眠"],activeTabs:["习惯"],normal:"记录生活习惯可帮助评估长期健康趋势"}
    }
    const current = map[options.type] || map.heart
    this.setData(current)
  },
  onBack(){wx.navigateBack()},
  onSave(){wx.showToast({title:"已保存",icon:"success"})},
  onQuery(){wx.showToast({title:"已查询",icon:"success"})}
})
