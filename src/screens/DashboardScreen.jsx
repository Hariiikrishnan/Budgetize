import React,{useState,useContext } from "react";
import {useSwipeable} from "react-swipeable";
import Button from "@mui/material/Button";

import Gauge from "../components/Gauge.jsx";
import ShortCard from "../components/ShortCard.jsx";

// import BottomBar from "./BottomBar";

import {SwipeContext} from "../context/AuthContext.jsx"

function DashboardScreen() {

    const {swiped,setSwipe} = useContext(SwipeContext);

    const handlers = useSwipeable({
        onSwiped: () => { setSwipe(true);
            
        // ...config,handlers
        }
      });


      console.log(swiped);
        
const data = [{
  date:1,
  money:900
},{
  date:2,
  money:840
},{
  date:3,
  money:234
},{
  date:4,
  money:643
},{
  date:5,
  money:364
},{
  date:6,
  money:665
}]

     

  return (
    <div {...handlers} >
     {/* <div> */}
      <div id="d-board-headWrapper" >
        <h1>Budgetize</h1>

        <div class="d-board-head" >
          <Gauge />
        </div>
      </div>
      {data.map((singleData,index)=>{
        return <ShortCard date = {singleData.date}
          money = {singleData.money}
        />
      })}
      
      <div class="bottomButton">
      <Button variant="outlined" size="small" >
          See All Activities
        </Button>
      </div>

      
      {/* { swiped && <BottomBar />}  */}
    </div>
  );
}

export default DashboardScreen;
