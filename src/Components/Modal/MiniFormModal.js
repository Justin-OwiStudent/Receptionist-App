import React from 'react'
import ErrorAsset from '../assets/error.svg';
import classes from './Modal.module.css'


const MiniFormModal = (props) => {
  return (
 

    <div className={classes.alertMiniFormModal}>
        <p className={classes.preps}> {props.message} </p>
        
    </div>
  )
}

export default MiniFormModal;
