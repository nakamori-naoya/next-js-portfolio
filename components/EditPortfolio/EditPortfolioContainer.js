import React from 'react'
import useImage from '../../hooks/useImage';
import EditPortfolioPresenter from './EditPortfolioPresenter';
import useEditPortfolio from '../../hooks/useEditPortfolio';
import useCategories from '../../hooks/useCategories';

const EditPortfolioContainer = React.memo(() => {
  const {images, addImage, deleteImage} = useImage(false);
  const {
    appName, inputAppName, appUrl, inputAppUrl,description, 
    inputDescription,githubUrl, inputGithubUrl,create
    } = useEditPortfolio()

  const {chipData, handleDelete,incrementalSearch,
          options, inputValue, addCategories, category} = useCategories()
  return (
    <EditPortfolioPresenter
      {...{
        appName, inputAppName, appUrl, inputAppUrl, create,
        description, inputDescription, githubUrl, inputGithubUrl,
        images, addImage, deleteImage,chipData, 
        handleDelete,incrementalSearch,options, inputValue, 
        addCategories, category
      }}
    />
  )
})

export default EditPortfolioContainer
