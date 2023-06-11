import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import Fab from "@mui/material/Fab";

function Login() {

  const oAuthBtnStyles = {
    width:"300px",
    height:"52px",
    borderRadius:"12px",
    backgroundColor:"white",
    color:"black",
    textTransform:"capitalize",
    boxShadow:"none"
  }

  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection:"column",
          justifyContent:"center",
          height:"98vh"
        }}
      >
        <div
          style={{
            background: "#5cf520",
            width: "300px",
            height: "300px",
            borderRadius: "16px",
            padding:"0 20px"
          }} className="login"
        >
            <h3 style={{
                textAlign:"center",
                fontSize:"1.5rem",
                margin:"20px"
            }}>Login</h3>

            <input name="username" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />

            <div style={{
                display:"flex",
                justifyContent:"center",
                margin:"20px 0"
            }}>

            <Fab style={{
                backgroundColor:"white",
                height:"30px",
                width:"100px",
                borderRadius:"10px",
                textAlign:"center"
            }}>
            Login
        </Fab>

            </div>
        <div style={{
          display:"flex",
          justifyContent:"space-evenly",
          color:"white"
        }}>
          <p>New User ?</p>
          <Link style={{
            color:"#7a7a7a",
            textDecoration:"none"
          }}   to={"/register"}>Register !</Link>
        </div>

        </div>

        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"space-evenly",
          height:"250px",
          marginTop:"20px"
        }}>
        <p>OR</p>
          <Fab style={oAuthBtnStyles}>
           Login Using Snapchat      <SocialIcon network="snapchat" style={{ height: 25, width: 25 , color:"white" ,margin:"8px"}} key="25" />
          </Fab>
          <Fab style={oAuthBtnStyles}>
           Login Using Google      <SocialIcon network="google" style={{ height: 25, width: 25 , color:"white" ,margin:"8px"}} key="25" />
          </Fab>
          <Fab style={oAuthBtnStyles}>
           Login Using Facebook      <SocialIcon network="facebook" style={{ height: 25, width: 25 , color:"white" ,margin:"8px"}} key="25" />
          </Fab>
        </div>
      </div>
    </>
  );
}

export default Login;
