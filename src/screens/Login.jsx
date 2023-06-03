
import Fab from "@mui/material/Fab";

function Login() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection:"column"
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

        </div>
      </div>
    </>
  );
}

export default Login;
