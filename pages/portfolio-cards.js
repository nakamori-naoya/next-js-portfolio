import Cookie from "universal-cookie";
import { getPortfolios } from '../lib/portfolio';
import PortfolioCards from "../components/PortfolioCards";
import SimpleNavBar from '../UIkit/SimpleNavBar';

const cookie = new Cookie();

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
      <SimpleNavBar/>
      <PortfolioCards staticfilteredPortfolios={staticfilteredPortfolios}/>
    </>
  )
}


