import React from 'react'
import ButtonMenu from '../../UIkit/ButtonMenu';
import AccountCircle  from '@material-ui/icons/AccountCircle';
import  IconButton  from '@material-ui/core/IconButton';
import  ExitToAppIcon  from '@material-ui/icons/ExitToApp';
import { useRouter } from 'next/router';
import Cookie from "universal-cookie";
import PostAddIcon from '@material-ui/icons/PostAdd';

const RightZone = () => {
  const cookie = new Cookie();
  const router = useRouter();

  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };

  return (
    <>
    <IconButton >
      <PostAddIcon
      fontSize="large" 
      className="text-white" 
      onClick={()=>{
        router.push("/portfolio-editor");
      }}
      />
    </IconButton>
      <IconButton >
        <AccountCircle 
          fontSize="large" 
          className="text-white" 
          onClick={()=>{
            router.push("/my-page");
          }}
        />
      </IconButton>
      <IconButton >
        <ExitToAppIcon 
          fontSize="large" 
          className="text-white" 
          onClick={()=>{logout()}}
        />
      </IconButton>
    </>
  )
}

export default RightZone
