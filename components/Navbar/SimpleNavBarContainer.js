import React from 'react'
import SimpleNavBarPresenter from './SimpleNavBarPresenter';
import SearchedContextProvider from '../../ApiContext/SearchedContext';

const SimpleNavBarContainer = () => {
  return (
    <SearchedContextProvider >
      <SimpleNavBarPresenter/>
    </SearchedContextProvider>
  )
}

export default SimpleNavBarContainer
