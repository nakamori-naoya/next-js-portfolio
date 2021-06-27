import { createContext, useState, useEffect } from "react";
import Cookie from "universal-cookie";
import { getUserId } from '../lib/user';


export const StateContext = createContext();
export default function StateContextProvider (props)  {
  const cookie = new Cookie();
  const token = cookie.get("access_token");
  const [myProfile, setMyProfile] = useState({id: "", nickName: "", image: ""}); //自分のProfile
  const [editedMyProfile, setEditedMyProfile] = useState({id: "", nickName: "", image: ""});
  const [cover, setCover] = useState();
  const [LoginUserId, setLoginUserId] = useState(null)
  const [searchedResult, setSearchedResult]= useState([])
  const [loginUserProfile, setLoginUserProfile ] = useState({
    nickName: "", image: "", userId: ""
  })

  useEffect(() => {
    const get = async () => {
      const res = await getUserId()
      setLoginUserId(res?.id)
    }
    get()
}, [token]);


  return (
    <StateContext.Provider
      value={{
        cookie,
        token,
        myProfile,
        editedMyProfile,
        cover,
        LoginUserId,
        searchedResult, 
        loginUserProfile, 
        setSearchedResult,
        setLoginUserId,
        setCover,
        setMyProfile,
        setEditedMyProfile,
        setLoginUserProfile
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

