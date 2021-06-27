import axios from 'axios';
import Cookie from "universal-cookie";

const cookie = new Cookie();
const token = cookie.get("access_token");
export const getMyProfile = async () => {
  return await axios
    .get(
      `http://localhost:3000/api/v1/users`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      const status = res.data.status;
      if (status === 200) {
        return res.data
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProfile = async ({
  images, nickName, LoginUserId, 
  token, selfIntroduction, 
  selectedDate, webSite
  }) => {
  const uploadData = new FormData();
    uploadData.append("nickname", nickName);
    uploadData.append("self_introduction", selfIntroduction );
    uploadData.append("programming_start_date",selectedDate );
    uploadData.append("web_site_url", webSite);
    uploadData.append("image", images[0].file);
  return await axios
    .post(
      `http://localhost:3000/api/v1/users/${LoginUserId}/profile`,
      uploadData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res)
      if (res.data.status === 200 || res.data.status === 201) {
        return res.data
      }
    })
    .catch((err) => {
      console.log(err);
    });
};



export const editProfile = async ({image, nickname, id, 
  token, self_introduction, programming_start_date
  }) => {
  const createData = new FormData();
  return await axios
    .put(
      `http://localhost:3000/api/v1/users/${id}/profile`,
      createData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      const status = res.data.status;
      const data = res.data.data
      if (status === 200) {
        return data
      }
    })
    .catch((err) => {
      console.log(err);
    });
};


export const deleteProfile = async ({id, token}) => {
  const createData = new FormData();
  createData.append("nickName", "");
  createData.append("image", "");
  return await axios
    .delete(
      `http://localhost:3000/api/v1/users/${id}`,
      createData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      const status = res.data.status;
      const data = res.data.data
      if (status === 200) {
        return data
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
