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


ReactDOM.render(
  
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<App />} />
       <Route path="Doctor" element={<Doctor />} />
       <Route path="Patients" element={<Patient />} />

       <Route path="Log-in" element={<LoginReg />} />
       
       
        
    
      
     </Routes>
    </BrowserRouter>

  ,
  document.getElementById('root')
);

