import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

import {
BrowserRouter,
Routes,
Route
} from 'react-router-dom';
import Doctor from './Components/Doctor/Doctor';
import Patient from './Components/Patient/Patient'
import doctor from './Components/Doctor/Doctor'
import LoginReg from './Components/loginReg/LoginReg'
import Navigation from './Components/Nav/Navigation';
import { Nav } from 'react-bootstrap';


ReactDOM.render(
  
    <BrowserRouter>
    <Navigation></Navigation>
     <Routes>

      <Route path="/" element={<App />} />
      <Route path="/Navigation" element={<Navigation/>} />
      <Route path="/Doctor" element={<Doctor />} />
      <Route path="/Patient" element={<Patient />} />

      
      
     </Routes>
    </BrowserRouter>

  ,
  document.getElementById('root')
);

