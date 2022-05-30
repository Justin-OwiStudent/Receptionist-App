import "./index.css";
import { createRoot } from 'react-dom/client';
import React from 'react';
import Navigation from "../src/Components/Nav/Navigation";
import Button from "../src/\/Components/button/Button"
import Calender from "../src/Components/Calender/Calender";
import Appointments from "./Components/appointments/Appointments";
import Topnav from "../src/Components/top-nav/Topnav";
import User from "./Components/User/User";
import Doctor from "./Components/Doctor/Doctor";

function App() {
  return (
    <div className="app">
        <Navigation></Navigation>
        {/* <User></User> */}
        <Appointments></Appointments>
        <Calender></Calender>


      {/* make a useUstate to do a calculation and then call that usestate 
      after a click or something 

      doen jou werk !!!!!!!!!
      werk hard !!!!!!!
      hou op game !!!!!!
      glo in jouself !!!! */}
        

        {/* <Doctor></Doctor> */}
    </div>
  );
}

export default App;
