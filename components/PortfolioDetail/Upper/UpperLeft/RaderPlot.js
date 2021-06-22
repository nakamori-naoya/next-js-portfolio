import React from 'react'
import {Radar} from "react-chartjs-2"
//npm i chart.js react-chartjs-2
const options = {
  scale: {
        min: 0,
        max: 5.0,
      pointLabels: {       // 軸のラベル（総合評価など）
        fontColor: " #ffffff"  
      },
      gridLines: {         // 補助線（目盛の線）
        color: " #ffffff"
      }
  },
  legend: {
    labels: {
        fontColor: " #ffffff",
    }
  },
  maintainAspectRatio: false
}

export const RaderPlot = React.memo(({avgEval}) => {

const datas = {
  labels: [
    "使いやすさ",
    "ビジネス性",
    "社会貢献性",
    "創造性",
    "技術力",
    "総合評価"
  ],
  datasets: [
  {
    label: "みんなの評価",
    backgroundColor: "rgba(255,0,0,0.2)",
    borderColor: "#ff1493",
    pointBackgroundColor:  "f1493",
    pointBorderColor: "#fff",
    data: [
      avgEval.usability, avgEval.businessOriented, 
      avgEval.sociality , avgEval.creativity , avgEval.skill ,
      avgEval.comprehensiveEvaluation ],
  }
]
}

  return (
    <div className="h-80 w-80 mx-auto">
      <Radar data={datas}  options={options}/>
    </div>
  )
}
)
