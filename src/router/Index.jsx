import React from "react";
import Home from "../Home/Index";
import Accountpage from "../accountPage/Index";
import Loginpage from "../loginPage/Index";
import Createaccount from "../createAccount/Index";
import Loginaccount from "../loginAccount/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>    
            <Route path="/" element={<Home />} />
            <Route path="/accountpage" element={<Accountpage />} />
            <Route path="/loginpage" element={<Loginpage />} />
            <Route path="/createaccount" element={<Createaccount />} />
            <Route path="/loginaccount" element={<Loginaccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}