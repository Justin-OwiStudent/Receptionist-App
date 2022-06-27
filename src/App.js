import "./index.css";
import React from "react";
import Navigation from "../src/Components/Nav/Navigation";
import Appointments from "./Components/appointments/Appointments";
import NewAppoint from "./Components/new-appointments/NewAppoint";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Doctor from "./Components/Doctor/Doctor";
import Patient from "./Components/Patient/Patient";
import Dashboard from "./Components/dashboard/Dashboard";



function App() {
  return (
    <div className="App">

     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Dashboard" element={<Dashboard />} />


        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Patient" element={<Patient />} />
    </Routes>
    


    </div>
  );
}

export default App;
