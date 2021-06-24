import { useEffect, useState, useContext } from "react";
import PortfolioCards from "./PortfolioCards";

export default function PortfolioListPresenter({staticfilteredPortfolios}) {
  const [newArrivals, setNewArrivals] = useState([]);
  const [highComprehensiveEvaluation, setHighComprehensiveEvaluations] = useState([]);
  const [highCreativity, setHighCreativity] = useState([]);
  const [highSkill, setHighSkill] = useState([]);
  const [highSociality, setHighSociality] = useState([]);
  const [highUsability, setHighUsability] = useState([]);
  const [highBusinessOriented, setHighBusinessOriented] = useState([]);

  useEffect(()=>{
    setNewArrivals(staticfilteredPortfolios.newArrival)
    setHighComprehensiveEvaluations(staticfilteredPortfolios.highComprehensiveEvaluation)
    setHighComprehensiveEvaluations(staticfilteredPortfolios.highComprehensiveEvaluation)
    setHighCreativity(staticfilteredPortfolios.highCreativity)
    setHighSkill(staticfilteredPortfolios.highSkill)
    setHighSociality(staticfilteredPortfolios.highSociality)
    setHighUsability(staticfilteredPortfolios.highUsability)
    setHighBusinessOriented(staticfilteredPortfolios.highBusinessOriented)
  },[])

return (
  <div className="-mt-4" >
    <PortfolioCards title="新着のアプリ" portfolios={newArrivals}/>
    <PortfolioCards title="総合評価が高いアプリ" portfolios={highComprehensiveEvaluation}/>
    <PortfolioCards title="技術力の評価が高いアプリ" portfolios={highSkill}/>
    <PortfolioCards title="創造性の評価が高いアプリ" portfolios={highCreativity}/>
    <PortfolioCards title="使用性の評価が高いアプリ" portfolios={highUsability}/>
    <PortfolioCards title="ビジネス性の評価が高いアプリ" portfolios={highBusinessOriented}/>
    <PortfolioCards title="社会性の評価が高いアプリ" portfolios={highSociality}/>
  </div>
  );
}
