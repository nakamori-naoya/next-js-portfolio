import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';





export default function MyPortfolioCard(props) {
  return (
    <Card className={props.HeadClass}>
      <CardHeader className="bg-gray-800 text-white"
        avatar={
          props.avatar ? (
          <Avatar   >
            <img src={props.avatar} alt="P" />
          </Avatar>
          ):(
          <Avatar     >
            <img src="/static/null_avatar.jpeg" alt="P" />
          </Avatar>)
        }
        title={props.title}   
      />
        <CardMedia
          className="h-0 py-32"
          image={fightclub2}
          title="Paella dish"   //後に投稿する内容で変更する
        />
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className="bg-gray-800 py-2"
        >
            <IconButton aria-label="add to favorites">
              <SearchIcon  className="text-white"
              />
            </IconButton>
            <IconButton aria-label="share">
              <FavoriteIcon className="text-white"
              />
            </IconButton>
            <IconButton aria-label="edit">
              <EditIcon
              className="text-white"
              onClick={() => props.edit()}
              />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon
              className="text-white"
              onClick={() => props.delete()}
              />
            </IconButton>
          </Grid>
    </Card>
  );
}