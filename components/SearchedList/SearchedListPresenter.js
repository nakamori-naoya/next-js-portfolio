import React from 'react'
import { useContext, useEffect } from 'react';
import { SearchedContext } from '../../ApiContext/SearchedContext';

const SearchedListPresenter = () => {
  const {searchedResult} = useContext(SearchedContext)
  console.log("searchedResult",searchedResult)

  return (
    <div>
      Hello
    </div>
  )
}

export default SearchedListPresenter
