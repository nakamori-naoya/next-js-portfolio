import axios from 'axios';

export const search = async ({keyword,category}) => {
  console.log(10, category)
    if(keyword.length > 0){
      return await axios
      .post(`http://localhost:3000/api/v1/${category}/search`,{keyword},
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {

        if(res.status === 200) {
          console.log(res.data)
          return res.data
        }
      })
      .catch((err) => {
        console.log(err);
      }) 
    }else{
      return {data: []}
    }
  };