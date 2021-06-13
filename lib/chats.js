import axios from 'axios';

export const getChats = async (portfolio_id) => {
    return await axios
      .get(`http://localhost:3000/api/v1/portfolios/${portfolio_id}/chats`,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
        if(res.status === 200) {
          return  {chats: res.data.data, user: res.data.user}
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


export const createChat = async ({text, user_id, portfolio_id}) =>{
    console.log(text, user_id, portfolio_id)
    return await axios
      .post(
        `http://localhost:3000/api/v1/portfolios/${portfolio_id}/chats`,
          JSON.stringify({text: text, user_id: user_id, portfolio_id: portfolio_id}),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.data.status === 201){
            return res.data
            // 成功時の処理
        }else{
            //失敗時の処理。その前にstatusコードを調べる必要あり
        }
      }).catch ((err) => {
        alert(err);
      });
    }