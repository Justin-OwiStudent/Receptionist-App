import "./index.css";
import React from "react";
import Navigation from "../src/Components/Nav/Navigation";
import Appointments from "./Components/appointments/Appointments";
import NewAppoint from "./Components/new-appointments/NewAppoint";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function App() {

  const navigate = useNavigate();

  useEffect(() =>{
    const userSession = sessionStorage.getItem('activeUser');
    console.log(userSession)

    if(userSession === '' || userSession === undefined){
      navigate('/');
    }
    
  }, []);

  return (
    <div className="App">

      <Navigation></Navigation>
      <Appointments></Appointments> 
      <NewAppoint></NewAppoint>
      
    </div>
  );
}

export default App;
