import React from "react";
import classes from "./Modal.module.css";

const Card = (props) => {


    // if statement for male and female




  return (
    <div>
      <div className={classes.PatientCard}>

        <h2>{props.NameSurname} </h2>

        <div className={classes.ProfImage}></div>
    
        
        
        <p>patient Age:</p>
        <h3>{props.Age}</h3>
        <p>patient Gender:</p>
        <h3>{props.Gender}</h3>
        <h3></h3>
      </div>
    </div>
  );
};

export default Card;
