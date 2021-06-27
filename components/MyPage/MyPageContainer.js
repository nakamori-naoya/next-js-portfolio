import React from 'react'
import { useEffect, useState,  useContext } from 'react';
import { getMyPortfolios } from '../../lib/portfolio';
import ProfileCard from '../ProfileCards/ProfileCard';
import MyProfileCard from './MyProfileCard';
import PortfolioCards from './PortfolioCards';
import { StateContext } from '../../ApiContext/StateContext';
import { getMyProfile } from '../../lib/profile';

const MyPageContainer = () => {
  const [myPortfolios, setMyPortfolios] = useState([])
  const [myProfile, setMyProfile] = useState({})

  const {LoginUserId} = useContext(StateContext)
  useEffect(() => {
    const get = async()=>{
      const res = await getMyPortfolios(LoginUserId)
      setMyPortfolios(res?.data)
      const myRes = await getMyProfile()
      console.log(myRes)
      setMyProfile(myRes?.data)
    }
    get()
  }, [])

  console.log(LoginUserId , myProfile)

  return (
    <>
    <div className="flex justify-center">
      <div>
      <MyProfileCard
        profile={myProfile}
      />
      </div>
    </div>
    <PortfolioCards 
      portfolios={myPortfolios ? myPortfolios : []}
    />
    </>
  )
}

export default MyPageContainer
