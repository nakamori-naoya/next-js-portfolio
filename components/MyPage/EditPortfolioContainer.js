import React from 'react'
import useImage from '../../hooks/useImage';
import useEditPortfolio from '../../hooks/useEditPortfolio';
import useCategories from '../../hooks/useCategories';
import { StateContext } from '../../ApiContext/StateContext';
import { useContext, useEffect } from 'react';
import EditPortfolioPresenter from './EditPortfolioPresenter';

const EditPortfolioContainer = React.memo(({portfolio}) => {
  const {images, addImage, deleteImage} = useImage(false);
  const {
    appName, inputAppName, appUrl, inputAppUrl,description, 
    inputDescription,githubUrl, inputGithubUrl,setAppName,
    setAppUrl, setDescription,setGithubUrl, update
    } = useEditPortfolio()

  const {chipData, handleDelete,incrementalSearch,receiveExistingCategories,
          options, inputValue, addCategories, category} = useCategories()
  const {LoginUserId} = useContext(StateContext);

  useEffect(() => {
    setAppName(portfolio?.title)
    setAppUrl(portfolio?.site_url)
    setDescription(portfolio?.description)
    setGithubUrl(portfolio?.github_url)
    receiveExistingCategories(portfolio?.categories.map(category=>category.name))  
  }, [portfolio])
  const id = portfolio.id
  return (
    <EditPortfolioPresenter
      {...{
        id,appName, inputAppName, appUrl, inputAppUrl, update,
        description, inputDescription, githubUrl, inputGithubUrl,
        images, addImage, deleteImage,chipData, 
        handleDelete,incrementalSearch,options, inputValue, 
        addCategories, category,LoginUserId
      }}
    />
  )
})

export default EditPortfolioContainer
