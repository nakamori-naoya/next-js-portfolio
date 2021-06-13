import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import {IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';




export default function PortfolioCard(props) {
  return (
    <Card className={props.HeadClass}>
      <CardHeader className="bg-gray-800 text-white border-gray-400 border-b-2 border-solid"
        avatar={
          <button >
          {props.avatar ? (
          <Avatar   >
            <img src={props.avatar} alt="P" />
          </Avatar>
          ):(
          <Avatar     >
            <img src="/static/null_avatar.jpeg" alt="P" />
          </Avatar>)}
          </button>
        }
        title={props.title}   
      />
      <div className="relative" >
        <div className="flex justify-center bg-gray-800">
          <IconButton >
            <CardMedia
              className="h-72 w-72 rounded-full my-auto"
              image="/static/fightClub2.jpeg"
            />
          </IconButton>
        </div>
        <div className="absolute top-0 right-0">
          <IconButton >
            <ThumbUpIcon 
              className="text-white"
              fontSize="large" />
          </IconButton>
        </div> 
      </div>  
    </Card>
  );
}