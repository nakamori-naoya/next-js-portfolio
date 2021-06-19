import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import {IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Link from "next/link";



export default function PortfolioCard(props) {
  return (
    <Card className="h-96 w-80 whitespace-nowrap ml-5">
      <CardHeader className="bg-gray-800 text-white border-gray-400 border-b-2 border-solid"
        avatar={
          <button >
            {props.image ? (
            <Avatar   >
              <img src={props.image} alt="P" />
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
            <Link href={`/portfolios/${props.id}`}>
              <CardMedia
                className="h-72 w-72 rounded-full my-auto"
                image="/static/fightClub2.jpeg"
              />
            </Link>
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