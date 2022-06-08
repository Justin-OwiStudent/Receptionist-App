import { useState } from "react";
import classes from "./NewAppoint.module.css";

const NewAppoint = () => {


  // const [inputs , setInputs] = useState[]


  // const handleSubmbit = () => {

  // } 


  
  // const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }

  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   console.log(inputs)


  //   axios.post('https://localhost:888/api/addUSer', inputs)
  //   .then(function(response){
  //       console.log(response)
  //   });

  // }


  return (
    <>
      <div className={classes.main}>
        <h1> New Appointment </h1>

        <form >
          <input placeholder="Patient Name & Surname" className={classes.inp}></input>

          <input placeholder="Doctor" className={classes.inp}></input>

          <input placeholder="Room Number" className={classes.inp}></input>

          <input placeholder="Appointment Time" className={classes.inp}></input>

          <input placeholder="Appointment Date" className={classes.inp}></input>
        

          <button className={classes.botn}> Add Patient </button>
        </form>

        <div className={classes.NewPatient}>
            <div className={classes.PatientPfp}></div>
            <p className={classes.Pname}>Patient Name</p>
            <p className={classes.Detail1}>Patient Details</p>
            <p className={classes.Detail2}>Patient's Doctor</p>
            <p className={classes.Detail3}>Patient Name</p>


            

        </div>

      </div>
    </>
  );
};

export default NewAppoint;
