import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateArea from "./CreateArea";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/create" element={<CreateArea />} />
            {/* <Route path="/" element={< />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
