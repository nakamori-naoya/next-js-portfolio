import React from 'react'
import ProfileCard from './ProfileCard';


const ProfileCardsPresenter = () => {
  const profiles = ["aa", "aa","","","aa", "aa","","","aa", "aa","",""]
  return (
    <div className="-mt-4 w-screen flex overflow-x-scroll pb-6">
      {profiles.length > 0 &&
        profiles.map((profile) => (
          <div className="ml-5 pt-4">
            <ProfileCard id={profile.id} key={profile.id} profile={profile}/>
          </div> 
        ))}
    </div>
  )
}

export default ProfileCardsPresenter
