import { createContext, useState, useEffect } from "react";
import Cookie from "universal-cookie";


export const StateContext = createContext();
export default function StateContextProvider (props)  {
  const cookie = new Cookie();
  const token = cookie.get("access_token");
  const [userId, setUserId] = useState(null); //自分のプロフィールを取得するために必要
  const [myProfile, setMyProfile] = useState({id: "", nickName: "", image: ""}); //自分のProfile
  const [profiles, setProfiles] = useState([]); //他のユーザーのプロフィールをいれる
  const [editedMyProfile, setEditedMyProfile] = useState({id: "", nickName: "", image: ""});
  const [cover, setCover] = useState();

  useEffect(() => {
  }, [token, myProfile]);

  return (
    <StateContext.Provider
      value={{
        cookie,
        token,
        userId,
        myProfile,
        profiles,
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

