import React,{useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import fightclub2 from "../../img/fightClub2.jpeg";
import nullAvatar from "../../img/null_avatar.jpeg";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { MdAddAPhoto } from 'react-icons/md';
import { ApiContext } from '../../ApiContext/ApiContext';
import { useState } from 'react';
import { BiListPlus } from "react-icons/bi";
import { useProfile } from '../../hooks/useProfile';
import { createProfile, editProfile, deleteProfile } from '../../DB/user';
import EditMyprofile from '../EditMyprofile';
import { useEffect } from 'react';





export default function MyProfileCard(props) {
  //ヘッダー部分  Media部分(画像部分)  Content部分
  const {token, myProfile, setMyProfile ,editedMyProfile, setEditedMyProfile } = useContext(ApiContext);
  const [hidden, setHidden] = useState(true) 
  const [image, setImage] = useState(null)

  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleInputChange = () => (event) => {
    
    const value = event.target.value;
    const name = event.target.name;
    setEditedMyProfile({ ...editedMyProfile, [name]: value });
    // console.log(editedMyProfile)
  };

  const edit = async() =>{
    const args = {token: token, image: image , id: myProfile.id, nickName: editedMyProfile.nickName}
    const res = await editProfile(args)
    setMyProfile(res)
    console.log("editとmyPro",editedMyProfile, myProfile)
  }

  const deletes = async() =>{
    const args = {token: token, id: myProfile.id}
    console.log(args)
    await deleteProfile(args)
    setMyProfile({id: "", nickName: "", image: ""})
    console.log("deleteとmyPro",editedMyProfile, myProfile)
  }

  return (
    <Card className="m-auto pt-5 w-72  ">
      {myProfile.image ? (
        <CardMedia
        className="w-48 h-48 rounded-full mx-auto"
        image={myProfile.image}
              />
      ):(
        <CardMedia
        className="w-48 h-48 rounded-full mx-auto"
        image={fightclub2}
        />
      )}
      
      <div className="text-center">
        <AccessibilityIcon />{" "}
        {editedMyProfile.nickName}
        <br/>
        <div >
        <PinDropIcon/> 
        {" "}
        <span className="font-sans">JAPAN</span>
        </div>
      </div>
      
      <CardActions disableSpacing>
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <input 
              type="file"
              id="imageInput"
              hidden="hidden"
              onChange={(event) => {
                setImage(event.target.files[0])
                event.target.value = "";
              }}
              />
          {hidden ?(<div/>):(
              <Grid container  direction="row" justify="space-evenly">
                <input className="border-solid w-40"
                type="text"
                value={editedMyProfile.nickName}
                name="nickName"
                onChange={handleInputChange()}
                />
              <IconButton onClick={handleEditPicture}>
                  <MdAddAPhoto className="h-6 w-6"
                  />
                </IconButton>
                
                  {image  && editedMyProfile ? 
                   <IconButton aria-label="edit">
                    <BiListPlus 
                    onClick={() => {edit(); setHidden(!hidden)}}
                    className="h-6 w-6" /> 
                   </IconButton>
                  :
                  <IconButton disabled>
                    <BiListPlus 
                    className="h-6 w-6" />
                  </IconButton>
                  }
               
              </Grid>
          )}
           <IconButton aria-label="add to favorites">
              <FavoriteIcon  
              />
            </IconButton>
            <IconButton aria-label="edit">
              <EditIcon
              onClick={() => setHidden(!hidden)}
              />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon
              onClick={() => deletes()}
              />
            </IconButton>
         </Grid>
      </CardActions>
    </Card>
  );
}