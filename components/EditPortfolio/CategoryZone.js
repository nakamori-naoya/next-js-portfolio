import React from 'react'
import CategoriesZone from '../../UIkit/CategoriesZone';
import SearchBar from '../../UIkit/SearchBar';
import IconButton  from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


const CategoryZone = React.memo(({
  chipData, handleDelete,incrementalSearch,
  options, inputValue, addCategories, category
}) => {
  return (
    <>
      <CategoriesZone 
      {...{chipData, handleDelete}}
      />
      <div className="flex justify-center">
        <SearchBar 
        onChange={(event)=>incrementalSearch(event,"categories")}
        value={options}
        onBlur={inputValue}
        label={"name"}
        />
        <IconButton >
          <AddIcon 
          onClick={()=>addCategories(category)}
          fontSize="large" className="text-white"/>
        </IconButton>
      </div>
    </>
  )
})

export default CategoryZone
