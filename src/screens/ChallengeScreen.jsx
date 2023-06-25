import React,{useState,useEffect,useContext} from "react";
import Link, {useNavigate} from "react-router-dom";
import { AuthData } from "../context/AuthContext.jsx";

function ChallengeScreen(){

    const { value1, value2 ,value3,value4} = useContext(AuthData);

    const [authToken, setAuthToken] = value3;
    const [challenger,setChallenger] = value4;
    const navigate = useNavigate();
    const [isUser2Active,setUser2Active]=useState(false);
    console.log(authToken.challengeData);
    console.log(challenger.username);


    const pointsH4Style ={
        textAlign:"center",
        margin:"20px 0"
    }


    useEffect(()=>{
        if(authToken.user.u_id!==authToken.challengeData.user1){
            console.log("Should swap");
            setUser2Active(true)
        }   
    },[])
    
    return <>
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                padding:"20px",
            }}>
                <h2>Challenge</h2>
                <div style={{
                    display:"flex",
                    justifyContent:"space-evenly",
                    margin:"20px 0",
                    width:"100%",
                }}>
                    <div>
                        <h4>{authToken.user.username}</h4>
                        <h4 style={pointsH4Style}>{isUser2Active ? authToken.challengeData.user2_pt : authToken.challengeData.user1_pt}</h4>
                        {/* <h4>{authToken.challengeData.user1_pt}</h4> */}
                    </div>
                    <div>
                        <h4>{challenger.username}</h4>
                        <h4 style={pointsH4Style}>{isUser2Active ? authToken.challengeData.user1_pt : authToken.challengeData.user2_pt}</h4>
                    </div>
                </div>

            </div>

    </>
}

export default ChallengeScreen;