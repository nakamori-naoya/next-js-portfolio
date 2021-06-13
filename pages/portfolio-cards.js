import { getPortfolios } from '../lib/portfolio';
import SimpleNavBar from '../components/NavBar/SimpleNavBar';
import PortfolioList from '../components/PortfolioList/PortfolioList';
import Layout from "../components/Layout";

export async function getStaticProps() {
  const staticfilteredPortfolios = await getPortfolios(); 
  return {
    props: { staticfilteredPortfolios }, 
    revalidate: 10, //ISR
  };
}

export default function PortfolioIndex({staticfilteredPortfolios}) {
  return(
    <>
      <SimpleNavBar />
      <PortfolioList staticfilteredPortfolios={staticfilteredPortfolios}/>
    </>
  )
}


