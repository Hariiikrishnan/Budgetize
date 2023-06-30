import React, { useState, useEffect, useContext } from "react";
import Link, { useNavigate } from "react-router-dom";
import { AuthData } from "../context/AuthContext.jsx";

import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function ChallengeScreen() {
  //   const options=

  const { value1, value2, value3, value4 } = useContext(AuthData);

  const [authToken, setAuthToken] = value3;
  const [challenger, setChallenger] = value4;
  const navigate = useNavigate();
  const [isUser2Active, setUser2Active] = useState(false);
  console.log(authToken.challengeData);
  console.log(challenger.username);

  const pointsH4Style = {
    textAlign: "center",
    width:"100px",
    padding:"3.5% 0",
    backgroundColor:"#fa4887",
    color:"white",
    borderRadius:"0 0 15px 15px"
  };
  const todayDate = new Date();
  var lastDate ;
  if(todayDate.getMonth()===0){
    lastDate = 31
  }
  else if(todayDate.getMonth() % 2 === 1 ){
    if(todayDate.getMonth()===1){      
      lastDate = 28
    } else if(todayDate.getMonth()===7){
      lastDate = 31
    }else{
      lastDate = 30
    }
  }
  var maxPoints = (lastDate - authToken.challengeData.start_date.slice(8,10))*3;
  console.log(maxPoints)
  const data = {
    labels: [authToken.user.username, challenger.username],
    datasets: [
      {
        label: "",
        data: isUser2Active ?[authToken.challengeData.user2_pt,authToken.challengeData.user1_pt] :[authToken.challengeData.user1_pt,authToken.challengeData.user2_pt],
        backgroundColor: ["#FFE15D","#DBDBDB"],
        borderColor: ["red","yellow"],
        borderWidth: "3px",
        
      },
      // {
      //   label: "",
      //   data: [authToken.challengeData.user2_pt],
      //   backgroundColor: "marine",
      //   borderColor: "black",
      //   borderWidth: "1px",
      
      // },
    ],
  };
  var options = {
   
  //   layout: {
  //     padding: {
  //         left: 50
  //     }
  // },
  maintainAspectRatio: false,
  barPercentage:0.5,
  borderRadius:7,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
  },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          // max:maxPoints,
        },
        border: {
          display: false,
        },
        title: {
          display: false,
        
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
        begintAtZero:0,
        stepValue:3,
        max:maxPoints
      },
    },
  };

  useEffect(() => {
    if (authToken.user.u_id !== authToken.challengeData.user1) {
      console.log("Should swap");
      // let temp = authToken.challengeData.user2_pt;
      // authToken.challengeData.user2_pt =   authToken.challengeData.user1_pt ;
      // authToken.challengeData.user1_pt  = temp;
      setUser2Active(true);
    }
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 20px",
        }}
      >
        <h2>Challenge</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "8% 0",
            width: "100%",
            flexDirection:"column",
            alignItems:'center'
          }}
        >
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"space-evenly",
          }}>
             <div className="profile-img container" style={{
            margin:"10px"
          }}> 
            <img src={
              // `http://localhost:3001/budgetize/account/profile/${authToken.user.u_id}`} 
              `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${authToken.user.u_id}`} 
              alt="Profile PFP"/>
          </div>
          <div className="profile-img container" style={{
            margin:"10px"
          }}> 
            <img src={
              // `http://localhost:3001/budgetize/account/profile/${authToken.user.u_id}`} 
              `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${challenger.u_id}`} 
              alt="Profile PFP"/>
          </div>
            {/* <h4>{authToken.challengeData.user1_pt}</h4> */}
          </div>
          <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"space-evenly",
            margin:"10px 0 0 0"
          }}>
            <h4 style={{
              width:"100px",
              textAlign:"center",
              backgroundColor:"#fa4887",
    color:"white",
              padding:"2.5% 0 1.5% 0",
              borderRadius:"15px 15px 0 0",
              marginBottom:"3px",
              fontSize:"1.1rem",
              letterSpacing:"0.09rem"
            }}>{authToken.user.username.charAt().toUpperCase()+authToken.user.username.slice(1)}</h4>
            <h4 style={{
              width:"100px",
              textAlign:"center",
              backgroundColor:"#fa4887",
    color:"white",
              padding:"2.5% 0 1.5% 0",
              borderRadius:"15px 15px 0 0",
              marginBottom:"3px",
              fontSize:"1.1rem",
              letterSpacing:"0.09rem"
            }}>{challenger.username.charAt().toUpperCase()+challenger.username.slice(1)}</h4>
            {/* <h4>{authToken.challengeData.user1_pt}</h4> */}
          </div>
          <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"space-evenly",
          }}>
            <h2 style={pointsH4Style}>
              {isUser2Active
                ? authToken.challengeData.user2_pt
                : authToken.challengeData.user1_pt}
            </h2>
            <h2 style={pointsH4Style}>
              {isUser2Active
                ? authToken.challengeData.user1_pt
                : authToken.challengeData.user2_pt}
            </h2>
          </div>

          <div style={{
            margin:"20px 0",
            height:"45vh",
            backgroundColor:"#fa4887",
            borderRadius:"20px",
            padding:"30px 0"
          }}>
            <Bar data={data} options={options}></Bar>
          </div>

          { authToken.challengeData.user2_pt === authToken.challengeData.user1_pt  ? 
           <p style={{
            textAlign:"center",
            fontSize:"1.2rem"
           }}> It's Equal ! <br/> You Should level up!</p> :
          !isUser2Active && ( authToken.challengeData.user2_pt > authToken.challengeData.user1_pt ) ? 
          <p style={{
             textAlign:"center",
            fontSize:"1.2rem"
           }}>{challenger.username.charAt().toUpperCase()+challenger.username.slice(1)} is in lead</p> :   
             <p style={{
             textAlign:"center",
            fontSize:"1.2rem"
           }}>{authToken.user.username.charAt().toUpperCase()+authToken.user.username.slice(1)} is in lead !</p> }
          {/* <p style={{
              textAlign:"center",
            fontSize:"1.2rem"
           }}>{challenger.username} is in lead</p> */}
          {/* } */}
        </div>
      </div>
    </>
  );
}

export default ChallengeScreen;
