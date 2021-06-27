import React from 'react'
import { useRouter } from 'next/router';
import EditProfileContainer from '../components/MyPage/EditProfileContainer';
import StateContextProvider from '../ApiContext/StateContext';

const EditProfile = () => {
  const router = useRouter()
  const {
    nickName,selectedDate,
    selfIntroduction,images, webSite} = router.query
  return (
    <StateContextProvider>
      <EditProfileContainer
        nickName={nickName}
        selectedDate={selectedDate}
        selfIntroduction={selfIntroduction}
        images={images}
        webSite={webSite}
      />
    </StateContextProvider>
  )
}

export default EditProfile
