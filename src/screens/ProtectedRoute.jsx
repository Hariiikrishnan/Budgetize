import React,{useState,useContext,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import { AuthData } from "../context/AuthContext";


function ProtectedRoute(props){
    const navigate = useNavigate();
    const {value1,value2,value3} = useContext(AuthData);
    const [authToken,setAuthToken] = value3;
    // const [isLoggedIn,setLoggedIn] = useState(false);
    const checkUserToken = () =>{
        if(!authToken || authToken==="undefined"){
            // setLoggedIn(false);
            console.log("Getting false")
            return navigate("/login")
        }
        // setLoggedIn(true);
    }

    useEffect(()=>{
        checkUserToken()
    },[]);
    return <>
        {authToken?authToken.token ? props.children : null  : null }
    </>
}

export default ProtectedRoute;