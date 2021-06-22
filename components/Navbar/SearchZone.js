import React from 'react'
import CustomizedSelects from '../../UIkit/CustomizedSelect';
import SearchBar from '../../UIkit/SearchBar';
import  IconButton  from '@material-ui/core/IconButton';
import  SearchIcon  from '@material-ui/icons/Search';
import useCategories from '../../hooks/useCategories';


const SearchZone = React.memo(() => {
  const {
    options, inputValue, incrementalSearch, 
    select, handleChange, label } = useCategories()


  console.log(options, select)

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
        />
      </IconButton>
    </>
)
})

export default SearchZone
