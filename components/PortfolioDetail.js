// import React, {useState, useEffect, useCallback} from 'react';
// import {Grid, IconButton} from '@material-ui/core';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import ControlledAccordions from '../UIkit/ControlledAccordion';
// import { SelectButton } from '../UIkit/SelectButton';
// import { ImageSwiper } from './ImageSwiper';
// import { RaderPlot } from './RaderPlot';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import DesktopMacIcon from '@material-ui/icons/DesktopMac';
// import Chats from './Chats';
// import SimpleDarkButton from '../UIkit/SimpleDarkButton';
// import { createEval } from '../lib/portfolioEval';
// import { getPortfolioAvgEval } from '../lib/PortfolioAvgEval';
// import { StateContext } from '../ApiContext/StateContext';
// import { useContext } from 'react';






// //portfolio_idをpropsとして受け取り、子コンポーネントにもpropsとして渡す
// const PortfolioDetail = React.memo(({ id, staticPortfolio }) => {
//   const {myProfile,setMyProfile} = useContext(StateContext);
//   const [avgEval, setAvgEval] = useState({
//     portfolio_id: null,
//     business_oriented: null,
//     comprehensive_evaluation: null,
//     creativity: null,
//     skill: null,
//     sociality: null,
//     usability: null,
//   })
//   const [usability, setUsability] = useState(0);
//   const [businessOriented, setBusinessOriented] = useState(0);
//   const [sociality, setSociality] = useState(0);
//   const [creativity, setCreativity] = useState(0);
//   const [skill, setSkill] = useState(0);

//   const  selectUsability  = useCallback((event) => {
//     setUsability(event.target.value)
//   }, [setUsability]);

//   const  selectBusinessOriented  = useCallback((event) => {
//     setBusinessOriented(event.target.value)
//   }, [setBusinessOriented]);

//   const  selectSociality  = useCallback((event) => {
//     setSociality(event.target.value)
//   }, [setSociality]);

//   const  selectCreativity  = useCallback((event) => {
//     setCreativity(event.target.value)
//   }, [setCreativity]);

//   const  selectSkill  = useCallback((event) => {
//     setSkill(event.target.value)
//   }, [setSkill]);



//   useEffect(()=>{
//     const get = async() =>{
//       const res = await getPortfolioAvgEval(id)
//       res.data ? setAvgEval(res.data) : setAvgEval({
//         portfolio_id: null,
//         business_oriented: null,
//         comprehensive_evaluation: null,
//         creativity: null,
//         skill: null,
//         sociality: null,
//         usability: null,
//       })
//     }
//     get()
//    },[])

//    const avg = (array) =>{
//       return array.reduce((prev,current)=>prev + current,0) / array.length;
//   }

//    const evaluate = useCallback(async() =>{
//     const obj1 = {portfolio_id: id ,user_id: myProfile.id}  //ここはstateやpropsから取得するので、このあと変更！！
//     const obj2 = {skill: skill, creativity: creativity, usability: usability, sociality: sociality, business_oriented: businessOriented }
//     const array = Object.values(obj2)  //objectのvalue部分のみ取得
//     const args = {...obj1, ...obj2, comprehensive_evaluation: avg(array)}
//     const res = await createEval(args)
//     setAvgEval(res)
//   }) 


//  return (
//    <>
//         <>
//               <Grid container spacing={5}>  
//                 <Grid  item xs={4} >
//                     <div className="">
//                         {staticPortfolio.name != null ? (
//                         <h2 >{staticPortfolio.name}</h2>)
//                         :(
//                         <h2 >""</h2>
//                         )}
//                     <div className="flex justify-evenly">
//                       <IconButton >
//                         <DesktopMacIcon fontSize="large"/>
//                       </IconButton >
//                       <IconButton >
//                         <GitHubIcon fontSize="large"/>
//                       </IconButton >
//                       <IconButton >
//                         <AccountCircleIcon fontSize="large"/>
//                       </IconButton>
//                       <IconButton className="mr-6 h-16 w-16">
//                         <ThumbUpIcon fontSize="large"/>
//                       </IconButton>
//                     </div>

//                     <div className="h-96 w-96 mx-auto">
//                        <RaderPlot  avgEval={avgEval} />
//                     </div>
                      
//                     </div>
//                 </Grid>
//                 <Grid  item xs={4} >              
//                      <ImageSwiper  />
//                 </Grid>
//                 <Grid item xs={4}>
//                    {staticPortfolio.background_of_creation && staticPortfolio.remarkable_point && staticPortfolio.future_issue ?
//                     (<ControlledAccordions
//                     backgroundOfCreation={staticPortfolio.background_of_creation} 
//                     remakablePoints={staticPortfolio.remarkable_point}
//                     futureIssue={staticPortfolio.future_issue}
//                     />): 
//                     (<ControlledAccordions
//                     backgroundOfCreation="未記入です"
//                     remakablePoints="未記入です"
//                     futureIssue="未記入です"
//                     />)} 
//                 </Grid>
//              </Grid >  
//              <div className="pt-4 w-3/6 mx-auto">
//              {skill && creativity &&  usability && sociality && businessOriented ?
//              (<SimpleDarkButton
//               className="h-14 w-36 hover:bg-black"
//               label={"送信"}
//               onClick={()=>evaluate()}
//             />
//              ):(
//               <SimpleDarkButton
//               className="h-14 w-36 border-gray-600"
//               label={"送信"}
//               disabled="true"
//             />
//              )}
//              </div>
//       <div className="pt-2 flex mx-auto justify-around ">
//         <SelectButton
//         label={"Usability"} value={usability} onChange={selectUsability} 
//         datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを評価して下さい"}   />
//         <SelectButton
//         label={"Businness Oriented"} value={businessOriented} onChange={selectBusinessOriented} 
//         datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"ビジネス性を評価して下さい"}   />
//         <SelectButton
//         label={"Sociality"} value={sociality} onChange={selectSociality} 
//         datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"社会貢献性を評価して下さい"}   />
//         <SelectButton
//         label={"Creativity"} value={creativity} onChange={selectCreativity} 
//         datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"発想の柔軟性を評価して下さい"}   />
//         <SelectButton
//         label={"Skill"} value={skill} onChange={selectSkill} 
//         datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"技術力を評価して下さい　　　"}   />
//       <Chats id={id} />
//      </div>
//     </>  
//   </>
//  )
// });

// export default PortfolioDetail;