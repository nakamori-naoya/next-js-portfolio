import axios from 'axios';
import Cookie from "universal-cookie";


const cookie = new Cookie();
export const register = async (email, password) =>{
    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/users`,
        JSON.stringify({email: email, password: password,} ),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.data.status === 201){
          return res
        }else{
          alert(res.data.data);
        }
      }).catch ((err) => {
        console.log(err);
      });
    }


export const login = async (email, password) =>{
    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/user_token`,
          JSON.stringify({ auth: {email: email, password: password,} }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res)
        const status = res.status;
        if (status === 201) {
          const options = { path: "/" };
          cookie.set("access_token", res.data.jwt, options)
          return status
        }
      })
      .catch((err) => {
        console.log(`${err}. \nSorry. User Not Found. Plese check your Email address`);
      });
}

export const getUserId = async () => {
  const token = cookie.get("access_token");
  return await axios
    .get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/v1/users`,
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








