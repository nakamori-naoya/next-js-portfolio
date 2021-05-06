import { getPortfolio, getPortfolios} from "../../lib/portfolio";
import PortfolioDetail from '../../components/PortfolioDetail';
import { useRouter } from 'next/router';
import SimpleNavBar from '../../UIkit/SimpleNavBar';




export default function Portfolio({ id ,staticPortfolio }) {
    const router = useRouter();
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
    return (
        <>
          <SimpleNavBar/>
          <PortfolioDetail staticPortfolio={staticPortfolio} id={id}/>
        </>
    );
  }


export async function getStaticProps({ params }) {
    const res = await getPortfolio(params.id);
    const staticPortfolio = res.data
    return {
      props: {
        id: staticPortfolio.id,
        staticPortfolio,
      },
      revalidate: 3,
    };
  }


  export async function getStaticPaths() {
    const portfolios = await getPortfolios();
    const array = Object.values(portfolios)
    array.shift()
    const twoDimArrays = twoDimArray(array)
    const idsArray = twoDimArrays.reduce((pre,current) => {pre.push(...current);return pre},[]);
    const ids = idsArray.filter((x, i, self) => self.indexOf(x) === i);
    const paths = ids.map((id) => {
        return {
          params: {
            id: String(id),
          },
        };
      })
    return {
      paths,
      fallback: true,
    };
  }
 

  const twoDimArray = (array)=>{
   return array.map(datas=>{
        return datas.map(data=>{
           return data.id
         })
       })
  }
