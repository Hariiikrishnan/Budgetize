import React,{useState,useContext } from "react";
import {useSwipeable} from "react-swipeable";

import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import {SwipeContext} from "../context/AuthContext.jsx"

import ShortCard from "../components/ShortCard.jsx";
import Header from "../components/Header.jsx";
import "../styles/createArea.css";

function CreateScreen() {

  const {swiped,setSwipe} = useContext(SwipeContext);

  const handlers = useSwipeable({
      onSwiped: () => { setSwipe(true);
          
      // ...config,handlers
      }
    });
  
    console.log(swiped);
   
const data = [{
  date:"1-05-2023",
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
},{
  date:7,
  money:988
},{
  date:8,
  money:477
},{
  date:9,
  money:897
},{
  date:10,
  money:320
}]

 

  var date = new Date()

  var currentDate = date.getDate()
  var currentMonth = date.getUTCMonth()
  var currentYear = date.getFullYear()
  var array = []
  for(var i=1;i<=date.getDate();i++){
      // console.log(i+"-"+(currentMonth+1)+"-"+currentYear)
       array.push(i)
  }
  // console.log(array)
  
  


  return (
    < >
    <Header/>
      <div class="createArea-Head" >
        <Fab  aria-label="search" className="headerIcon">
          <SearchIcon />
        </Fab>
        <Fab aria-label="add" className="headerIcon">
          <AddIcon />
        </Fab>
       
      </div>
      <div {...handlers} style={{margin:"70px 0"}}>
      {data.map((singleData,index)=>{
        return <ShortCard date={singleData.date}
        money={singleData.money} />
      })}
      
      </div>

     
    </>
  );
}

export default CreateScreen;
