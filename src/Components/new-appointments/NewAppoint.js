import { useEffect, useState, useRef } from "react";
import classes from "./NewAppoint.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MiniModalLeft from "../Modal/MiniModalLeft";
import MiniModalRight from "../Modal/MiniModalRight";
import PatientModal from "../Modal/PatientModal";

const NewAppoint = () => {
  const navigate = useNavigate();

  const Patient = useRef();
  const Doctor = useRef();
  const Room = useRef();
  const AppointmentTime = useRef();
  const AppointmentDate = useRef();

  const AddAppointment = () => {
    let AppointmentDetails = {
      PatientName: Patient.current.value,
      DoctorName: Doctor.current.value,
      RoomName: Room.current.value,
      AppointmentTime: AppointmentTime.current.value,
      AppointmentDate: AppointmentDate.current.value,
    };

    axios
      .post(
        "http://localhost/receptionistapplication/AddAppointment.php",
        AppointmentDetails
      )
      .then((res) => {
        let data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <>
      <div className={classes.main}>
        <h1> New Appointment </h1>

        <form>
          <input
            placeholder="Patient Name & Surname"
            className={classes.inp}
            ref={Patient}
          ></input>

          <input
            placeholder="Doctor"
            className={classes.inp}
            ref={Doctor}
          ></input>

          <input
            placeholder="Room Number"
            className={classes.inp}
            ref={Room}
          ></input>

          <input
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            required
            placeholder="Appointment Time"
            className={classes.inp}
            ref={AppointmentTime}
          ></input>

          <input
            type="date"
            id="start"
            name="trip-start"
            min="2022-01-01"
            max="2022-12-31"
            placeholder="2022-06-26"
            className={classes.inp}
            ref={AppointmentDate}
          ></input>

          <div className={classes.botn} onClick={AddAppointment}>
            {" "}
            Add Patient{" "}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewAppoint;
