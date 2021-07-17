import axios from 'axios';

export const increSearch = async ({keyword,category}) => {
    if(keyword.length > 0){
      return await axios
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/${category}/incremental_search`,{keyword},
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
      }) 
    }else{
      return {data: []}
    }
  };



  export const search = async ({keyword, category}) => {
    if(keyword.length > 0){
      return await axios
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/${category}/search`,{keyword},
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
      }) 
    }else{
      return {data: []}
    }
  };