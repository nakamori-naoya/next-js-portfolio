import React from 'react'
import PortfolioCards from '../PortfolioList/PortfolioCards';
import ProfileCards from '../ProfileCards/ProfileCardsPresenter';
import { useContext, useEffect } from 'react';
import ProfileCard from '../Profile/ProfileCard';
import SearchedListPresenter from './SearchedListPresenter';
import StateContextProvider, { StateContext } from '../../ApiContext/StateContext';
import SearchedContextProvider, { SearchedContext } from '../../ApiContext/SearchedContext';
import useCategories from '../../hooks/useCategories';
import { useRouter } from 'next/router';
const SearchedListContainer = () => {


  return (
    <>
    </>
  )
}

export default SearchedListContainer
