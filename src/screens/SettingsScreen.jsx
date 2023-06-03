import React from "react";

import {Link} from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import BottomBar from "../components/BottomBar";
import Header from "../components/Header.jsx"
import "../styles/settingsScreen.css"
function SettingsScreen(){
    return <>
        <Header />
        <div class="settings">
            <h2>Settings</h2>
            <div class="settings-list">
           
            <Link>
                    <h5>Change Monthly Limit</h5>
                    <ChevronRightRoundedIcon />
                </Link>
               
                <Link>
                    <h5>Change Password</h5>
                    <ChevronRightRoundedIcon />
                </Link>

               
            </div>

            <BottomBar />
        </div>

    </>
}

export default SettingsScreen;