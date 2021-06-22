import React from 'react'
import CategoryZone from './CategoryZone';
import InputBoxes from './InputBoxes';
import SimpleDarkButton from '../../UIkit/SimpleDarkButton';
import ImageArea from '../ImageArea/ImageArea';

const EditPortfolioPresenter = React.memo((props) => {
  const {images, addImage, deleteImage} = props
  const {appName, inputAppName, appUrl, inputAppUrl,
    description, inputDescription,githubUrl, inputGithubUrl,
  } = props
  const {chipData, handleDelete,incrementalSearch,
    options, inputValue, addCategories, category} = props
  const {create} = props
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
        <SimpleDarkButton
        className="h-14 w-36 hover:bg-black" label={"登録"}
        onClick={()=>create(
          {images, appName, appUrl, description, githubUrl, chipData}
        )}
        />
      </div> 
    </div>
  )
})

export default EditPortfolioPresenter
