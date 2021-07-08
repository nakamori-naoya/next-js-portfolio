import React from 'react'
import UpperPresenter from './Upper/UpperPresenter';
import MiddlePresenter from './MIddle/MiddlePresenter';
import LowerPresenter from './Lower/LowerPresenter';
import Portfolio from '../../pages/portfolios/[id]';

const PortfolioDetailPresenter = React.memo(({
  portfolio,  chats, setChats,avgEval, 
  setAvgEval,  usability, selectUsability, 
  businessOriented, selectBusinessOriented, sociality, selectSociality, 
  creativity, selectCreativity, skill, selectSkill, portfolioId,
  enteredUsability,enteredBusinessOriented, enteredSociality, 
  enteredCreativity,enteredSkill, profile
  }) => {
  const {siteUrl, description, githubUrl, images, title } = portfolio
  const {userId, profileImage } = profile


  return (
  <div className="pt-4">
    <UpperPresenter 
    {...{avgEval, siteUrl, description, githubUrl, images, profileImage, userId ,title}}
    />
    <MiddlePresenter 
    {...{
      setAvgEval,  selectUsability, selectBusinessOriented, 
      selectSociality, selectCreativity,
      selectSkill, portfolioId, enteredUsability,
      enteredBusinessOriented, enteredSociality, 
      enteredCreativity,enteredSkill
    }}
    />
    <LowerPresenter
    {...{chats, setChats, portfolioId}}/
    >
  </div>
  )
})

export default PortfolioDetailPresenter
