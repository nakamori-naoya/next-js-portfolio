import {useContext} from 'react'
import EditProfilePresenter from './EditProfilePresenter';
import { StateContext } from '../../ApiContext/StateContext';
import useImage from '../../hooks/useImage';
import useEditProfile from '../../hooks/useEditProfile';
import React from 'react';


const EditProfileContainer = React.memo(() => {
  const {images, addImage, deleteImage} = useImage(false);
  const {inputNickName, inputSelfIntroduction, 
          handleDateChange, inputWebSite, webSite,
          selectedDate, nickName, selfIntroduction,
          create
        } = useEditProfile();
  const {userId} = useContext(StateContext);

return (
    <EditProfilePresenter 
      selectedDate={selectedDate} images={images} addImage={addImage} 
      deleteImage={deleteImage} handleDateChange={handleDateChange}
      inputNickName={inputNickName} nickName={nickName} create={create}
      inputSelfIntroduction={inputSelfIntroduction} selfIntroduction={selfIntroduction}
      inputWebSite={inputWebSite} webSite={webSite} userId={userId}
    />
  )
})

export default EditProfileContainer