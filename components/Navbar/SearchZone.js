import React from 'react'
import CustomizedSelects from '../../UIkit/CustomizedSelect';
import SearchBar from '../../UIkit/SearchBar';
import  IconButton  from '@material-ui/core/IconButton';
import  SearchIcon  from '@material-ui/icons/Search';
import useCategories from '../../hooks/useCategories';
import { SearchedContext } from '../../ApiContext/SearchedContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';



const SearchZone = React.memo(() => {
  const router = useRouter();
  const {
    options, inputValue, incrementalSearch, 
    select, handleChange, label ,category} = useCategories()
    const {setSearchedResult} = useContext(SearchedContext);

  const search = () =>{
    setSearchedResult(category)
    router.push("/portfolio-cards");
  }

  return (
    <>
      <CustomizedSelects
      value={select}
      onChange={handleChange}
      />
      <SearchBar 
        onChange={(event)=>incrementalSearch(event,select)}
        value={options}
        onBlur={inputValue}
        label={label}
      />
      <IconButton >
        <SearchIcon 
        fontSize="large" 
        className="text-white"
        // onClick={()=>()}
        />
      </IconButton>
    </>
)
})

export default SearchZone
