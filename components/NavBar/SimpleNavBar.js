import React,{useState, useCallback} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FormDialog from '../../Forms/FormDialog';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ButtonMenu from '../../UIkit/ButtonMenu';
import SearchBar from '../../UIkit/SearchBar';
import CustomizedSelects from '../../UIkit/CustomizedSelects';


export default function SimpleNavBar() {
  const [open, setOpen] = useState(false); 
  const handleOpen = useCallback(() => {
    setOpen(true)
  },[setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false)
  },[setOpen]);
  return (
    <div>
      <AppBar position="static" >
        <Toolbar className="bg-gray-800">
        <IconButton >
          <SearchIcon fontSize="large" className="text-white"/>
        </IconButton>
        <IconButton >
          <HomeIcon fontSize="large" className="text-white"/>
        </IconButton>
          <FormDialog  open={open} handleOpen={handleOpen} handleClose={handleClose}/>
          
          <div className="ml-28"/>
          <CustomizedSelects />
          <SearchBar />
          
          <div className="ml-auto">
            <ButtonMenu
              menuTitle={<AccountCircle fontSize="large" className="text-white" />}
              position="left"
            />
          </div>
          <IconButton >
            <ExitToAppIcon fontSize="large" className="text-white" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
