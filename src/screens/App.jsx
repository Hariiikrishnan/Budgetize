import React, { useState } from "react";
import { createContext ,useContext } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./DashboardScreen";
import CreateArea from "./CreateArea";
import CreateScreen from "./CreateScreen";
import ReplyAmount from "./ReplyAmount";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";

import BottomBar from "../components/BottomBar";

import {AuthData} from "../context/AuthContext.jsx";

function App() {

  const [date,setDate] = useState();
  const [totalPerDay,setTotal] = useState();

  
  // const value = {swiped,setSwipe}


  //  setTimeout(()=>{
  //       setSwipe(false);
  //     },7000)
      
  return (
    <>
    <AuthData.Provider value={ { value1:[date,setDate] , value2: [totalPerDay,setTotal] }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/create" element={<CreateArea />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="/createfield" element={<CreateScreen />} />
            {/* <Route path="/totalAmount" element={<ReplyAmount />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/" element={< />} /> */}
           
          </Route>
        </Routes>
        {/* { swiped && <BottomBar />} */}
      </BrowserRouter>
       
      </AuthData.Provider>
    </>
  );
}

export default App;
