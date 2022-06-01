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
        </div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
        <div className={classes.PatientCard}></div>
      </div>
    </>
  );
};

export default Patient;
