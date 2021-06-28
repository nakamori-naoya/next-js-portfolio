import { getPortfolios } from '../lib/portfolio';
import Layout from "../components/Layout";
import PortfolioListContainer from '../components/PortfolioList/PortfolioListContainer';
import  axios from 'axios';

export async function getStaticProps() {
  const res = await axios
  .get(`http://localhost:3000/api/v1/portfolios`,
    {
      headers: {
        "Content-Type": "application/json",
      }
    }
  )
const  staticfilteredPortfolios = res.data
  return {
    props: { staticfilteredPortfolios }, 
    revalidate: 10, //ISR
  };
}



export default function PortfolioIndex({staticfilteredPortfolios}) {
  return(
      <Layout title="profile-editor">
        <PortfolioListContainer 
          staticfilteredPortfolios={staticfilteredPortfolios}
        />
      </Layout>
  )
}


