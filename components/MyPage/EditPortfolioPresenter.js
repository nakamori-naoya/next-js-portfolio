import React from 'react'
import ImageArea from '../ImageArea/ImageArea';
import InputBoxes from '../EditPortfolio/InputBoxes';
import CategoryZone from '../EditPortfolio/CategoryZone';
import SimpleDarkButton from '../../UIkit/SimpleDarkButton';

const EditPortfolioPresenter = React.memo((
  {id,images, addImage, deleteImage,appName, inputAppName, appUrl, inputAppUrl,
    description, inputDescription,githubUrl, inputGithubUrl,
    chipData, handleDelete,incrementalSearch, options, 
    inputValue, addCategories, category, update, LoginUserId} 
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
          onClick={()=>update(
            {id,images, appName, appUrl, description, githubUrl, chipData, userId}
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
