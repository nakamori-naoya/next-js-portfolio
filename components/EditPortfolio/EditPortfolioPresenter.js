import React from 'react'
import CategoryZone from './CategoryZone';
import InputBoxes from './InputBoxes';
import SimpleDarkButton from '../../UIkit/SimpleDarkButton';
import ImageArea from '../ImageArea/ImageArea';

const EditPortfolioPresenter = React.memo((
  {images, addImage, deleteImage,appName, inputAppName, appUrl, inputAppUrl,
    description, inputDescription,githubUrl, inputGithubUrl,
    chipData, handleDelete,incrementalSearch, options, 
    inputValue, addCategories, category, create, LoginUserId} 
) => {
  const userId = LoginUserId
return (
    <div className="w-2/5  mx-auto -mt-4 pt-4">
      <ImageArea 
        {...{images, addImage, deleteImage}}
      />
      <InputBoxes 
        {...{appName, inputAppName,
          appUrl, inputAppUrl,
          description, inputDescription,
          githubUrl, inputGithubUrl,
        }}
      />
      <CategoryZone
      {...{chipData, handleDelete,incrementalSearch,
        options, inputValue, addCategories, category}}
      />
      <div  className="flex pt-20 justify-center p-3">
        { appName && appUrl && images.length > 0 && description && 
          githubUrl && chipData.length > 0 ? 
        (
        <SimpleDarkButton
          label={"登録"}
          onClick={()=>create(
            {images, appName, appUrl, description, githubUrl, chipData, userId}
        )}
        />):(
        <SimpleDarkButton
          label={"登録"}
          disabled="true"
          />)}
      </div> 
    </div>
  )
})

export default EditPortfolioPresenter
