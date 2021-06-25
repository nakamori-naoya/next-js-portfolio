import React,{useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {IconButton } from '@material-ui/core';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Typography  from '@material-ui/core/Typography';
import  CardContent  from '@material-ui/core/CardContent';


export default function ProfileCard({profile}) {

  return (
    <Card className="m-auto w-72 mr-4">
      <div className="pt-2 relative bg-gray-800 text-white">
        <div className="flex justify-center">
          <IconButton >
        {/* 画像を載せる */}
          {/* {profile.image ? (
            <CardMedia
            className="w-48 h-48 rounded-full mx-auto"
            image={profile.image}
                  />
          ):( */}
              <CardMedia
              className="w-48 h-48 rounded-full mx-auto"
              image="../../static/fightClub2.jpeg"
              />
          {/* )} */}
          </IconButton>
        </div>
        <div className="absolute -bottom-3 right-7">
          <IconButton >
            <PersonAddIcon  
              color="secondary"
              fontSize="large" />
          </IconButton>
        </div> 
      </div>

      <div className="flex h-10 bg-gray-800 text-white">
        <div className="pl-1 my-auto">
          <AccessibilityIcon 
            color="secondary"
            fontSize="large"/>{" "}
        </div>
        <div className="pl-4 my-auto truncate">ニックネーム</div>  
      </div>

      <div className="flex bg-gray-800 text-white">
        <div className="pl-1 my-auto">
          <ImportContactsIcon 
            color="secondary"
            fontSize="large"/>{" "}
          </div>
        <div className="my-auto pl-4 truncate">2020/12~(6ヶ月)</div>
      </div>
      <div className="pt-1 bg-gray-800 "/>
      <Typography 
        className="px-3 font-mono bg-gray-800 text-white line-clamp-4" 
      >
          fkmfkafnkafnanfksd
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
      </Typography>
    </Card>
  );
}