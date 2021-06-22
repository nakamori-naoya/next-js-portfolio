import { useCallback, useState } from 'react';

const usePortfolioDetail = () => {
  const [portfolio, setPortfolio] = useState({
    description: "", githubUrl: "",
    siteUrl: "",title: "", images: "",
  });
  const [chats, setChats] = useState([])
  const [avgEval, setAvgEval] = useState({
    businessOriented: null, comprehensiveEvaluation: null,
    creativity: null, skill: null, sociality: null, usability: null,
  })
  const [profile, setProfile] = useState({
    nickName: "", image: "",userId: null
  })

const [enteredUsability, setUsability] = useState(0);
const [enteredBusinessOriented, setBusinessOriented] = useState(0);
const [enteredSociality, setSociality] = useState(0);
const [enteredCreativity, setCreativity] = useState(0);
const [enteredSkill, setSkill] = useState(0);

const  selectUsability  = useCallback((event) => {
  console.log(100)
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

return {portfolio, setPortfolio, chats, setChats,avgEval, 
  setAvgEval, profile, setProfile,  selectUsability, 
  selectBusinessOriented, selectSociality, 
  selectCreativity,  selectSkill, enteredUsability,
  enteredBusinessOriented, enteredSociality, 
  enteredCreativity,enteredSkill

}



// useEffect(()=>{
//   const get = async () => {
//     // const args = {id: 1}
//     // const res = await getPortfolio(args)
//     // console.log("res",res)
//     // setPortfolio(res.data)
//     }
//   const fetchAvgEval = async () => {
//   // const res = await getPortfolioAvgEval(1)
//   }

//   get()

//   },[])
//   console.log(portfolio)

//   const avg = (array) =>{
//     return array.reduce((prev,current)=>prev + current,0) / array.length;
// }

//   const evaluate = async() =>{
//   // const obj1 = {portfolio_id: 1 ,user_id: 1}  //ここはstateやpropsから取得するので、このあと変更！！
//   // const obj2 = {skill: skill, creativity: creativity, usability: usability, sociality: sociality, business_oriented: businessOriented }
//   // const array = Object.values(obj2)  //objectのvalue部分のみ取得
//   // const args = {...obj1, ...obj2, comprehensive_evaluation: avg(array)}
//   // const res = await createEval(args)
//   // setAvgEval(res)
// }

}

export default usePortfolioDetail
