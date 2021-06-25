import React from 'react'
import SearchedContextProvider from '../ApiContext/SearchedContext'
import SimpleNavBarContainer from '../components/Navbar/SimpleNavBarContainer';
import SearchedListContainer from '../components/SearchedList/SearchedListContainer';

const searchResult = (props) => {
  return (
    <>
      <SimpleNavBarContainer/>

        <SearchedListContainer />
    </>
  )
}

export default searchResult
