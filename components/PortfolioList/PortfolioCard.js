import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import fightclub2 from "../../img/fightClub2.jpeg";
import nullAvatar from "../../img/null_avatar.jpeg";
import SearchIcon from '@material-ui/icons/Search';
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
            <img src={nullAvatar} alt="P" />
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
              image={fightclub2}
            />
          </IconButton>
        </div>
        <div className="absolute top-0 right-0">
          <IconButton >
            <ThumbUpIcon 
              color="secondary"
              fontSize="large" />
          </IconButton>
        </div> 
      </div>  
    </Card>
  );
}