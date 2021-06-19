import  axios from 'axios';

export const getPortfolios = async () => {
    return await axios
      .get(`http://localhost:3000/api/v1/portfolios`,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
        console.log(res.data)
        if(res.status === 200) {
          console.log(res.data)
          return res.data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const getPortfolio = async (id) => {
    console.log(id)
    return await axios
      .get(`http://localhost:3000/api/v1/portfolios/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
        console.log(res.data)
        if(res.status === 200) {
          console.log(res.data)
          return res.data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };