import { createContext, useEffect, useState, } from "react";
import SearchedListContainer from '../components/SearchedList/SearchedListContainer';
import SearchZone from '../components/Navbar/SearchZone';
import searchResult from '../pages/search-result';

export const SearchedContext = createContext();
export default function SearchedContextProvider (props)  {
  const [searchedResult, setSearchedResult]= useState([])
  
  const setResult = (data)=>{
    setSearchedResult(data)
  }
  return (
    <SearchedContext.Provider
      value={{
        searchedResult, 
        setResult,
        setSearchedResult
      }}
    >
    {props.children}
    </SearchedContext.Provider>
  );
};

