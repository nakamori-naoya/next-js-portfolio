import React,{useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton, Badge } from '@material-ui/core';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Typography  from '@material-ui/core/Typography';
import  CardContent  from '@material-ui/core/CardContent';
import  ThumbUpIcon  from '@material-ui/icons/ThumbUp';
import  EditIcon  from '@material-ui/icons/Edit';
import { useRouter } from 'next/router';
import  LanguageIcon  from '@material-ui/icons/Language';

export default function MyProfileCard({profile}) {
  const router = useRouter()
  return (
    <Card className="m-auto w-80 mr-4">
      <div className="pt-2 relative bg-gray-800 text-white">
        <div className="flex justify-center">
        {/* 画像を載せる */}
          {profile?.image ? (
            <CardMedia
            className="w-48 h-48 rounded-full mx-auto"
            image={profile?.image}
                  />
          ):(
              <CardMedia
              className="w-48 h-48 rounded-full mx-auto"
              image="../../static/null_avatar.jpeg"
              />
          )}
        </div>
        <div className="absolute -bottom-3 right-7">
          <IconButton >
          <Badge badgeContent={1000}  max={999} className="text-white">
            <ThumbUpIcon fontSize="large" className="text-white"/>  
          </Badge>
          </IconButton>
        </div> 
        <div className="absolute top-1 right-4">
        <IconButton aria-label="edit">
          <EditIcon
            fontSize="large" 
            className="text-white"
            onClick={() => {router.push({
              pathname:"/edit-profile",   
              query: { 
                nickName: profile?.nickname, 
                selectedDate: profile?.programming_start_date,
                selfIntroduction:  profile?.self_introduction,
                images: profile?.image,
                webSite: profile?.web_site_url
              }
            })
          }}
          />
        </IconButton>
      </div>
      </div>

      <div className="flex h-10 bg-gray-800 text-white">
        <div className="pl-1 my-auto">
          <AccessibilityIcon 
            fontSize="large"
            className="text-white"
            />{" "}
        </div>
        <div className="pl-4 my-auto truncate">{profile?.nickname}</div>  
      </div>

      <div className="flex bg-gray-800 text-white">
        <div className="pl-1 my-auto">
          <ImportContactsIcon 
            fontSize="large"
            className="text-white"
            />{" "}
          </div>
        <div className="my-auto pl-4 truncate">{profile?.programming_start_date}</div>
      </div>
      <div className="flex bg-gray-800 text-white">
        <div className="pl-1 my-auto">
          <LanguageIcon  
            fontSize="large"
            className="text-white"/>
          </div>
        <div className="my-auto pl-4 truncate">
        <span 
          className="text-white text-sm cursor-pointer "
          onClick={() => window.open(profile?.web_site_url)} 
        >
          {profile?.web_site_url}
        </span>  
        </div>
      </div>

      <div className="pt-1 bg-gray-800"/>
      <div className="h-20  bg-gray-800 break-words text-white overflow-y-scroll">
        {profile?.self_introduction}
      </div>
    </Card>
  );
}