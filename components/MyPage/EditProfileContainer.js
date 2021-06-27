import {useContext} from 'react'
import { StateContext } from '../../ApiContext/StateContext';
import useImage from '../../hooks/useImage';
import useEditProfile from '../../hooks/useEditProfile';
import React from 'react';
import EditProfilePresenter from '../EditProfile/EditProfilePresenter';
import Layout from '../Layout';
import { useEffect } from 'react';


const EditProfileContainer = React.memo((props) => {
  const {images, addImage, deleteImage} = useImage(false);
  const {inputNickName, inputSelfIntroduction, 
          handleDateChange, inputWebSite, 
          setNickName,setSelfIntroduction,setSelectedDate,setWebSite,
          nickName,selectedDate,selfIntroduction,webSite,
        } = useEditProfile();
  const {LoginUserId} = useContext(StateContext);
  
  useEffect(() => {
    setNickName(props.nickName)
    setSelfIntroduction(props.selfIntroduction)
    setSelectedDate(props.selectedDate)
    setWebSite(props.webSite)
  }, [])

  return (
    <Layout >
    <EditProfilePresenter 
      selectedDate={selectedDate} images={images} addImage={addImage} 
      deleteImage={deleteImage} handleDateChange={handleDateChange}
      inputNickName={inputNickName} nickName={nickName} 
      inputSelfIntroduction={inputSelfIntroduction} selfIntroduction={selfIntroduction}
      inputWebSite={inputWebSite} webSite={webSite} LoginUserId={LoginUserId}
    />
    </Layout>

  )
})

export default EditProfileContainer