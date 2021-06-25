import React from 'react'
import PortfolioCards from '../PortfolioList/PortfolioCards';
import ProfileCards from '../ProfileCards/ProfileCardsPresenter';
import { useContext, useEffect } from 'react';
import ProfileCard from '../Profile/ProfileCard';
import SearchedListPresenter from './SearchedListPresenter';
import { SearchedContext } from '../../ApiContext/SearchedContext';

const SearchedListContainer = () => {
  return (
    // <div className="pt-10">
    //   <h2 className="text-center text-4xl font-serif pb-5">検索結果</h2>
      <SearchedContext>
        <SearchedListPresenter/>
      </SearchedContext>
      // {/* {profiles.length > 0 ? (
      // <ProfileCards />
      // ): 
      // portfolios.length > 0 ? (
      // <PortfolioCards portfolios={portfolios}/>
      // ):
      // (
      // <h1 className="text-6xl text-center font-extrabold font-sans">検索結果なし</h1>
      // )} */}
    // </div>
  )
}

export default SearchedListContainer
