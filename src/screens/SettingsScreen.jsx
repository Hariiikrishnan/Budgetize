import React from "react";

import {Link} from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import Header from "../components/Header.jsx"
import "../styles/settingsScreen.css"
function SettingsScreen(){
    return <>
        <Header />
        <div class="settings">
            <h2>Settings</h2>
            <div class="settings-list">
           
            <Link>
                    <h3>Change Monthly Limit</h3>
                    <ChevronRightRoundedIcon />
                </Link>
                <Link>
                    <h3>Change Username</h3>
                    <ChevronRightRoundedIcon />
                </Link>
                <Link>
                    <h3>Change Password</h3>
                    <ChevronRightRoundedIcon />
                </Link>

               
            </div>
        </div>

    </>
}

export default SettingsScreen;