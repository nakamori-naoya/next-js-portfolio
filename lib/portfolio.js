import  axios from 'axios';
import Cookie from "universal-cookie";

const cookie = new Cookie();
const token = cookie.get("access_token");


const addProflieIntoFormData = ({
  imagesFile, appUrl, description, githubUrl,
  chipDatas, appName, userId
  })=>{
  const uploadData = new FormData();
  const array = [
  {"title": appName}, {"description": description},
  {"site_url": appUrl}, {"github_url": githubUrl},
  {"name": chipDatas},
  {"user_id": userId}
  ] 
  array.map(data=> uploadData.append(Object.keys(data), Object.values(data)))
  // uploadData.append("images[name1]", imagesFile[0])
  uploadData.append("images", imagesFile[0])
  return uploadData
}
const extractKeysArray = (array,key) => {
  return array.map((image)=> image[key])
}

export const createPortfolio = async ({
  images, appUrl, description, githubUrl, chipData, appName, userId = 1
  }) => {
  const imagesFile = await extractKeysArray(images, "file")
  const chipDatas = await extractKeysArray(chipData, "name")
  return await axios
    .post(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios`,
      addProflieIntoFormData({ imagesFile, appUrl, description, githubUrl, chipDatas, appName, userId}),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      if (res.data.status === 201) {
        return res.data
      }else if(res.data.status === 404){
        return res.data
      }else{
        return {data: "portfolio.jsのcreateメソッドの返り値で想定外のエラーが起きています。"}
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getPortfolios = async () => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios`,
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


  export const getPortfolio = async (id) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios/${id}`,
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

  export const getMyPortfolios = async (user_id) => {
    return await axios
    .post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios/my_portfolios`,
    {user_id: user_id},
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

  export const deletePortfolio = async (id) => {
    return await axios
    .delete(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios/${id}`,
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


  export const updatePortfolio = async ({
    id, images, appUrl, description, githubUrl, chipData, appName, userId = 1
    }) => {
    const imagesFile = await extractKeysArray(images, "file")
    const chipDatas = await extractKeysArray(chipData, "name")
    console.log(id, images, appUrl, description, githubUrl, chipDatas, appName, userId)
    return await axios
      .put(
        `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/portfolios/${id}`,
        addProflieIntoFormData({imagesFile, appUrl, description, githubUrl, chipDatas, appName, userId}),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === 201) {
          return res.data
        }else if(res.data.status === 404){
          return res.data
        }else{
          return {data: "portfolio.jsのupdateメソッドの返り値で想定外のエラーが起きています。"}
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };