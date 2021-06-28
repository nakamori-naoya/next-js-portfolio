import { getPortfolios } from '../lib/portfolio';
import Layout from "../components/Layout";
import PortfolioListContainer from '../components/PortfolioList/PortfolioListContainer';

// export async function getStaticProps() {
//   const staticfilteredPortfolios = await getPortfolios(); 
//   return {
//     props: { staticfilteredPortfolios }, 
//     revalidate: 10, //ISR
//   };
// }


//引数{staticfilteredPortfolios}
export default function PortfolioIndex() {
  return(
    <></>
      // <Layout title="profile-editor">
      //   <PortfolioListContainer 
      //     staticfilteredPortfolios={staticfilteredPortfolios}
      //   />
      // </Layout>
  )
}


