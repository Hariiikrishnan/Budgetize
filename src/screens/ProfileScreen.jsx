import React, { useState } from "react";

import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";

import BottomBar from "../components/BottomBar";
import EditProfileScreen from "./EditProfileScreen";
import "../styles/profileScreen.css";

function ProfileScreen() {
  const [isEdit, setEdit] = useState(false);
  const editState = { isEdit, setEdit };
  return (
    <>
      <div class="profile">
        <div className="profile-Header">
          <h3>My Profile</h3>
        </div>
        <div class="profile-img-name">
          <div class="profile-img container">
            <img src="images/minato_profile.jpg" />
          </div>
          <div>
            <h2>Minato Namikaze</h2>
            <p>@yellow_flash</p>
          </div>
          <Link
            onClick={() => {
              setEdit(true);
            }}
          >
            <Fab>
              <BorderColorOutlinedIcon />
            </Fab>
          </Link>
        </div>
        <div class="profile-d-board">
          <ul>
            <h5>Check Points</h5>
            <li>
              <Link to="">
                <div class="icon-container">
                  <SpeedRoundedIcon />
                </div>

                <h4>Spendometer</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <div
                  class="icon-container"
                  style={{ backgroundColor: "#eba61a" }}
                >
                  <CalendarMonthRoundedIcon />
                </div>
                <h4>Monthly Anlaytics</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <div
                  class="icon-container"
                  style={{ backgroundColor: "#e95883" }}
                >
                  <EqualizerRoundedIcon />
                </div>
                <h4>Yearly Anlaytics</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div class="profile-account">
          <h5>Account!</h5>
          <Link>
            <h3>Logout</h3>
          </Link>
        </div>
      </div>
      {isEdit && <EditProfileScreen edit={editState} />}

      <BottomBar />
    </>
  );
}

export default ProfileScreen;
