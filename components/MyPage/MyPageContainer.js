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
      const data = {...myRes.data, ...{image: myRes?.data?.image?.replace("app_server", "naoyanakamori.com")}}
      console.log(data)
      setMyProfile(data)
    }
    get()
  }, [])

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
