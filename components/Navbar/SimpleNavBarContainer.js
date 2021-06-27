import React from 'react'
import SimpleNavBarPresenter from './SimpleNavBarPresenter';
import SearchedContextProvider from '../../ApiContext/SearchedContext';
import StateContextProvider from '../../ApiContext/StateContext';

const SimpleNavBarContainer = () => {
  return (
    <SearchedContextProvider >
      <SimpleNavBarPresenter/>
    </SearchedContextProvider >
  )
}

export default SimpleNavBarContainer
