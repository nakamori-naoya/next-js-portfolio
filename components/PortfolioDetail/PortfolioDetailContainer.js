import React,{useEffect} from 'react';
import PortfolioDetailPresenter from './PortfolioDetailPresenter';
import usePortfolioDetail from '../../hooks/usePortfolioDetail';

//portfolio_idをpropsとして受け取り、子コンポーネントにもpropsとして渡す
const PortfolioDetailContainer = React.memo(({
  staticPortfolio, portfolioId
}) => {
  console.log(portfolioId)
  const {portfolio, setPortfolio, chats, setChats,avgEval, 
    setAvgEval, profile, setProfile, selectUsability, 
    selectBusinessOriented,  selectSociality, selectCreativity,  
    selectSkill, enteredUsability,
    enteredBusinessOriented, enteredSociality, 
    enteredCreativity,enteredSkill
    } = usePortfolioDetail()

  const {description, github_url: githubUrl, site_url: siteUrl, 
    title, images, chats : chatsArray=[], 
    } = staticPortfolio

  const {business_oriented: businessOriented, 
    comprehensive_evaluation: comprehensiveEvaluation,
    creativity, skill, sociality, usability
    } = staticPortfolio.avg_eval

  const {nickname: nickName, image, 
    user_id: userId
    }= staticPortfolio.profile
  
  useEffect(()=>{
    setPortfolio(prev => (
      { ...prev, ...{
        description, githubUrl, 
        siteUrl,title,images}
      }))

    setChats(chatsArray)

    setAvgEval(prev =>({
      ...prev, ...{
      businessOriented, comprehensiveEvaluation,
      creativity, skill, sociality, usability
      }}))

    setProfile(prev =>({
      ...prev, ...{nickName, image, userId}
      }))
  },[])
  
return (
  <PortfolioDetailPresenter
    {...{portfolio,  chats, setChats,avgEval, 
    setAvgEval, profile, usability, selectUsability, 
    businessOriented, selectBusinessOriented, sociality, selectSociality, 
    creativity, selectCreativity, skill, selectSkill, portfolioId,
    enteredUsability, enteredBusinessOriented, enteredSociality, 
    enteredCreativity, enteredSkill
    }}/>
)
})

export default PortfolioDetailContainer;