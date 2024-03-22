import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "../components/Signin.jsx";
import Signup from "../components/Signup.jsx";
import Arts from "../components/Arts.jsx";
import Appbar from "../components/Appbar.jsx";
import MyArts from "../components/MyArts.jsx";
import UpdateArt from "../components/UpdateArt.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import MyArt from "../components/MyArt.jsx";
import { RecoilRoot } from "recoil";

import backgroundImg from "../imgs/image2.jpg"; // Replace with your actual image file path

function App() {
  useEffect(() => {
    // Apply background styles to the body element
    document.body.style.backgroundImage = `url(${backgroundImg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.margin = "0";
  }, []); // Run this effect only once on mount

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "transparent" }}>
      <RecoilRoot>
        <Router>
          <Appbar />
          <Routes>
            <Route path={"/signin"} element={<Signin />} />
            <Route path={"/signup"} element={<Signup />} />
            {/* <Route path={"/data"} element={<Data />} /> */}
            <Route path={"/arts"} element={<Arts />} />
            <Route path={"/myarts"} element={<MyArt />} />
            <Route path={"/myart"} element={<MyArts />} />
            <Route path={"/updateart/:id"} element={<UpdateArt />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
