import { getPortfolio, getPortfolios} from "../../lib/portfolio";
import { useRouter } from 'next/router';
import StateContextProvider from "../../ApiContext/StateContext";
import SimpleNavBarContainer from '../../components/Navbar/SimpleNavBarContainer';
import PortfolioDetailContainer from '../../components/PortfolioDetail/PortfolioDetailContainer';
import axios from 'axios';



export default function Portfolio({ portfolioId ,staticPortfolio }) {
    const router = useRouter();
    if (router.isFallback) {
      return <div className="mx-auto text-6xl">Loading...</div>;
    }
    return (
      <StateContextProvider>
        <SimpleNavBarContainer />
        <PortfolioDetailContainer 
        staticPortfolio={staticPortfolio} 
        portfolioId={portfolioId}
        />
      </StateContextProvider>
    );
  }

export async function getStaticProps({ params }) {
    const res = await axios
    .get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios/${params.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    const staticPortfolio = res?.data?.data
    return {
      props: {
        portfolioId: staticPortfolio.id,
        staticPortfolio,
      },
      revalidate: 3,
    };
  }


  export async function getStaticPaths() {
    const portfolios = await axios
    .get(`http://localhost:3000/api/v1/portfolios`,
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    )

    //オブジェクトのvalueを抜き出し配列化する。今回は2次元配列になっている
    const twoDimArray = Object.values(portfolios?.data)  
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
      fallback: false,
    };
  }

  
  const extractIdsIntoTwoDimArrayFrom = (array)=>{
    return array.map(datas=>{
        return datas.map(data=>{
          return data.id
        })
      })
  }
