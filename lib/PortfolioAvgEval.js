import axios from 'axios';
export const getPortfolioAvgEval = async (portfolio_id) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios/${portfolio_id}/avg_evals`,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
        if(res.status === 200) {
          return res.data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };