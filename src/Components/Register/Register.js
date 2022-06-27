import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Register.module.css";
import axios from "axios";
import MiniModalLeft from "../Modal/MiniModalLeft";
import MiniModalRight from "../Modal/MiniModalRight";
import { useNavigate } from "react-router-dom";
import error from "../assets/error.svg";
import Okay from "../assets/okay.svg";
import NotOkay from "../assets/notOkay.svg";

const Register = () => {


  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    first: "",
    email: "",
    username: "",
    contact: "",
    password: "",
    passwordCon: "",
    image: ''
  });

  const [nameError, setNameError] = useState();
  const [lastError, setLastError] = useState();
  const [emailError, setEmailError] = useState();
  const [usernameError, setUsernameError] = useState();
  const [contactError, setContactError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [passwordConError, setPasswordConError] = useState();

  const [emailAvail, setEmailAvail] = useState();
  const [usernameAvail, setUsernameAvail] = useState();

  const [emailIcon, setEmailIcon] = useState();
  const [userIcon, setUserIcon] = useState();

  const firstVal = (e) => {
    const value = e.target.value;
    setInputs({ ...inputs, first: value });
    if (inputs.first !== "") {
      setNameError();
    }
  };

  const imageVal = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader();
    
    reader.onloadend = function() {
      let imgFile = reader.result;
 
      setInputs({...inputs, image: imgFile});

      let image = new Image();
      image.src = reader.result;
      document.getElementById('profileimg').appendChild(image);
    }
    reader.readAsDataURL(file);
  }

  const emailVal = (e) => {
    const mailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const value = e.target.value;
    setInputs({ ...inputs, email: value });
    if (inputs.email !== "") {
      setEmailError();
    }
    if (!value.match(mailRegex)) {
      setEmailError(<MiniModalLeft message="Email is not a valid format..." />);
    }
  };

  const validateEmail = () => {
    axios
      .post("http://localhost/receptionistapplication/authenticateEmail.php", inputs)
      .then(function (response) {
        if (response.data === "Available") {
          setEmailIcon(Okay);
          setEmailAvail();
        } else if (response.data === "Not Available") {
          setEmailIcon(NotOkay);
          setEmailAvail(<MiniModalLeft message="Email is not available" />);
        } else if (response.data === "") {
          setEmailIcon();
          setEmailAvail();
          setEmailError();
        }
      });
  };

  const usernameVal = (e) => {
    const value = e.target.value.trim();
    setInputs({ ...inputs, username: value });
    if (inputs.username !== "") {
      setUsernameError();
    }
  };

  const validateUser = () => {
    axios
      .post("http://localhost/receptionistapplication/authenticateUser.php", inputs)
      .then(function (response) {
        if (response.data === "Available") {
          setUserIcon(Okay);
          setUsernameAvail();
        } else if (response.data === "Not Available") {
          setUserIcon(NotOkay);
          setUsernameAvail(
            <MiniModalLeft message="Username is not available" />
          );
        } else if (response.data === "") {
          setUserIcon();
          setUsernameAvail();
          setUsernameError();
        }
      });
  };

  const contactVal = (e) => {
    const contRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const value = e.target.value;
    setInputs({ ...inputs, contact: value });
    if (inputs.contact !== "") {
      setContactError();
    }
    if (!value.match(contRegex)) {
      setContactError(<MiniModalLeft message="Contact number is not Valid" />);
    }
  };

  const passwordVal = (e) => {
    const PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const value = e.target.value;
    setInputs({ ...inputs, password: value });
    if (inputs.password !== "") {
      setPasswordError();
    }
    if (!value.match(PassRegex)) {
      setPasswordError(
        <MiniModalLeft message="Password must include one Number, one Uppercase & one Lowercase character" />
      );
    }
  };

  const passwordConVal = (e) => {
    const value = e.target.value;
    setInputs({ ...inputs, passwordCon: value });
    if (inputs.password === value) {
      setPasswordConError();
    } else {
      setPasswordConError(
        <MiniModalLeft message="Your password does not match" />
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.first === "") {
      setNameError(<MiniModalLeft message="whats your Name" />);
    } else {
      setNameError();
    }

    if (inputs.email === "") {
      setEmailError(
        <MiniModalLeft message="you must provide a valid email address" />
      );
    } else {
      setEmailError();
    }

    if (inputs.contact === "") {
      setContactError(
        <MiniModalLeft message="you have to provide a contact number"/>
      )
    }  else {
      setContactError();
    }


    if (inputs.username === "") {
      setUsernameError(
        <MiniModalLeft message="you must provide a valid Username" />
      );
    } else {
      setUsernameError();
    }

    if (inputs.password === "") {
      setPasswordError(
        <MiniModalLeft message="you must provide a valid Password" />
      );
    } else {
      setPasswordError();
    }

    if (inputs.passwordCon === "") {
      setPasswordConError(
        <MiniModalLeft message="your passwords do not match " />
      );
    } else {
      setPasswordConError();
    }

    let result = Object.values(inputs).some((o) => o === "");



    
    if (result) {
      console.log("enter more details.");
    } else {
      axios
        .post("http://localhost/receptionistapplication/RegisterUser.php", inputs)
        .then(function (response) {


          if(response.status === 200){
            navigate("/Login");
          }

        });
    }
  };

  return (
    <>
      <div className={classes.MainI}>
        <div className={classes.registerCon}>
          <h1>Register Form</h1>
          <form onSubmit={handleSubmit}>
            
            <div className={classes.imageArea}>
              <p className={classes.uplo}>Upload a Profile Image</p>
              <div id="profileimg" className={classes.profile_img}>
                <div id="profileimg"></div>
              </div>
              <input name="imageUrl" className={classes.imgInput} type="file" onChange={imageVal}/>
            </div>

            <input
              className={classes.amp}
              name="names"
              type="text"
              placeholder="first"
              onChange={firstVal}
            />
            {nameError}
           
            <div className={classes.statusIcon}>
              <img src={emailIcon} />
            </div>
            
            <input
              className={classes.amp}
              name="email"
              type="email"
              placeholder="Your Email"
              onBlur={validateEmail}
              onChange={emailVal}
            />
            {nameError}
            
            <input
              className={classes.amp}
              name="contact"
              type="number"
              placeholder="Contact"
              onChange={contactVal}
            />
            {contactError}
            
            <input
              className={classes.amp}
              name="username"
              type="text"
              placeholder="Username"
              onBlur={validateUser}
              onChange={usernameVal}
            />

            {usernameError}
            {usernameAvail}
            
            <input
              className={classes.amp}
              name="password"
              type="password"
              placeholder="Password"
              onChange={passwordVal}
            />
  {/* <MiniModalLeft></MiniModalLeft> */}

            {passwordError}
            
            <input
              className={classes.amp}
              type="password"
              placeholder="Confirm Password"
              onChange={passwordConVal}
            />
  
            {passwordConError}
            
            <button
              type="submit"
              className={classes.but}
              // onClick={handleSubmit}
              
            >
              Register User
            </button>
          </form >

          <Link to="/Login">
            <p className={classes.Log}> Login </p>
          </Link>

        </div>
        <div className={classes.righy}>

        </div>

      </div>
    </>
  );
};

export default Register;
