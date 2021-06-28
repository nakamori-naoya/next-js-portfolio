import { getPortfolios } from '../lib/portfolio';
import Layout from "../components/Layout";
import PortfolioListContainer from '../components/PortfolioList/PortfolioListContainer';
import  axios from 'axios';

export async function getStaticProps() {
  const res = await fetch(
    new URL(`http://localhost:3000/api/v1/portfolios`))
  const staticfilteredPortfolios = await res.json() 

  return {
    props: {  staticfilteredPortfolios  }, 
    revalidate: 10, //ISR
  };
}


//{staticfilteredPortfolios}
export default function PortfolioIndex({staticfilteredPortfolios}) {
  return(
      <Layout title="profile-editor">
        <PortfolioListContainer 
          staticfilteredPortfolios={staticfilteredPortfolios}
        />
      </Layout>
  )
}


