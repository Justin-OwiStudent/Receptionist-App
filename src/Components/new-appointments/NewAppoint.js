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
    }
   
    axios.post("http://localhost/receptionistapplication/AddAppointment.php", AppointmentDetails)
    .then(res => {
      let data = res.data;
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    });
  }

  // if (result) {
  //   console.log("enter more details.");
  // } else {
  //   axios
  //     .post("http://localhost/receptionistapplication/AddAppointment.php", inputs)
  //     .then(function (response) {
  //       console.log(response);


  //     });
  // }


  // const [inputs, setInputs] = useState({
  //    Patient: '',
  //    Doctor: '',
  //    Room: '',
  //    AppointmentTime: '',
  //    AppointmentDate: '',

  // })

  // const [PatientError, setPatientError] = useState();
  // const [DoctorError, setDoctorError] = useState();
  // const [RoomError, setRoomError] = useState();
  // const [AppointmentTimeError, setAppointmentTimeError] = useState();
  // const [AppointmentDateError, setAppointmentDateError] = useState();
  


  // const PatientVal = (e) => {
  //   const value = e.target.value;
  //   setInputs({ ...inputs, Patient: value });
  //   if (inputs.Patient !== "") {
  //     setPatientError();
  //   }
  // };

  // const DoctorVal = (e) => {
  //   const value = e.target.value;
  //   setInputs({ ...inputs, Doctor: value });
  //   if (inputs.Doctor !== "") {
  //     setDoctorError();

  //   }
  // };

  // const RoomVal = (e) => {
  //   const value = e.target.value;
  //   setInputs({ ...inputs, Room: value });
  //   if (inputs.Room !== "") {
  //     setRoomError();
  //   }
  // };

  // const AppointmentTimeVal = (e) => {
  //   const value = e.target.value;
  //   setInputs({ ...inputs, AppointmentTime: value });
  //   if (inputs.AppointmentTime !== "") {
  //     setAppointmentTimeError();
  //   }
  // };

  // const AppointmentDateVal = (e) => {
  //   const value = e.target.value;
  //   setInputs({ ...inputs, AppointmentDate: value });
  //   if (inputs.AppointmentDate !== "") {
  //     setAppointmentDateError();
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (inputs.Patient === "") {
  //     setPatientError(<PatientModal message="Enter Patient Name." />);
  //   } else {
  //     setPatientError();
  //   }

  //   if (inputs.Doctor === "") {
  //     setDoctorError(<PatientModal message="Enter Doctor Name." />);
  //   } else {
  //     setDoctorError();
  //   }

  //   if (inputs.Room === "") {
  //     setRoomError(<PatientModal message="Enter Room." />);
  //   } else {
  //     setRoomError();
  //   }

  //   if (inputs.AppointmentTimeVal === "") {
  //     setAppointmentTimeError(<PatientModal message="Select Appointment Time." />);
  //   } else {
  //     setAppointmentTimeError();
  //   }

  //   if (inputs.AppointmentDateVal === "") {
  //     setAppointmentDateError(<PatientModal message="Select Appointment date" />);
  //   } else {
  //     setAppointmentDateError();
  //   }

  //   let result = Object.values(inputs).some((o) => o === "");
    


  //   if (result) {
  //     console.log("enter more details.");
  //   } else {
  //     axios
  //       .post("http://localhost/receptionistapplication/AddAppointment.php", inputs)
  //       .then(function (response) {
  //         console.log(response);


  //       });
  //   }
  // };






  //this wil redirect if session is not set  
  // useEffect(() =>{
  //   const userSession = sessionStorage.getItem('activeUSer');
  //   console.log(userSession)

  //   if(userSession === '' || userSession === undefined){
  //     navigate('/');
  //   }
  // }, []);


//   const [inputs, setInputs] = useState({});

//   const [posts, setPosts] = useState();

//   const [userId, setUserId] = useState({
//     activeUser: sessionStorage.getItem('activeUser'),
// });


//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) =>{
//     event.preventDefault();
//     console.log(inputs)


//     axios.post('https://localhost:888/api/addUSer', inputs)
//     .then(function(response){
//         console.log(response)
//     });

//       }


//       const [postMessage, setPostMessage] = useState({
//         message: '', 
//         user: sessionStorage.getItem('activeUser'),
//       });    

//   const postVal = (e) => {
//     let messageVal = e.target.value;
//     setPostMessage({...postMessage, message: messageVal});
//    }


//    const addNewPost = (e) => {
//     e.preventDefault();
//     document.getElementById('textMes').value = "";
//     axios.post('http://localhost:8888/api/addPost.php', postMessage)
//      .then((res)=>{
//        let data = res.data;
//        console.log(data); 
//       //  setRenderPost(true);
//      });
//   }
  

  return (
    <>
      <div className={classes.main}>
        <h1> New Appointment </h1>

        <form >
          <input placeholder="Patient Name & Surname" className={classes.inp} ref={Patient} ></input>
          {/* {PatientError} */}

          <input placeholder="Doctor" className={classes.inp}  ref={Doctor}></input>
          {/* {DoctorError} */}

          <input placeholder="Room Number" className={classes.inp}  ref={Room}></input>
          {/* {RoomError} */}

          

          <input type="time" id="appt" name="appt"
          min="09:00" max="18:00" required placeholder="Appointment Time" className={classes.inp}  ref={AppointmentTime}></input>
          {/* {AppointmentTimeError} */}
          

          <input type="date" id="start" name="trip-start"
          min="2022-01-01" max="2022-12-31" placeholder="2022-06-26" className={classes.inp}  ref={AppointmentDate}></input>
          {/* {AppointmentDateError} */}
        
         

          <div className={classes.botn} onClick={AddAppointment}> Add Patient </div>
        </form>

       

      </div>
    </>
  );
};

export default NewAppoint;
