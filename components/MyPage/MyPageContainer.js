import React from 'react'
import { useEffect, useState,  useContext } from 'react';
import { getMyPortfolios, deletePortfolio as deletes} from '../../lib/portfolio';
import ProfileCard from '../ProfileCards/ProfileCard';
import MyProfileCard from './MyProfileCard';
import PortfolioCards from './PortfolioCards';
import { StateContext } from '../../ApiContext/StateContext';
import { getMyProfile } from '../../lib/profile';
import { imageUrlConverter } from '../../Validator/ImageUrlConverter';


const MyPageContainer = () => {
  const [myPortfolios, setMyPortfolios] = useState([])
  const [myProfile, setMyProfile] = useState({})
  const {LoginUserId} = useContext(StateContext)

  useEffect(() => {
    const get = async()=>{
      const myRes = await getMyProfile()
      const data = {...myRes.data, ...{image: imageUrlConverter(myRes?.data?.image)}}
      setMyProfile(data)
      const res = LoginUserId ? await getMyPortfolios(LoginUserId): null
      setMyPortfolios(res?.data)
    }
    get()
  }, [LoginUserId])



  const deletePorrtfolio = async(portfolioId) =>{
    if(window.confirm("本当に削除しますか？")){
      const res = await deletes(portfolioId)
      const id = res.data
      setMyPortfolios(myPortfolios.filter(myPortfolio=>myPortfolio.id !== id)) 
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
      deletePorrtfolio={deletePorrtfolio}
    />
    </>
  )
}

export default MyPageContainer
