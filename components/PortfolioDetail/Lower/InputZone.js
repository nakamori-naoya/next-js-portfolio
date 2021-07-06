import React from 'react'
import  IconButton  from '@material-ui/core/IconButton';
import  SendIcon  from '@material-ui/icons/Send';
import TextInputWithIcon from '../../../UIkit/TextInputWithIcon';
import { useCallback, useContext } from 'react';
import { useState } from 'react';
import { createChat } from '../../../lib/chats';
import { StateContext } from '../../../ApiContext/StateContext';
const InputZone = React.memo(({setChats, portfolioId, chats}) => {
  const [chat, setChat] = useState("")
  const {LoginUserId} = useContext(StateContext)

  const  InputChat  = useCallback((event) => {
    setChat(event.target.value)
}, [setChat]);

  const create = async() =>{
    const args = {portfolio_id: portfolioId, text: chat, user_id: LoginUserId}
    const res = await createChat(args)
    setChats([...chats, res.data])  
}
  return (
    <>
      <TextInputWithIcon 
          rows={1} 
          rowsMax={5}
          multiline={true}
          label={"チャット"}
          onChange={InputChat}
          value={chat}
      />
      <IconButton  >
        <SendIcon onClick={()=>{create(); setChat("")}}/>
      </IconButton>
    </>
  )
})

export default InputZone
