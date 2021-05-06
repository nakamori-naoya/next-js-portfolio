import axios from 'axios';

// http://localhost:3000/api/v1/portfolios/3/evals

export const createEval = async ({sociality, creativity, usability,
                                business_oriented, skill, 
                                comprehensive_evaluation, portfolio_id, user_id}) => {
    return await axios
      .post(`http://localhost:3000/api/v1/portfolios/${portfolio_id}/evals`,
      {sociality: sociality, creativity: creativity , usability: usability, 
       business_oriented: business_oriented, skill: skill, comprehensive_evaluation: comprehensive_evaluation, 
       portfolio_id: portfolio_id , user_id: user_id},
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
          console.log("res", res)
        if(res.status === 200) {
          console.log(res.data.data)
          return res.data.data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };