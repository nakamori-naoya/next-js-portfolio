import React from 'react'
import { useContext, useEffect } from 'react';
import { StateContext } from '../../ApiContext/StateContext';
import ProfileCards from '../Profile/ProfileCards';
import PortfolioCards from '../PortfolioList/PortfolioCards';

const SearchedListPresenter = ({searchedResult = []}) => {
  const isPortfolio = searchedResult[0]  ? "description" in searchedResult[0] : false 
  return (
    <div className="pt-10">
      <h2 className="text-center text-4xl font-serif pb-5">検索結果</h2>
      {isPortfolio ? (
      <PortfolioCards portfolios={searchedResult}/>
      ):(
      <ProfileCards  profiles={searchedResult}/>
      )}
    </div>
  )
}

export default SearchedListPresenter
