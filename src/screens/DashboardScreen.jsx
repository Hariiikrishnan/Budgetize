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

  const { value1, value2 ,value3,value4} = useContext(AuthData);

  const [authToken, setAuthToken] = value3;
  const [challenger,setChallenger] = value4;
  const navigate = useNavigate();



  var maxLimit = authToken.user.maxLimit ;
  var currentAmount = authToken.user.currentAmount;

  var spendPercent = (currentAmount / maxLimit) * 100;
  var progress = (spendPercent*3.6)+"deg";
  if(authToken.user.currentAmount >= authToken.user.maxLimit ){
      spendPercent = 100
      progress = (spendPercent*3.6)+"deg";
  }
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
        // `https://starfish-app-uva3q.ondigitalocean.app/budgetize/recent`,
        `http://localhost:3001/budgetize/recent/${authToken.user.u_id}`,
        
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
    <div className="dashboard">

    

    <div id="d-board-headWrapper">
      <h1>Budgetize</h1>
      {/* <span class="gauge-dot top"></span> */}

      <div class="d-board-head">
        {/* <Gauge /> */}
        <div style={{display:"flex", justifyContent:"space-around" , alignItems:"center", margin:"30px"}}>
          
        
        <div class="d-board welcome">
          <h4>Welcome Back,</h4>
          <h2 style={{
            margin:"2px 0",
          }}>{authToken.user.username.charAt().toUpperCase() + authToken.user.username.slice(1)}</h2>
          <h2>₹ {authToken.user.currentAmount}</h2>
        </div>
        <div >
          <div data-progress={spendPercent} class="d-board expenseBar" style={{ background :`conic-gradient(#5cf520 ${progress}, transparent 0deg)` }} >
          </div>
        </div>
        </div>
        <h3 style={{color:"white", textAlign:"Center"}}>Monthly Limit : ₹ {authToken.user.maxLimit}</h3>
      </div>      
    </div>

         <div style={{
          display:"flex",
          justifyContent:"center",
          margin:"20px 0 10px 0"
         }}>
         <div style={{
            backgroundColor:"white",
            width:"90%",
            height:"120px",
            borderRadius:"10px",
            display:"flex",
            justifyContent:"space-between",
            // padding:"10px"
          }}>

        <div style={{
          width:"30%",
          height:"120px",
          backgroundColor:"#ebf9e6",
          borderBottomLeftRadius:"10px",
          borderTopLeftRadius:"10px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-evenly",
          alignItems:"center",
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <path
        fill="#373748"
        d="M14.229 1022.361c-7.846 0-14.229 6.382-14.229 14.227 0 7.845 6.383 14.225 14.229 14.225 7.845 0 14.226-6.38 14.226-14.225a.98.98 0 000-.01c-.001-.17-.022-.337-.03-.506l2.833-.758a1 1 0 00.578-1.513l-1.076-1.641.111-1.961a1 1 0 00-1.258-1.022l-2.926.786c-2.454-4.61-7.187-7.595-12.458-7.602zm-.002 2h.002c4.79.01 9.13 2.806 11.113 7.166a1 1 0 001.17.553l2.285-.613-.053.908a1 1 0 00.162.606l.5.76-2.281.61a1 1 0 00-.736 1.07c.04.39.063.782.066 1.175a12.21 12.21 0 01-12.226 12.217A12.211 12.211 0 012 1036.588a12.213 12.213 0 0112.227-12.227z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#F55"
        d="M14.228 1023.363c-7.305 0-13.227 5.92-13.228 13.224a13.225 13.225 0 0013.227 13.227c7.306 0 13.228-5.921 13.228-13.226 0-7.304-5.923-13.225-13.228-13.225h.001zm0 2.558a10.67 10.67 0 0110.668 10.666 10.665 10.665 0 01-10.668 10.666 10.669 10.669 0 01-10.668-10.666 10.665 10.665 0 0110.668-10.666z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#F55"
        d="M14.228 1028.482a8.106 8.106 0 100 16.211 8.107 8.107 0 100-16.211zm0 2.559a5.547 5.547 0 110 11.095 5.547 5.547 0 010-11.095z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#F55"
        d="M14.228 1033.601a2.987 2.987 0 100 5.973 2.987 2.987 0 000-5.973zm0 2.06c.506 0 .925.42.925.927 0 .505-.42.927-.925.927a.934.934 0 01-.926-.928c0-.505.42-.925.926-.925z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#373748"
        d="M27.783 1032.438a.503.503 0 00-.133.02l-13.252 3.55a.5.5 0 10.26.965l13.25-3.549a.5.5 0 00-.125-.986z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#FFD42A"
        d="M25.715 1031.257l4.157-1.114-.129 2.288 1.257 1.917-4.158 1.114-1.257-1.917.13-2.288z"
        transform="translate(0 -1020.362)"
      ></path>
    </svg>

    <p style={{
      textAlign:"center"
    }}> Friendly Challenge &gt; </p>
        </div>

            {/* User 1 Profile */}
            <div className="d-board-chlng"> 
           
          <div class="profile-img container" style={{
            margin:"10px"
          }}>
            <img src={
              // `http://localhost:3001/budgetize/account/profile/${authToken.user.u_id}`} 
              `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${authToken.user.u_id}`} 
              alt="Profile PFP"/>
          </div>
          <p style={{
            fontSize:'18px',
            fontWeight:"700"
          }}>{authToken.user.username.charAt().toUpperCase()+authToken.user.username.slice(1)}</p>
            </div>

        <div style={{
          width:"15%",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"space-evenly"
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path
        fill="#fe9526"
        d="M16.34 64c-.23 0-.46-.05-.67-.17-.62-.33-.91-1.07-.68-1.74l9.62-27.68h-9.54c-.47 0-.9-.23-1.17-.61-.27-.38-.33-.87-.18-1.31L25.05.95c.2-.57.74-.95 1.35-.95h22.54a1.434 1.434 0 011.18 2.25l-14.16 20.4h9.16c.54 0 1.04.31 1.28.79.24.49.19 1.07-.13 1.5L17.49 63.43c-.28.37-.71.57-1.15.57zm.77-32.45h9.52a1.436 1.436 0 011.36 1.9L20.73 54.3l21.53-28.79h-9.04a1.434 1.434 0 01-1.18-2.25L46.2 2.86H27.4L17.11 31.55z"
        className="colorf6b64e svgShape"
      ></path>
    </svg>

    <p style={{
      backgroundColor:"red",
      color:"white",
      padding:"4px 6px",
      borderRadius:"5px"
    }}>Day 3</p>
        </div>


            {/* User 2 Profile */}
            <div className="d-board-chlng">
            
          <div class="profile-img container" style={{
            margin:"10px"
          }}>
            <img src={
              `http://localhost:3001/budgetize/account/profile/${challenger.u_id}`}
              // `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${challenger.u_id}`}
               alt="Profile PFP"/>
          </div>
          <p style={{
            fontSize:'18px',
            fontWeight:"700"
          }}>{challenger.username.charAt().toUpperCase() +challenger.username.slice(1)}</p>
          
            </div>
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
