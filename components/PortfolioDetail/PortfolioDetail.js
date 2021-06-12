import React, {useState, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Grid, IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ControlledAccordions from '../../UIkit/ControlledAccordion';
import { SelectButton } from '../../UIkit/SelectButton';
import { RaderPlot } from './RaderPlot';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import Chats from './Chats';
import SimpleDarkButton from '../../UIkit/SimpleDarkButton';
import { getPortfolio, getPortfolios } from '../../DB/portfolio';
import { createEval } from '../../DB/portfolioEval';
import { getPortfolioAvgEval } from '../../DB/PortfolioAvgEval';
import { ImageSwiper } from './ImageSwiper';



const useStyles = makeStyles(() => ({

  icon: {
    height: 64,
    width: 64,
  },


}))



//portfolio_idをpropsとして受け取り、子コンポーネントにもpropsとして渡す
const PortfolioDetail = ({Portfolios}) => {
  const classes = useStyles()
  const [portfolio, setPortfolio] = useState({name: "", 
                                              background_of_creation:"",
                                              remarkable_point: "",
                                              future_issue: ""});
  const [avgEval, setAvgEval] = useState({
    portfolio_id: null,
    business_oriented: null,
    comprehensive_evaluation: null,
    creativity: null,
    skill: null,
    sociality: null,
    usability: null,
  })
  const [usability, setUsability] = useState(0);
  const [businessOriented, setBusinessOriented] = useState(0);
  const [sociality, setSociality] = useState(0);
  const [creativity, setCreativity] = useState(0);
  const [skill, setSkill] = useState(0);

  const  selectUsability  = useCallback((event) => {
    setUsability(event.target.value)
  }, [setUsability]);

  const  selectBusinessOriented  = useCallback((event) => {
    setBusinessOriented(event.target.value)
  }, [setBusinessOriented]);

  const  selectSociality  = useCallback((event) => {
    setSociality(event.target.value)
  }, [setSociality]);

  const  selectCreativity  = useCallback((event) => {
    setCreativity(event.target.value)
  }, [setCreativity]);

  const  selectSkill  = useCallback((event) => {
    setSkill(event.target.value)
  }, [setSkill]);



  useEffect(()=>{
    const get = async () => {
      const args = {id: 1}
      const res = await getPortfolio(args)
      console.log("res",res)
      setPortfolio(res.data)
      }
    const fetchAvgEval = async () => {
    const res = await getPortfolioAvgEval(1)
    }
    
    get()

    },[])
    console.log(portfolio)

    const avg = (array) =>{
      return array.reduce((prev,current)=>prev + current,0) / array.length;
  }

    const evaluate = async() =>{
    const obj1 = {portfolio_id: 1 ,user_id: 1}  //ここはstateやpropsから取得するので、このあと変更！！
    const obj2 = {skill: skill, creativity: creativity, usability: usability, sociality: sociality, business_oriented: businessOriented }
    const array = Object.values(obj2)  //objectのvalue部分のみ取得
    const args = {...obj1, ...obj2, comprehensive_evaluation: avg(array)}
    const res = await createEval(args)
    setAvgEval(res)
  }
  



return (
  <>
        <>
              <Grid container spacing={5}>  
                <Grid  item xs={4} >
                    <div className="">
                        {portfolio.name != null ? (
                        <h2 className="u-text__headline">{portfolio.name}</h2>)
                        :(
                        <h2 className="u-text__headline">""</h2>
                        )}
                        
                    <div className="flex justify-evenly">
                      <a href="aaaaaaaaaaaa" className="">
                        <DesktopMacIcon className={classes.icon}/>
                      </a>
                      <a href="sssssssss" >
                        <GitHubIcon className={classes.icon}/>
                      </a>
                      <IconButton className="h-16 w-16">
                        <AccountCircleIcon className={classes.icon}/>
                      </IconButton>
                      <IconButton className="mr-6 h-16 w-16">
                        <ThumbUpIcon className={classes.icon}/>
                      </IconButton>
                    </div>
                      <RaderPlot  avgEval={avgEval}/>
                    </div>
                </Grid>
                <Grid  item xs={4} >              
                    <ImageSwiper  />
                </Grid>
                <Grid item xs={4}>
                    {portfolio.background_of_creation && portfolio.remarkable_point && portfolio.future_issue ?
                    (<ControlledAccordions
                    backgroundOfCreation={portfolio.background_of_creation} 
                    remakablePoints={portfolio.remarkable_point}
                    futureIssue={portfolio.future_issue}
                    />): 
                    (<ControlledAccordions
                    backgroundOfCreation="未記入です"
                    remakablePoints="未記入です"
                    futureIssue="未記入です"
                    />)} 
                </Grid>
              </Grid >  
          <div className="pt-4 w-3/6 mx-auto">
            {skill && creativity &&  usability && sociality && businessOriented ?
            (<SimpleDarkButton
              className="h-14 w-36 hover:bg-black"
              label={"送信"}
              onClick={()=>evaluate()}
            />
              ):(
              <SimpleDarkButton
              className="h-14 w-36 border-gray-600"
              label={"送信"}
              disabled="true"
            />
              )}
          </div>
      <div className="pt-2 flex mx-auto justify-around ">
        <SelectButton
        label={"Usability"} value={usability} onChange={selectUsability} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを評価して下さい"}   />
        <SelectButton
        label={"Businness Oriented"} value={businessOriented} onChange={selectBusinessOriented} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"ビジネス性を評価して下さい"}   />
        <SelectButton
        label={"Sociality"} value={sociality} onChange={selectSociality} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"社会貢献性を評価して下さい"}   />
        <SelectButton
        label={"Creativity"} value={creativity} onChange={selectCreativity} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"発想の柔軟性を評価して下さい"}   />
        <SelectButton
        label={"Skill"} value={skill} onChange={selectSkill} 
        datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"技術力を評価して下さい　　　"}   />
      <Chats />
    </div>
    </>  
  </>
)
};

export default PortfolioDetail;