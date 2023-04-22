import React,{useState} from "react";
import {useSwipeable} from "react-swipeable";
import Button from "@mui/material/Button";

import Gauge from "./Gauge.jsx";
import ShortCard from "./ShortCard";
import BottomBar from "./BottomBar";

function Dashboard() {

    const [swiped,setSwipe]=useState(false);

    const handlers = useSwipeable({
        onSwiped: () => { setSwipe(true);
            
        // ...config,handlers
        }
      });


      console.log(swiped);
      // setTimeout(()=>{
      //   setSwipe(false);
      // },7000)
     

  return (
    <div {...handlers} >
      <div id="d-board-headWrapper" >
        <h1>Budgetize</h1>

        <div class="d-board-head" >
          <Gauge />
        </div>
      </div>
      <ShortCard/>
      <div class="bottomButton">
      <Button variant="outlined" size="small" >
          See All Activities
        </Button>
      </div>

      
      { swiped && <BottomBar />} 
    </div>
  );
}

export default Dashboard;
