import "./index.css";
import { createRoot } from "react-dom/client";
import React from "react";
import Navigation from "../src/Components/Nav/Navigation";
import Button from "../src//Components/button/Button";
import Calender from "../src/Components/Calender/Calender";
import Appointments from "./Components/appointments/Appointments";
import Topnav from "../src/Components/top-nav/Topnav";
import User from "./Components/User/User";
import Doctor from "./Components/Doctor/Doctor";
import Patient from "./Components/Patient/Patient";
import NewAppoint from "./Components/new-appointments/NewAppoint";
import LoginReg from "./Components/loginReg/LoginReg";

function App() {
  return (
    <div className="App">

      <Calender></Calender>
      <NewAppoint></NewAppoint>
      <Appointments></Appointments>
      
    </div>
  );
}

export default App;
