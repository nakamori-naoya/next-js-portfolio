import { useEffect, useState, useContext } from "react";
import SimpleCard from "./MyPortfolioCard";
import Cookie from "universal-cookie";
import { getBlog, fetchAllBlogs, deleteBlog } from "../../lib/Blog";
import { Grid } from "@material-ui/core";
import { useBlogs } from "../../hooks/useBlogs";
import { ApiContext } from "../../ApiContext/ApiContext";
import  axios  from 'axios';
import { getPortfolios } from '../../DB/portfolio';
import PortfolioCards from "./PortfolioCards";




const cookie = new Cookie();

export default function PortfolioList() {
  const token = cookie.get("access_token");
  const [newArrivals, setNewArrivals] = useState([]);
  const [highComprehensiveEvaluation, setHighComprehensiveEvaluations] = useState([]);
  const [highCreativity, setHighCreativity] = useState([]);
  const [highSkill, setHighSkill] = useState([]);
  const [highSociality, setHighSociality] = useState([]);
  const [highUsability, setHighUsability] = useState([]);
  const [highBusinessOriented, setHighBusinessOriented] = useState([]);

  useEffect(()=>{
    const get = async () => {
    setNewArrivals(["aa","aa","bb","aa","aa","aa","bb","aa","aa","aa","bb","aa"])
      // const res = await getPortfolios()
      // setNewArrivals(res.newArrival)
      // setHighComprehensiveEvaluations(res.highComprehensiveEvaluation)
      // setHighCreativity(res.highCreativity)
      // setHighSkill(res.highSkill)
      // setHighSociality(res.highSociality)
      // setHighUsability(res.highUsability)
      // setHighBusinessOriented(res.highBusinessOriented)
    }
    get()
  },[])

return (
  <div >
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
