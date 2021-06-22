import React from 'react';
import List from '@material-ui/core/List';
import Chat from './Chat';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { useEffect, useState } from 'react';
// import { createChat, getChats } from '../../DB/chats';
import { useCallback } from 'react';
import  CardContent  from '@material-ui/core/CardContent';
import { Card } from '@material-ui/core';
import TextInputWithIcon from '../../../UIkit/TextInputWithIcon';
import InputZone from './InputZone';
import ChatsZone from './ChatsZone';


const Chats = React.memo(({chats, setChats, portfolioId}) => {
    return (
    <Card className="h-3/12 w-4/12" >
        <CardContent  >
            <ChatsZone {...{chats}} />
            <div className="ml-40 inline-flex">
                <InputZone {...{setChats, portfolioId, chats}} />
            </div>
        </CardContent  >
    </Card >
    );
});
export default Chats;