import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { StateContext } from '../ApiContext/StateContext';
import { useContext } from 'react';



const Chat = React.memo((props) => {
    const {myProfile} = useContext(StateContext);
    const isLoginUser = (props.user_id === myProfile.id);  //条件分岐させる。
    const classes = isLoginUser ? "inline-flex ml-auto flex-row-reverse " : "flex flex-row justify-start" ;

    return (
        <>
          <ListItem className={classes}>
                <ListItemAvatar >
                    {isLoginUser ? (
                        <div>
                          <Avatar alt="icon" src="/static/fightClub2.jpeg" className="ml-3"/>
                        </div>
                        ) : (
                        <div>
                          <Avatar alt="icon" src="/static/null_avatar.jpeg" />
                        </div>
                    )}
                </ListItemAvatar>
                <div className="bg-indigo-200 rounded font-serif text-lg max-w-xs break-words">{props.text}</div>
          </ListItem>
          <ListItem className={classes}>
              <h4 >{myProfile.nickName}</h4>
          </ListItem>
        </>
    );
});

export default Chat;