import React from 'react'
import Chats from './Chats';

const LowerPresenter = React.memo(({
  chats, setChats, portfolioUserId, portfolioId
}) => {
  return (
    <div className="flex justify-center mt-6">
      <Chats  
      {...{chats, setChats, portfolioId}}
      />
    </div>
  )
})

export default LowerPresenter
