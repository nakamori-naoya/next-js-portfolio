import React from 'react';
import List from '@material-ui/core/List';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Chat from './Chat';
import TextInputWithIcon from '../../UIkit/TextInputWithIcon';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { useTask } from '../../hooks/useTask';
import { useEffect, useState } from 'react';
import { createChat, getChats } from '../../DB/chats';
import { useCallback } from 'react';

const useStyles = makeStyles(() =>
    createStyles({
        "chats": {
            height: "400px",
            padding: "0",
            overflow: "auto"
        }
    }),
);

const Chats = () => {
    const classes = useStyles();
    const [chat, setChat] = useState("")
    const [chats, setChats] = useState([])
    const [users, setUsers] = useState([])

    useEffect (() => {
        const get = async () =>{
            const res = await getChats()
            setChats(res.chats)
            setUsers(res.user)
        }
        get()
      }, [])


    const create = async() =>{
        const args = {portfolio_id: 1, text: chat, user_id: 1}
        const res = await createChat(args)
        setChats([...chats, res.data])  
        console.log("createのres",res.data.text)
      }

      const  InputChat  = useCallback((event) => {
        setChat(event.target.value)
        console.log("chat",chat)
      }, [setChat]);

    return (
        <section className="relative h-3/12 w-4/12">
          <div className="bg-fixed border-gray-500 border-solid border-2 " >
            <List className={classes.chats} >
                {chats.map((chat, index) => {
                  return <Chat text={chat.text} key={index}  user_id={chat.user_id} user={users}/>
                })}
            </List>
            <Divider />
            <Divider />
            <div className="ml-28 inline-flex ">
             <TextInputWithIcon 
              rows={1} 
              rowsMax={5}
              multiline={true}
              label={"チャット"}
              onChange={InputChat}
              value={chat}
             />
             <IconButton  >
                <SendIcon 
                onClick={()=>{create(); setChat("")}}
                />
             </IconButton>
            </div>
           </div>
        </section>
    );
};
export default Chats;