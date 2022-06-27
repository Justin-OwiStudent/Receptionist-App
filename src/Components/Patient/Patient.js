import React, { useEffect, useState, useRef } from "react";
import classes from "./Patient.module.css";
import Navigation from "../Nav/Navigation";
import axios from "axios";
import Card from "../Modal/Card";
import { useNavigate } from "react-router-dom";
import EditPost from "../Modal/EditPost";


const Patient = () => {

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
    window.location.reload();
  }



  const [posts, setPosts] = useState();

  const [renderPost, setRenderPost] = useState();

  useEffect(()=>{
    axios.get("http://localhost/receptionistapplication/ReadPatients.php")
    .then((res)=> {
        let data = res.data;
        let renderPost = data.map((item) => <Card key={item.id} rerender={setRenderPost} uniqueId={item.id} NameSurname={item.NameSurname} Age={item.Age} Gender={item.Gender} Email={item.Email} Contact={item.Contact}/>);
        
        setPosts(renderPost);   
        setRenderPost(false);
    })
    .catch(err=>{
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
          <input placeholder="Name & Surname" ref={NameSurname}/>
          <input placeholder="Age" ref={Age}/>
          <input placeholder="Gender" ref={Gender}/>
          <input placeholder="Email" ref={Email} />
          <input placeholder="Contact" ref={Contact}/>

        

          <button className={classes.bott} onClick={AddPatient}> Add Patient</button>

      </div>
    </>
  );
};

export default Patient;

