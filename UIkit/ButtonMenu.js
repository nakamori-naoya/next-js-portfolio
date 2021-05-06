import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function ButtonMenu({ menuTitle, position }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl); 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}   
      >
       <span className="text-white">{menuTitle}</span> 
      </IconButton>

      {/* プロフィールのところクリックすると出てくるメニュー部分 */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: position,
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: position,
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <p className="font-serif">Profile</p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <p className="font-serif">My account</p>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ButtonMenu;
