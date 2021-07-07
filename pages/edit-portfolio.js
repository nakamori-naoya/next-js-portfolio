import React from 'react'
import { useEffect, useState } from 'react';
import { getPortfolio } from '../lib/portfolio';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SimpleNavBarContainer from '../components/Navbar/SimpleNavBarContainer';
import StateContextProvider from '../ApiContext/StateContext';
import EditPortfolioContainer from '../components/MyPage/EditPortfolioContainer';


const EditPortfolio = () => {
  const router = useRouter()
  const {portfolioId} = router.query
  const [portfolio, setPortfolio] = useState({
    description: "", title: "",site_url: "", 
    github_url: "", categories: []
  })
  useEffect(() => {
    const get = async() =>{
      const res = await getPortfolio(portfolioId)
      setPortfolio(res.data)
    }
    portfolioId ? get() : null
  }, [portfolioId])
  console.log("portfolio",portfolio)

  return (
    <Layout>
    <SimpleNavBarContainer/>
    <div className="pt-5"/>
    <StateContextProvider>
      <EditPortfolioContainer
      portfolio={portfolio}
      />
    </StateContextProvider>
  </Layout>
  )
}

export default EditPortfolio
