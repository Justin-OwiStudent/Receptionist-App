import React from 'react'
import ErrorAsset from '../assets/error.svg';
import classes from './Modal.module.css'


const MiniModalLeft = (props) => {
  return (
    // <div className='alertMiniModal'>
    //   <p className='preps'>{props.message}</p>
    //   <img id="rightImage" />
    // </div>  

    <div className={classes.alertMiniModal}>
        <p className={classes.preps}> {props.message} </p>
        
    </div>
  )
}

export default MiniModalLeft;
