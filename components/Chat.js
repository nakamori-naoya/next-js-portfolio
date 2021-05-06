import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { StateContext } from '../ApiContext/StateContext';
import { useContext } from 'react';



const Chat = (props) => {
    const {myProfile} = useContext(StateContext);
    const isLoginUser = (props.userId === myProfile.id);  //条件分岐させる。
    const classes = isLoginUser ? "flex flex-row-reverse justify-end ": "flex flex-row justify-start" ;


    return (
        <>
          <ListItem className={classes}>
                <ListItemAvatar>
                    {isLoginUser ? (
                    <div>
                    <Avatar alt="icon" src="/static/fightClub1.jpeg" className="ml-3"/>
                        
                    </div>
                    ) : (
                        <div>
                        <Avatar alt="icon" src="/static/null_avatar.peg" />
                        
                        </div>
                        
                    )}
                </ListItemAvatar>
                <div className="bg-indigo-200 rounded font-serif text-lg max-w-xs break-words">{props.text}</div>
          </ListItem>
          <ListItem className={classes}>
              <h4 >nickName</h4>
          </ListItem>
        </>
    );
};

export default Chat;