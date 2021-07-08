import React,{useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {IconButton } from '@material-ui/core';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Typography  from '@material-ui/core/Typography';
import  CardContent  from '@material-ui/core/CardContent';
import { useRouter } from 'next/router';
export default function ProfileCard({profile}) {
  const router = useRouter()
  return (
    <Card className="m-auto w-72 mr-4">
      <div className="pt-2 relative bg-gray-800 text-white">
        <div className="flex justify-center">
          <IconButton >
        {/* 画像を載せる */}
          {profile.image ? (
            <CardMedia
            className="w-48 h-48 rounded-full mx-auto"
            image={profile.image}
            onClick={() => {router.push({
              pathname:"/profile-page",   
              query: { 
                userId :  profile.user_id
              }
            })
          }}
                  />
          ):(
              <CardMedia
              className="w-48 h-48 rounded-full mx-auto"
              image="../../static/null_avatar.jpeg"
              />
          )}
          </IconButton>
        </div>
        {/* <div className="absolute -bottom-3 right-7">
          <IconButton >
            <PersonAddIcon  
              className="text-white"
              fontSize="large" />
          </IconButton>
        </div>  */}
      </div>

      <div className="flex h-10 bg-gray-800 text-white">
        <div className="pl-1 my-auto">
          <AccessibilityIcon 
            className="text-white"
            fontSize="large"/>{" "}
        </div>
        <div className="pl-4 my-auto truncate">{profile.nickname}</div>  
      </div>

      <div className="flex bg-gray-800 text-white">
        <div className="pl-1 my-auto">
          <ImportContactsIcon 
            className="text-white"
            fontSize="large"/>{" "}
          </div>
        <div className="my-auto pl-4 truncate">{profile.programming_start_date} </div>
      </div>
      <div className="pt-1 bg-gray-800 "/>
      <Typography 
        className="px-3 font-mono bg-gray-800 text-white line-clamp-4" >
      {profile.self_introduction}
      </Typography>
    </Card>
  );
}