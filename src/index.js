import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctor from "./Components/Doctor/Doctor";
import Patient from "./Components/Patient/Patient";
import doctor from "./Components/Doctor/Doctor";
import LoginReg from "./Components/loginReg/LoginReg";
import Navigation from "./Components/Nav/Navigation";
import { Nav } from "react-bootstrap";
import Calender from "./Components/Calender/Calender";
import NewAppoint from "./Components/new-appointments/NewAppoint";
import Appointments from "./Components/appointments/Appointments";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

ReactDOM.render(
  <BrowserRouter>

    

    <Routes>

    {/* <Route path="/Navigation" element={<Navigation />} >
      <Route path="/App" element={<App />} />
      <Route path="/Doctor" element={<Doctor />} />
      <Route path="/Patient" element={<Patient />} />
    </Route> */}



      <Route path="/App" element={<App />} />

      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      
      
      <Route path="/Doctor" element={<Doctor />} />
      <Route path="/Patient" element={<Patient />} />
     

    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
