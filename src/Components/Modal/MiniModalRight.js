import React from 'react'
import classes from './Modal.module.css'

const MiniModalRight = (props) => {
  return (
    <div classes={classes.alertMiniModalRight}>
      <p className={classes.prepsRight}>{props.message}</p> 
    </div>
  )
}

export default MiniModalRight;
