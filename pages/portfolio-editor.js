import React from 'react'
import SimpleNavBarContainer from '../components/Navbar/SimpleNavBarContainer';
import EditPortfolioContainer from '../components/EditPortfolio/EditPortfolioContainer';
import Layout from '../components/Layout';
import StateContextProvider from '../ApiContext/StateContext';

const PortfolioEditor = () => {
  return (
  <Layout>
    <SimpleNavBarContainer/>
    <div className="pt-5"/>
    <StateContextProvider>
      <EditPortfolioContainer/>
    </StateContextProvider>
  </Layout>
  )
}

export default PortfolioEditor
