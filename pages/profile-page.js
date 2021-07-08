import React from 'react'
import SimpleNavBarContainer from '../components/Navbar/SimpleNavBarContainer';
import ProfilePageContainer from '../components/ProfilePage/ProfilePageContainer';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter()
  const {userId} = router.query
  return (
    <>
      <SimpleNavBarContainer />
      <div className="pt-5" />
      <ProfilePageContainer 
      userId={userId}
      />
    </>
  )
}

export default ProfilePage
