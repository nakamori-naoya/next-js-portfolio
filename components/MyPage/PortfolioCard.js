import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import {IconButton, Badge } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function PortfolioCard(props) {
  return (
    <Card className="h-96 w-80 whitespace-nowrap ml-5">
      <CardHeader 
      className="bg-gray-800 text-white h-16 text-center border-gray-400 border-b-2 border-solid"
        title={props.title}   
      />
      <div className="relative" >
        <div className="flex justify-center  bg-gray-800">
          <IconButton >
            {props.images ? (
              <CardMedia
              className="h-72 w-72 rounded-full my-auto"
              image={props?.images}  
            />
            ):(
              <CardMedia
              className="h-72 w-72 rounded-full my-auto"
              image="../../static/null_avatar.jpeg" 
            />
            )}
          </IconButton>
        </div>
        <div className="absolute bottom-0 right-1">
          <IconButton >
            <PostAddIcon
            fontSize="large" 
            className="text-white" 
            onClick={()=>{
              router.push("/portfolio-editor");
            }}
            />
          </IconButton>
        </div> 
        <div className="absolute top-0 right-3">
          <IconButton >
          <Badge badgeContent={1000}  max={999} color="secondary">
            <ThumbUpIcon 
              color="secondary"
              fontSize="large" />
          </Badge>
          </IconButton>
        </div> 
      </div>  
    </Card>
  );
}