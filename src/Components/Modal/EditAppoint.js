import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import classes from "../Modal/Modal.module.css"

const EditAppoint = (props) => {

  const [UpdatedAppoint, setUpdatedAppoint] = useState({
    Patient: props.originalPatient,
    Doctor: props.originalDoctor,
    Room: props.originalRoom,
    AppointmentDate: props.originalDate,
    id: props.id,
  });

  const closeModal = () => {
    props.rerender();
  };

  useEffect(() => {
    document.getElementById("updatePatient").innerHTML = props.originalPatient;
    document.getElementById("updateDoctor").innerHTML = props.originalDoctor;
    document.getElementById("updateRoom").innerHTML = props.originalRoom;
    document.getElementById("updateDate").innerHTML = props.originalDate;

  
  }, []);

  const PatientChange = (e) => {
    let value = e.target.value;
    setUpdatedAppoint({ ...UpdatedAppoint, Patient: value });
    console.log(UpdatedAppoint);
  };

  const DoctorChange = (e) => {
    let value = e.target.value;
    setUpdatedAppoint({ ...UpdatedAppoint, Doctor: value });
    console.log(UpdatedAppoint)
  };


  const RoomChange = (e) => {
    let value = e.target.value;
    setUpdatedAppoint({ ...UpdatedAppoint, Room: value });
    console.log(UpdatedAppoint);
  };

  const DateChange = (e) => {
    let value = e.target.value;
    setUpdatedAppoint({ ...UpdatedAppoint, AppointmentDate: value });
    console.log(UpdatedAppoint);
  };

  const updatePost = () => {
    axios.post("http://localhost/receptionistapplication/UpdateAppoint.php", UpdatedAppoint)
      .then((res) => {
        let data = res.data;
        console.log(data);
        // props.upRender(true);
        props.rerender();
      });
  };

  return (
    <div className={classes.modalsi}>
      <form>
        <h1>Edit Doctor Data</h1>

        {/* <h2 id="updateName" ></h2> */}
        <input className={classes.inpt} id="updatePatient" placeholder="Edit Appointment Patient" onChange={PatientChange}/>

        <input className={classes.inpt} id="updateDoctor" placeholder="Edit Appointment Doctor" onChange={DoctorChange}/>

        <input className={classes.inpt} id="updateRoom" placeholder="Edit Appointment Room" onChange={RoomChange}/>

        <input 
        
        type="date"
        
        name="trip-start"
        min="2022-01-01"
        max="2022-12-31"
        placeholder="2022-06-26"

        className={classes.inpt} id="updateDate" onChange={DateChange}/>
      </form>

      <button type="submit" className={classes.PatBut} onClick={updatePost}>Edit this post</button>

      <button type="submit" className={classes.PatButi} onClick={closeModal}>Cancel</button>

    </div>
  );
};

export default EditAppoint;
