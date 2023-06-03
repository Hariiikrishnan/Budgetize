import React, { useState, useContext } from "react";
import { useSwipeable } from "react-swipeable";
import Button from "@mui/material/Button";

import Gauge from "../components/Gauge.jsx";
import ShortCard from "../components/ShortCard.jsx";
import {Link} from "react-router-dom";
import BottomBar from "../components/BottomBar";

import { SwipeContext } from "../context/AuthContext.jsx";

function DashboardScreen() {

  // var progress = "36deg";

  var maxLimit = 3000;
  var currentAmount = 2970;
  var spendPercent = (currentAmount / maxLimit) * 100;
  var progress = (spendPercent*3.6)+"deg";
  console.log(progress)
  const data = [
    {
      date: 1,
      money: 900,
    },
    {
      date: 2,
      money: 840,
    },
    {
      date: 3,
      money: 234,
    },
    {
      date: 4,
      money: 643,
    },
    {
      date: 5,
      money: 364,
    },
    {
      date: 6,
      money: 665,
    },
  ];

  return (
    <div>

    

    <div id="d-board-headWrapper">
      <h1>Budgetize</h1>
      {/* <span class="gauge-dot top"></span> */}

      <div class="d-board-head">
        {/* <Gauge /> */}
        <div style={{display:"flex", justifyContent:"space-around" , alignItems:"center", margin:"30px"}}>
          
        
        <div class="d-board welcome">
          <h4>Welcome Back,</h4>
          <h2>Owner</h2>
        </div>
        <div >
          <div data-progress={spendPercent} class="d-board expenseBar" style={{ background :`conic-gradient(#5cf520 ${progress}, transparent 0deg)` }} >
          </div>
        </div>
        </div>
        <h3 style={{color:"white", textAlign:"Center"}}>Monthly Limit : {maxLimit}</h3>
      </div>      
    </div>
      {data.map((singleData, index) => {
        return <ShortCard date={singleData.date} money={singleData.money} />;
      })}

      <div class="bottomButton">
      <Link to="/create">
        <Button variant="outlined" size="small">
          See All Activities
        </Button>
        </Link>
      </div>


      <BottomBar />
      </div>
  );
}

export default DashboardScreen;
