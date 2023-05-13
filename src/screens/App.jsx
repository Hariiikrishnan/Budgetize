import React, { useState } from "react";
import { createContext ,useContext } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./DashboardScreen";
import CreateArea from "./CreateScreen";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";

import BottomBar from "../components/BottomBar";

import {SwipeContext} from "../context/AuthContext.jsx";

function App() {

  const [swiped,setSwipe] = useState(true);

  
  const value = {swiped,setSwipe}


  //  setTimeout(()=>{
  //       setSwipe(false);
  //     },7000)
      
  return (
    <>
    <SwipeContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/create" element={<CreateArea />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            {/* <Route path="/" element={< />} /> */}
           
          </Route>
        </Routes>
        { swiped && <BottomBar />}
      </BrowserRouter>
       
      </SwipeContext.Provider>
    </>
  );
}

export default App;
