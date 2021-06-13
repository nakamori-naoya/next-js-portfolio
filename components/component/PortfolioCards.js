import { useEffect, useState, useContext } from "react";
import SimpleCard from "../UIkit/SimpleCard";

export default function PortfolioCards({staticfilteredPortfolios}) {
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
        setHighCreativity(staticfilteredPortfolios.highCreativity)
        setHighSkill(staticfilteredPortfolios.highSkill)
        setHighSociality(staticfilteredPortfolios.highSociality)
        setHighUsability(staticfilteredPortfolios.highUsability)
        setHighBusinessOriented(staticfilteredPortfolios.highBusinessOriented)
    },[])
  
    return (
     <>
      <h2>新着アプリ</h2>
      <div className="w-screen flex overflow-x-scroll p-10 ">
        {newArrivals.length > 0 &&
          newArrivals.map((portfolio) => (
              <div className="ml-5 ">
                <SimpleCard 
                id = {portfolio.id}
                title={portfolio.name}
                subheader={portfolio.updated_at}
                // avatar={myProfile.image_data}
                // edit={() => getBlog(token, portfolio.id)}
                // delete={() => deleteBlog(token, portfolio.id)}
                HeadClass="w-80 whitespace-nowrap ml-5"
                />
              </div> 
          ))}
    </div>
    
    <h2>総合評価が高いアプリ</h2>
    <div className="w-screen flex overflow-x-scroll p-10">
        {highComprehensiveEvaluation.length > 0 &&
          highComprehensiveEvaluation.map((portfolio) => (
              <div>
                <SimpleCard 
                  id = {portfolio.id}
                  title={portfolio.name}
                  subheader={portfolio.updated_at}
                 // avatar={myProfile.image_data}
                //  edit={() => getBlog(token, portfolio.id)}
                //  delete={() => deleteBlog(token, portfolio.id)}
                  HeadClass="max-h-96 w-64 whitespace-nowrap ml-5 "
                />
              </div> 
          ))}
    </div>
  
  
     <h2>技術力の評価が高いアプリ</h2>
     <div className="w-screen flex overflow-x-scroll p-10">
        {highSkill.length > 0 &&
          highSkill.map((portfolio) => (
              <div>
               <SimpleCard 
                 id = {portfolio.id}
                 title={portfolio.name}
                 subheader={portfolio.updated_at}
                 // avatar={myProfile.image_data}
                //  edit={() => getBlog(token, portfolio.id)}
                //  delete={() => deleteBlog(token, portfolio.id)}
                HeadClass="max-h-96 w-64 whitespace-nowrap ml-5 "
               />
               </div> 
          ))}
     </div>
  
     <h2>創造性の評価が高いアプリ</h2>
     <div className="w-screen flex overflow-x-scroll p-10">
        {highCreativity.length > 0 &&
          highCreativity.map((portfolio) => (
              <div>
               <SimpleCard 
                 id = {portfolio.id}
                 title={portfolio.name}
                 subheader={portfolio.updated_at}
                 // avatar={myProfile.image_data}
                //  edit={() => getBlog(token, portfolio.id)}
                //  delete={() => deleteBlog(token, portfolio.id)}
                HeadClass="max-h-96 w-64 whitespace-nowrap ml-5 "
               />
               </div> 
          ))}
     </div>
  
     <h2>使用性の評価が高いアプリ</h2>
     <div className="w-screen flex overflow-x-scroll p-10">
        {highUsability.length > 0 &&
          highUsability.map((portfolio) => (
              <div>
               <SimpleCard 
                 id = {portfolio.id}
                 title={portfolio.name}
                 subheader={portfolio.updated_at}
                 // avatar={myProfile.image_data}
                //  edit={() => getBlog(token, portfolio.id)}
                //  delete={() => deleteBlog(token, portfolio.id)}
                HeadClass="max-h-96 w-64 whitespace-nowrap ml-5 "
               />
               </div> 
          ))}
     </div>
  
     <h2>ビジネス性の評価が高いアプリ</h2>
     <div className="w-screen flex overflow-x-scroll p-10">
        {highBusinessOriented.length > 0 &&
          highBusinessOriented.map((portfolio) => (
              <div>
               <SimpleCard 
                 id = {portfolio.id}
                 title={portfolio.name}
                 subheader={portfolio.updated_at}
                 // avatar={myProfile.image_data}
                //  edit={() => getBlog(token, portfolio.id)}
                //  delete={() => deleteBlog(token, portfolio.id)}
                HeadClass="max-h-96 w-64 whitespace-nowrap ml-5 "
               />
               </div> 
          ))}
     </div>
  
     <h2>社会性の評価が高いアプリ</h2>
     <div className="w-screen flex overflow-x-scroll p-10">
        {highSociality.length > 0 &&
          highSociality.map((portfolio) => (
              <div>
               <SimpleCard 
                 id = {portfolio.id}
                 title={portfolio.name}
                 subheader={portfolio.updated_at}
                 // avatar={myProfile.image_data}
                //  edit={() => getBlog(token, portfolio.id)}
                //  delete={() => deleteBlog(token, portfolio.id)}
                HeadClass="max-h-96 w-64 whitespace-nowrap ml-5 "
               />
               </div> 
          ))}
      </div>
    </>
    );
  }
  
