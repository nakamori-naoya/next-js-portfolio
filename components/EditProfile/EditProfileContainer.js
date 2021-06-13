import {useContext} from 'react'
import useImage from '../../hooks/useImage';
import useEditProfile from '../../hooks/useEditProfile';
import EditProfilePresenter from './EditProfilePresenter';
import { StateContext } from '../../ApiContext/StateContext';


export const EditProfileContainer = () => {
  const {images, uploadImage, deleteImage} = useImage(false)
  const {inputNickName, inputSelfIntroduction, 
          handleDateChange, inputWebSite, webSite,
          selectedDate, nickName, selfIntroduction,
          create
        } = useEditProfile()
  const {userId} = useContext(StateContext);
return (
    <EditProfilePresenter 
      selectedDate={selectedDate} images={images} uploadImage={uploadImage} 
      deleteImage={deleteImage} handleDateChange={handleDateChange}
      inputNickName={inputNickName} nickName={nickName}
      inputSelfIntroduction={inputSelfIntroduction} selfIntroduction={selfIntroduction}
      inputWebSite={inputWebSite} webSite={webSite} userId={userId}
      create={create}
    />
  )
}
