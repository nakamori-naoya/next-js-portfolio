import { createContext, useEffect, useState, } from "react";

export const SearchedContext = createContext();
export default function SearchedContextProvider (props)  {
  const [searchedResult, setSearchedResult]= useState(["aaa","ssss"])
  
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

