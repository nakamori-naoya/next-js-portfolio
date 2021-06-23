import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import { StateContext } from '../../../ApiContext/StateContext';
import { useContext } from 'react';

const Chat = React.memo(({text, ChatUserId, userProfile }) => {
    const {LoginUserId, loginUserProfile} = useContext(StateContext)
    const isLoginUser = (ChatUserId === LoginUserId );  
    return (
        <>
        <ListItem className={isLoginUser ? "flex flex-row-reverse justify-end ": "flex flex-row justify-start"}>
            {isLoginUser ? (
            <Avatar alt="icon" src={userProfile?.image} className="ml-3"/>
            ) : (
            <Avatar alt="/static/fightClub1.jpeg" src={userProfile?.image} />
            )}
            <span className={isLoginUser ? "my-auto font-serif text-lg max-w-xs break-words": "pl-2 my-auto font-serif text-lg max-w-xs break-words"}>
                {text}
            </span>
        </ListItem>
            <ListItem className={isLoginUser ? "flex flex-row-reverse justify-end ": "flex flex-row justify-start"}>
                {isLoginUser? (
                    <h4 >{loginUserProfile? loginUserProfile.nickname : "名無し"}</h4>
                ):(
                    <h4 >{userProfile? userProfile.nickname : "名無し"}</h4>
                )}
                
            </ListItem>
        </>
        );
});

export default Chat;