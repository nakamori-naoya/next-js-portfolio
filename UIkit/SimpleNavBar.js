import React,{useState, useCallback} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ButtonMenu from "./ButtonMenu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FormDialog from '../Forms/FormDialog';


export default function SimpleNavBar() {
  const [open, setOpen] = useState(false); 
  const handleOpen = useCallback(() => {
    setOpen(true)
  },[setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false)
  },[setOpen]);
  
  return (
    <div className="bg-gray-800">
      <AppBar position="static" className="bg-gray-800">
       <Toolbar className="bg-gray-800">
          <ButtonMenu
            menuTitle="Blog"
            position="right"
            menuItems="配列入れてmapで回す"
          />
          <ButtonMenu className="font-serif" menuTitle="App" position="left" />
          <FormDialog  open={open} handleOpen={handleOpen} handleClose={handleClose}/>
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
