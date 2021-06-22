import React from 'react'
import  List  from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import { useState } from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Chat from './Chat';
const useStyles = makeStyles(() =>
    createStyles({
        "chats": {
            height: "400px",
            padding: "0",
            overflow: "auto"
        }
    }),
);

const ChatsZone = ({chats}) => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.chats} >
          {chats.map((chat, index) => {
              return <Chat 
                text={chat.text} key={index}  
                ChatUserId={chat.profile.user_id} 
                user={chat.profile}
              />
          })}
      </List>
      <Divider />
      <Divider /> 
    </>
  )
}

export default ChatsZone
