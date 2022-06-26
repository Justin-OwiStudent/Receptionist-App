import React from 'react'
import ErrorAsset from '../assets/error.svg';
import classes from './Modal.module.css'


const PatientModal = (props) => {
  return (
  
    <div className={classes.alertPatientModal}>
        <p className={classes.prep}> {props.message} </p>
        
    </div>
  )
}

export default PatientModal;
