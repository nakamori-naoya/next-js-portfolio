import React from 'react'
import { useEffect, useState,  useContext } from 'react';
import { getUserProfile } from '../../lib/profile';
import ProfileCard from '../Profile/ProfileCard';
import { getUserPortfolios } from '../../lib/portfolio';
import PortfolioCards from '../PortfolioList/PortfolioCards';


const ProfilePageContainer = ({userId}) => {
  const [userPortfolios, setUserPortfolios] = useState([])
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    const get = async()=>{
      const res = userId ? await getUserProfile(userId) : null
      const data = {...res?.data, ...{image:  res?.data?.image ? imageUrlConverter(res?.data?.image) : null}}
      setUserProfile(data)
      const pres = userId ? await getUserPortfolios(userId): null
      setUserPortfolios(pres?.data)
      console.log(pres)
    }
    get()
  }, [userId])

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
      <ProfileCard
        profile={userProfile}
      />
      </div>
    </div>
    <PortfolioCards
      portfolios={userPortfolios ? userPortfolios : []}
    />
    </>
  )
}

export default ProfilePageContainer
