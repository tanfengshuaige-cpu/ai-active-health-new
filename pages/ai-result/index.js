Page({
  data: {
    organs: [
      { name: "心", value: "偏弱", key: "heart" },
      { name: "肝", value: "偏弱", key: "liver" },
      { name: "脾", value: "尚可", key: "spleen" },
      { name: "肺", value: "平稳", key: "lung" },
      { name: "肾", value: "需关注", key: "kidney" }
    ],
    diagnosis: [
      {
        title: "心肝血虚",
        tag: "主要参考",
        type: "primary",
        desc: "血液亏虚，心肝失养，以心悸心慌、多梦健忘、头晕眼花、两胁隐痛、面舌爪甲色淡白、脉细弱为常见表现。"
      },
      {
        title: "肾虚肝郁证",
        tag: "辅助参考",
        type: "secondary",
        desc: "常见于情志不舒、腰膝酸软、睡眠欠佳、情绪抑郁或烦躁等状态，建议结合舌象、脉象与专业问诊综合判断。"
      }
    ],
    risks: [
      { name: "肝蓄", alias: "脂肪肝", rate: "0.29811" },
      { name: "心悸", alias: "心律失常", rate: "0.15148" },
      { name: "风眩", alias: "高血压", rate: "0.13016" },
      { name: "虚眩", alias: "低血压", rate: "0.05611" },
      { name: "血劳", alias: "缺铁性贫血", rate: "0.05442" },
      { name: "胆瘤", alias: "胆囊息肉", rate: "0.00994" },
      { name: "缺血中风", alias: "缺血性脑血管病", rate: "0.00090" }
    ],
    recipe: [
      { label: "组成", text: "牡丹皮 100g，地骨皮 100g" },
      { label: "使用", text: "每次 10-15 克，开水冲泡饮服，日 3 次。" },
      { label: "功效", text: "清膈宁心，益肾平肝。" },
      { label: "主治", text: "头晕目眩、胸膈心悸，四肢麻木，可预防高血压及冠心病。" }
    ]
  },

  onBack() {
    wx.navigateBack()
  }
})
