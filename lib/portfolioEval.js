import axios from 'axios';

// http://naoyanakamori.com/api/v1/portfolios/3/evals

export const createEval = async ({
  sociality, creativity, usability,skill,
  businessOriented, comprehensiveEvaluation,
  portfolioId, LoginUserId
}) => {
    return await axios
      .post(`http://naoyanakamori.com/api/v1/portfolios/${portfolioId}/evals`,
      {sociality, creativity: creativity , usability: usability, 
        business_oriented: businessOriented, skill: skill, 
        comprehensive_evaluation: comprehensiveEvaluation, 
        portfolio_id: portfolioId , user_id: LoginUserId},
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
          console.log("res", res)
        if(res.status === 200) {
          console.log(res.data)
          return res.data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };