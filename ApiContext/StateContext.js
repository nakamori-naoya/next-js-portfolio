import { createContext, useState, useEffect } from "react";
import Cookie from "universal-cookie";
import { getMyProfile } from '../lib/user';


export const StateContext = createContext();
export default function StateContextProvider (props)  {
  const cookie = new Cookie();
  const token = cookie.get("access_token");
  const [myProfile, setMyProfile] = useState({id: "", nickName: "", image: ""}); //自分のProfile
  const [editedMyProfile, setEditedMyProfile] = useState({id: "", nickName: "", image: ""});
  const [cover, setCover] = useState();

  useEffect(() => {
    const getUser = async () => {
      const res = await getMyProfile()
      console.log("statecontextのres",res)
      setMyProfile(res)
    }
    getUser()
}, [token]);

  return (
    <StateContext.Provider
      value={{
        cookie,
        token,
        myProfile,
        editedMyProfile,
        cover,
        setCover,
        setMyProfile,
        setEditedMyProfile,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

