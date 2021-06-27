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
      `http://localhost:3000/api/v1/portfolios`,
      addProflieIntoFormData({ imagesFile, appUrl, description, githubUrl, chipDatas, appName, userId}),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      if (res.data.status === 200) {
        return res.data.data
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
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
        if(res.status === 200) {
          return res.data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const getPortfolio = async (id) => {
    console.log("getPortfolioのid",id)
    return await axios
      .get(`http://localhost:3000/api/v1/portfolios/${id}`,
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
    .post(`http://localhost:3000/api/v1/portfolios/my_portfolios`,
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