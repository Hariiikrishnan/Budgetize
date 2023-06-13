import React, { useState, useContext ,useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Button from "@mui/material/Button";

import axios from "axios";

import Gauge from "../components/Gauge.jsx";
import ShortCard from "../components/ShortCard.jsx";
import {Link,useNavigate} from "react-router-dom";
import BottomBar from "../components/BottomBar";

import { AuthData } from "../context/AuthContext.jsx";
import { SwipeContext } from "../context/AuthContext.jsx";

function DashboardScreen() {

  const { value1, value2 ,value3} = useContext(AuthData);

  const [authToken, setAuthToken] = value3;
  const navigate = useNavigate();
  var maxLimit = authToken.user.maxLimit ;
  var currentAmount = 2970;
  var spendPercent = (currentAmount / maxLimit) * 100;
  var progress = (spendPercent*3.6)+"deg";
  console.log(progress)
  const [data,setData] = useState([]);

  // console.log(authToken.user.username)

  async function getRecent(){
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken.token,
      },
    };
    try {
      const res = await axios.get(
        `https://starfish-app-uva3q.ondigitalocean.app/budgetize/recent`,
        // `http://localhost:3001/budgetize/recent`,
        
        config
      );
      console.log(res.data.results)
        
      setData(res.data.results)
      // setLoading(false);
      // setData((prevData)=>{
      //   console.log(prevData)
      //  return [...prevData,...res.data.results] 
      // });

      // if(res.data.results.length===0){
      //   console.log("end!!!!!!!")
      //   setHasMore(false);
      // }
    } catch (err) {
      console.error("error ", err.res.data);
    }
  }

  useEffect(()=>{
    getRecent()
  },[])

  // useEffect(()=>{
  //   if(authToken===undefined){
  //     navigate("/login")
  //   }
  // },[])

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
          <h2>{authToken.user.username}</h2>
        </div>
        <div >
          <div data-progress={spendPercent} class="d-board expenseBar" style={{ background :`conic-gradient(#5cf520 ${progress}, transparent 0deg)` }} >
          </div>
        </div>
        </div>
        <h3 style={{color:"white", textAlign:"Center"}}>Monthly Limit : {authToken.user.maxLimit}</h3>
      </div>      
    </div>
      {data.map((singleData, index) => {
        return <ShortCard date={singleData.ledgerDate} money={singleData.totalPerday} />;
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
