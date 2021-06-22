import React from 'react'
import { SelectButton } from '../../../UIkit/SelectButton';
import SimpleDarkButton from '../../../UIkit/SimpleDarkButton';
import { StateContext } from '../../../ApiContext/StateContext';
import { useContext } from 'react';
import { createEval } from '../../../lib/portfolioEval';
import usePortfolioDetail from '../../../hooks/usePortfolioDetail';

const Middle = React.memo(({
  setAvgEval,  selectUsability, 
  selectBusinessOriented,  selectSociality, 
  selectCreativity, selectSkill, portfolioId, enteredUsability: usability,
  enteredBusinessOriented: businessOriented , enteredSociality: sociality, 
  enteredCreativity: creativity, enteredSkill: skill
}) => {

  const {LoginUserId} = useContext(StateContext)

  const post = async({
      sociality, creativity, usability,
      businessOriented, skill, portfolioId , LoginUserId
      }) => {
        
        const comprehensiveEvaluation = calc_average([
          sociality, creativity, usability,
          businessOriented, skill
        ])

        const res = await createEval({
          sociality, creativity, usability,
          businessOriented, skill, comprehensiveEvaluation,
          portfolioId, LoginUserId
        })

        {
        const {
          sociality, creativity, usability,
          business_oriented: businessOriented, skill,
          comprehensive_evaluation: comprehensiveEvaluation} = res.data
        setAvgEval({sociality,creativity, usability,
                    businessOriented,skill, comprehensiveEvaluation})
        console.log(
          res.data,
          "sociality, creativity, usability,businessOriented, skill,comprehensiveEvaluation",
          sociality, creativity, usability,
          businessOriented, skill,
          comprehensiveEvaluation)
      }
  }


  const calc_average = (arr) =>{
    return sum(arr) / arr.length;
  };
  const sum  = (arr) => {
    return arr.reduce((prev, current) => {
        return prev+current;
    });
  };

  return (
  <>
    <div className="pt-2 flex mx-auto justify-around ">
      <SelectButton
        label={"Usability"} 
        value={usability} onChange={selectUsability} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} 
        description={"使いやすさを評価して下さい"}   />
      <SelectButton
        label={"Businness Oriented"} 
        value={businessOriented} onChange={selectBusinessOriented} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} 
        description={"ビジネス性を評価して下さい"}   />
      <SelectButton
        label={"Sociality"} 
        value={sociality} onChange={selectSociality} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} 
        description={"社会貢献性を評価して下さい"}   />
      <SelectButton
        label={"Creativity"} 
        value={creativity} onChange={selectCreativity} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} 
        description={"発想の柔軟性を評価して下さい"}   />
      <SelectButton
        label={"Skill"} 
        value={skill} onChange={selectSkill} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} 
        description={"技術力を評価して下さい"}   />
    </div>
    <div className="flex justify-center">
    { skill && creativity &&  usability && sociality && businessOriented ?
      (<SimpleDarkButton
        label={"評価を送信"}
        onClick={()=>post({sociality, creativity, usability,
          businessOriented, skill, portfolioId ,LoginUserId
          })}
      />
      ):(
      <SimpleDarkButton
        label={"評価を送信"}
        disabled="true"
      />)}
    </div>
  </>
  )
})

export default Middle
