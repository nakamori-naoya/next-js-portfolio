import React from 'react'
import ButtonMenu from '../../UIkit/ButtonMenu';
import AccountCircle  from '@material-ui/icons/AccountCircle';
import  IconButton  from '@material-ui/core/IconButton';
import  ExitToAppIcon  from '@material-ui/icons/ExitToApp';

const RightZone = () => {
  return (
    <>
      <ButtonMenu
        menuTitle={<AccountCircle fontSize="large" className="text-white" />}
        position="left"
      />
      <IconButton >
        <ExitToAppIcon fontSize="large" className="text-white" />
      </IconButton>
    </>
  )
}

export default RightZone
