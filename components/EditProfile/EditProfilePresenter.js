import React from 'react'
import SimpleDarkButton from '../../UIkit/SimpleDarkButton';
import ImageArea from '../ImageArea/ImageArea';
import SelectDateZone from './SelectDateZone';
import InputTextZone from './InputTextZone';

const EditProfilePresenter = React.memo(({
  images, addImage, deleteImage, 
  selectedDate, handleDateChange,
  inputNickName, nickName,
  inputSelfIntroduction, selfIntroduction,
  inputWebSite, webSite,userId,
  create
}) => {
  console.log(userId)
  return (
    <section className="pt-4 w-2/5 mx-auto">
      <h2 className="pt-2 font-serif font-semibold text-2xl text-center" >プロフィールを登録する</h2> 
    <div >
      <ImageArea images={images} addImage={addImage} deleteImage={deleteImage} />
      <InputTextZone
        {...{ inputNickName, nickName,
          inputSelfIntroduction, selfIntroduction,
          inputWebSite, webSite,userId,}}
      />
      <div className="flex justify-center">
        <SelectDateZone
          value={selectedDate} 
          onChange={handleDateChange}/>
      </div>
    </div>
    <div  className="flex pt-20 justify-evenly">
      {nickName && nickName.length <= 20 && images.length >= 1 && selectedDate && selfIntroduction.length <= 400 ?
      (<SimpleDarkButton
        className="text-2xl font-serif"
        label={"登録"}
        onClick={()=>create({userId, images, nickName, selfIntroduction, webSite, selectedDate})}
      />):
      (<SimpleDarkButton
        className="text-2xl font-serif"
        label={"登録"}
        disabled="true"
      />)
      }
    </div>   
  </section>
  )
})

export default EditProfilePresenter


