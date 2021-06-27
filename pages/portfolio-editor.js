import React from 'react'
import SimpleNavBarContainer from '../components/Navbar/SimpleNavBarContainer';
import EditPortfolioContainer from '../components/EditPortfolio/EditPortfolioContainer';
import Layout from '../components/Layout';

const PortfolioEditor = () => {
  return (
  <Layout>
    <SimpleNavBarContainer/>
    <div className="pt-5"/>
    <EditPortfolioContainer/>
  </Layout>
  )
}

export default PortfolioEditor
