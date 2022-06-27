import React, { useEffect } from 'react'

import Appointments from '../appointments/Appointments'
import NewAppoint from '../new-appointments/NewAppoint'
import Navigation from '../Nav/Navigation'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() =>{
    const userSession = sessionStorage.getItem('activeUser')

    if(userSession === '' || userSession === null){
      navigate('/');
    }
  }, []);


  

  return (
    <>
      <Navigation/>
      <Appointments/>
      <NewAppoint/>
    </>
  )
}
export default Dashboard;
