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

  console.log(LoginUserId)
  useEffect(() => {
    const get = async()=>{
      const res = await getMyPortfolios(LoginUserId)
      setMyPortfolios(res?.data)
      const myRes = await getMyProfile()
      const data = {...myRes.data, ...{image: imageUrlConverter(myRes?.data?.image)}}
      setMyProfile(data)
    }
    get()
  }, [])
  //ローカル環境と本番環境で画像のURLを変更する。imageを使う場合は必須でConverterが必要
  const imageUrlConverter = (imageUrl) => {
    if (imageUrl.includes("app_server")){
      return imageUrl.replace("app_server", "naoyanakamori.com")
    }else{
      return imageUrl
    }
  }

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
