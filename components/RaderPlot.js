import React from 'react'
import {Radar} from "react-chartjs-2"
import { makeStyles } from '@material-ui/core/styles';
//npm i chart.js react-chartjs-2



const options = {
  scale: {
      min: 0,
      max: 5.0
  }}


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
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "#ff1493",
    pointBackgroundColor:  "f1493",
    pointBorderColor: "#fff",
    data: [avgEval.usability, avgEval.business_oriented, avgEval.sociality, 
           avgEval.creativity, avgEval.skill, avgEval.comprehensive_evaluation]
  }
]
}

  return (
      <Radar data={datas}  options={options} />
  )
}
)
