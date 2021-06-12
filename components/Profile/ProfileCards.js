import React from 'react'
import ProfileCard from './ProfileCard';


const ProfileCards = () => {
  const profiles = ["aa", "aa","","","aa", "aa","","","aa", "aa","",""]
  return (
    <div className="w-screen flex overflow-x-scroll">
      {profiles.length > 0 &&
        profiles.map((profile) => (
            <div className="ml-5">
              <ProfileCard />
            </div> 
        ))}
    </div>
  )
}

export default ProfileCards
