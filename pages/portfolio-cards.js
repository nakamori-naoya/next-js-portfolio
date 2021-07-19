import { getPortfolios } from '../lib/portfolio';
import Layout from "../components/Layout";
import PortfolioListContainer from '../components/PortfolioList/PortfolioListContainer';
import  axios from 'axios';

export async function getStaticProps() {
  const staticfilteredPortfolios = await getPortfolios()
  return {
    props: {  staticfilteredPortfolios  }, 
    revalidate: 1, //ISR
  };
}


//{staticfilteredPortfolios}
export default function PortfolioIndex({staticfilteredPortfolios}) {
  console.log(staticfilteredPortfolios,1)
  return(
      <Layout title="profile-editor">
        <PortfolioListContainer 
          staticfilteredPortfolios={staticfilteredPortfolios}
        />
      </Layout>
  )
}


