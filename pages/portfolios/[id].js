import { getPortfolio, getPortfolios} from "../../lib/portfolio";
import { useRouter } from 'next/router';
import StateContextProvider from "../../ApiContext/StateContext";
import SimpleNavBarContainer from '../../components/Navbar/SimpleNavBarContainer';
import PortfolioDetailContainer from '../../components/PortfolioDetail/PortfolioDetailContainer';
import axios from 'axios';
import useSWR from "swr";
import { useEffect } from 'react';


const fetcher = url => axios.get(url).then(res => res.data.data)
export default function Portfolio({ portfolioId ,staticPortfolio }) {
  
    const router = useRouter();
    const { data: portfolio, mutate } = useSWR(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios/${portfolioId}`,
      fetcher,
      {
        initialData: staticPortfolio,
      }
    );
    console.log(portfolio)
    useEffect(() => {
      mutate();
    }, []);
    
    if (router.isFallback || !staticPortfolio) {
      return <div className="mx-auto text-6xl">Loading...</div>;
    }
    return (
      <StateContextProvider>
        <SimpleNavBarContainer />
        <PortfolioDetailContainer 
        staticPortfolio={portfolio} 
        portfolioId={portfolioId}
        />
      </StateContextProvider>
    );
  }

export async function getStaticProps({ params }) {
    const res = await getPortfolio(params.id)
    const staticPortfolio = res.data
    return {
      props: {
        portfolioId: staticPortfolio?.id,
        staticPortfolio,
      },
      revalidate: 1,
    };
  }


  export async function getStaticPaths() {
    const portfolios = await getPortfolios()
    //オブジェクトのvalueを抜き出し配列化する。今回は2次元配列になっている
    const twoDimArray = Object.values(portfolios)  
    const idsTwoDimArray =  extractIdsIntoTwoDimArrayFrom(twoDimArray)
    // 2次元配列を1次元配列に変換する
    const idsArray = idsTwoDimArray.reduce((pre,current) => {
      pre.push(...current);
      return pre
      },[]);

    //配列の重複をはじく
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

  
  const extractIdsIntoTwoDimArrayFrom = (array)=>{
    return array.map(datas=>{
        return datas.map(data=>{
          return data.id
        })
      })
  }
