import React from "react";
import classes from "./Patient.module.css";

const Patient = () => {
  return (
    <>
      <div className={classes.mainBlock}>
        <h1 className={classes.Pat}> List of Patients </h1>

        <div className={classes.PatientCard}>
          <div className={classes.ProfImage}></div>
          <h2> Patient Name </h2>
          <h3>Patient Name</h3>
          <h3>Patient Name</h3>
          <h3>Patient Name</h3>

        </div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
      </div>

      <div className={classes.new}>
        
        <div className={classes.DocImg} ></div>
          <input placeholder="Name & Surname"></input>
          <input placeholder="Email"></input>
          <input placeholder="Contact Number"></input>
          <input placeholder=" "></input>
          {/* <input placeholder="Name & Surname"></input> */}

          <button className={classes.bott}> Add Patient</button>

      </div>
    </>
  );
};

export default Patient;
