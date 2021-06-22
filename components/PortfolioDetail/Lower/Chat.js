import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import { StateContext } from '../../../ApiContext/StateContext';
import { useContext } from 'react';

const Chat = React.memo(({text, ChatUserId, user }) => {
    const {LoginUserId} = useContext(StateContext)
    const isLoginUser = (ChatUserId === LoginUserId );  
    return (
        <>
        <ListItem className={isLoginUser ? "flex flex-row-reverse justify-end ": "flex flex-row justify-start"}>
            {isLoginUser ? (
            <Avatar alt="icon" src={user.image} className="ml-3"/>
            ) : (
            <Avatar alt="/static/fightClub1.jpeg" src={user.image} />
            )}
            <span className={isLoginUser ? "my-auto font-serif text-lg max-w-xs break-words": "pl-2 my-auto font-serif text-lg max-w-xs break-words"}>
                {text}
            </span>
        </ListItem>
            <ListItem className={isLoginUser ? "flex flex-row-reverse justify-end ": "flex flex-row justify-start"}>
                <h4 >{user.nickname}</h4>
            </ListItem>
        </>
        );
});

export default Chat;