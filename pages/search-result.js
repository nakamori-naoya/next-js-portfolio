import React from 'react'
import SearchedContextProvider from '../ApiContext/SearchedContext'
import StateContextProvider from '../ApiContext/StateContext';
import SimpleNavBarContainer from '../components/Navbar/SimpleNavBarContainer';
import SearchedListContainer from '../components/SearchedList/SearchedListContainer';
import SearchedListPresenter from '../components/SearchedList/SearchedListPresenter';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search } from '../lib/search';

const searchResult = (props) => {
  const router = useRouter();
  const category = router.query.keyword ? router.query.keyword  : []
  const select = router.query.category ? router.query.category  : "categories"
  const [searchedResult,setSearchedResult] = useState([])

  useEffect(() => {
    const searching = async() =>{
      const res = await search({keyword: category , category: select })
      setSearchedResult([...res.data])
    }
    searching()
  }, [category, select])
  
  return (
    <>
      <SimpleNavBarContainer/> 
      <SearchedListPresenter {...{searchedResult}} />
    </>
  )
}

export default searchResult
