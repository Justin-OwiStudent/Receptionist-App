import React, { useEffect, useState, useRef } from "react";
import classes from "./Patient.module.css";
import Navigation from "../Nav/Navigation";
import axios from "axios";
import Card from "../Modal/Card";
import { useNavigate } from "react-router-dom";
import MiniFormModal from "../Modal/MiniFormModal";

const Patient = () => {

  const [NameSurnameError, setNameSurnameError] = useState();
  const [AgeError, setAgeError] = useState();
  const [GenderError, setGenderError] = useState();
  const [EmailError, setEmailError] = useState();
  const [ContactError, setContactError] = useState();


  const navigate = useNavigate();

  const NameSurname = useRef();
  const Age = useRef();
  const Gender = useRef();
  const Email = useRef();
  const Contact = useRef();



  const AddPatient = () => {

    let PatientDetails = {
      NameSurname: NameSurname.current.value,
      Age: Age.current.value,
      Gender: Gender.current.value,
      Email: Email.current.value,
      Contact: Contact.current.value,
    }

    axios.post("http://localhost/receptionistapplication/AddPatient.php", PatientDetails)
      .then(res => {
        let data = res.data;
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      });
    // window.location.reload();

    if (NameSurname.current.value === "") {
      setNameSurnameError(<MiniFormModal message="You need to enter Username" />);
    }
    if (Age.current.value === "") {
      setAgeError(<MiniFormModal message="You need to enter Age" />);
    }
    if (Gender.current.value === "") {
      setGenderError(<MiniFormModal message="You need to enter Gender" />);
    }
    if (Email.current.value === "") {
      setEmailError(<MiniFormModal message="You need to enter Email" />);
      // setEmailError(StyleSheet.);
    }
    if (Contact.current.value === "") {
      setContactError(<MiniFormModal message="Contact number not valid" />);
    }

  }

  const [posts, setPosts] = useState();

  const [renderPost, setRenderPost] = useState();

  useEffect(() => {
    axios.get("http://localhost/receptionistapplication/ReadPatients.php")
      .then((res) => {
        let data = res.data;
        let renderPost = data.map((item) => <Card key={item.id} rerender={setRenderPost} uniqueId={item.id} NameSurname={item.NameSurname} Age={item.Age} Gender={item.Gender} Email={item.Email} Contact={item.Contact} />);

        setPosts(renderPost);
        setRenderPost(false);
      })
      .catch(err => {
        console.log(err)
      })

  }, [renderPost]);





  return (
    <>

      <Navigation></Navigation>

      <div className={classes.mainBlock}>
        <h1 className={classes.Pat}> List of Patients </h1>
        {posts}
      </div>

      <div className={classes.new}>

        <div className={classes.DocImg} ></div>
        <input placeholder="Name & Surname" ref={NameSurname} />
        {NameSurnameError}

        <input placeholder="Age" ref={Age} />
        {AgeError}

        <input placeholder="Gender" ref={Gender} />
        {GenderError}

        <input placeholder="Email" ref={Email} />
        {EmailError}

        <input placeholder="Contact" ref={Contact} />
        {ContactError}




        <button className={classes.bott} onClick={AddPatient}> Add Patient</button>

      </div>
    </>
  );
};

export default Patient;

