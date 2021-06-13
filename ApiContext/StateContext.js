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
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const get = async () => {
      const res = await getUserId()
      setUserId(res.id)
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
        userId,
        setUserId,
        setCover,
        setMyProfile,
        setEditedMyProfile,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

