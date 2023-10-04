import React from "react";

import Fab from "@mui/material/Fab";

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Slide from '@mui/material/Slide';

function EditProfileScreen(props) {
  console.log(props)
  return (
    <>
    <div id="editProfileWrapper">
    <Slide direction="up" in={props.edit.isEdit} mountOnEnter unmountOnExit>
          
        
          
      <div className="editProfile">
      <div style={{display:"flex",justifyContent:"end"}}>
      <Fab>
      <ClearRoundedIcon style={{fontSize:"1.7rem"}} onClick = {()=>{
        props.edit.setEdit(false)
      }}/></Fab>
      </div>
      <div class="editProfile-content">
        <div class="profile-img container">
          <img src="images/minato_profile.jpg" />
        </div>
        <input value="Minato Namikaze" />
        <input value="yellow_flash" />

        {false && <p>Please Enter a different username !</p>}
        <Fab>
            Save Changes
        </Fab>
        </div>
      </div>
      </Slide>

      </div>
    </>
  );
}

export default EditProfileScreen;
