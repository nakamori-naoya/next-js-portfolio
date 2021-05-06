import axios from 'axios';
import Cookie from "universal-cookie";
import { router } from '../components/Authen';


const cookie = new Cookie();

export const register = async (email, password) =>{
    return await axios
      .post(
        `http://localhost:3000/api/v1/users`,
         JSON.stringify({email: email, password: password,} ),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.status === 200){
            // 成功時の処理
        }else{
            //失敗時の処理。その前にstatusコードを調べる必要あり
        }
      }).catch ((err) => {
        alert(err);
      });
    }


export const login = async (email, password) =>{
    return await axios
      .post(
        `http://localhost:3000/api/v1/user_token`,
         JSON.stringify({ auth: {email: email, password: password,} }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const status = res.status;
        if (status === 201) {
          const options = { path: "/" };
          cookie.set("access_token", res.data.jwt, options)
          return status
        } else if (status === 404 ){
          //status404のエラーハンドリングができていない。おそらくknockの仕様を確認すればできるとは思うが一端まち
        }
      })
      .catch((err) => {
        alert(`${err}. \nSorry. User Not Found. Plese check your Email address`);
      });
}



export const getMyProfile = async () => {
    const token = cookie.get("access_token");
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
          return res.data.data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



 export const editProfile = async ({image, nickName, id, token}) => {
    const createData = new FormData();
    return await axios
      .put(
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





