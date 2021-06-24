import { createContext, useState, } from "react";
export const SearchedContext = createContext();
export default function SearchedContextProvider (props)  {
  const [searchedResult, setSearchedResult]= useState([])
  return (
    <SearchedContext.Provider
      value={{
        searchedResult, 
        setSearchedResult
      }}
    >
      {props.children}
    </SearchedContext.Provider>
  );
};

