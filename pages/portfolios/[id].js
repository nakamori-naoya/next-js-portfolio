import { getPortfolio, getPortfolios} from "../../lib/portfolio";
import { useRouter } from 'next/router';
import StateContextProvider from "../../ApiContext/StateContext";
import SimpleNavBar from "../../components/NavBar/SimpleNavBar";
import PortfolioDetail from '../../components/PortfolioDetail/PortfolioDetail';




export default function Portfolio({ id ,staticPortfolio }) {
  console.log("id",id, staticPortfolio)
    const router = useRouter();
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
    return (
      <StateContextProvider>
          <SimpleNavBar />
          <PortfolioDetail staticPortfolio={staticPortfolio} id={id}/>
      </StateContextProvider>
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
