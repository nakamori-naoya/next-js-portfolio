import React from 'react'
import  IconButton  from '@material-ui/core/IconButton';
import  SearchIcon  from '@material-ui/icons/Search';
import  HomeIcon  from '@material-ui/icons/Home';
import FormDialog from '../../Forms/FormDialog';
import { useState,useCallback } from 'react';
import { useRouter } from 'next/router';

const LeftZone = () => {
  const [open, setOpen] = useState(false); 
  const router = useRouter();

  const handleOpen = useCallback(() => {
    setOpen(true)
  },[setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false)
  },[setOpen]);

  const returnHome = () => {
    router.push("/portfolio-cards");
  }

  return (
    <>
        <IconButton >
          <HomeIcon 
            fontSize="large" 
            className="text-white"
            onClick={()=>{returnHome()}}
          />
        </IconButton>
          <FormDialog  
          open={open} 
          handleOpen={handleOpen} 
          handleClose={handleClose}/>
    </>
  )
}

export default LeftZone
