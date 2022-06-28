import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Navigation from "../Nav/Navigation";
import classes from "./Doctor.module.css";
import axios from "axios";
import Card from "../Modal/Card";
import DocCard from "../Modal/DocCard";
import MiniModalLeft from "../Modal/MiniModalLeft";
import MiniFormModal from "../Modal/MiniFormModal";

const Doctor = () => {

 
  const [NameSurnameError, setNameSurnameError] = useState();
  const [AgeError, setAgeError] = useState();
  const [GenderError, setGenderError] = useState();
  const [EmailError, setEmailError] = useState();
  const [ContactError, setContactError] = useState();
  const [SpecError, setSpecError] = useState();


  



  const navigate = useNavigate();

  const NameSurname = useRef();
  const Age = useRef();
  const Gender = useRef();
  const Email = useRef();
  const Contact = useRef();
  const Specialization = useRef();
 


  const AddDoctor = () => {
    let DoctorDetails = {
      NameSurname: NameSurname.current.value,
      Age: Age.current.value,
      Gender: Gender.current.value,
      Email: Email.current.value,
      Contact: Contact.current.value,
      Specialization: Specialization.current.value,
    }
    axios.post("http://localhost/receptionistapplication/AddDoctor.php", DoctorDetails)
    .then(res => {
      let data = res.data;
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    });
    // window.location.reload();


    if(NameSurname.current.value === ""){
      setNameSurnameError(<MiniFormModal message="You need to enter Username" />);
    } 
    if(Age.current.value === ""){
      setAgeError(<MiniFormModal message="You need to enter Age" />);
    } 
    if(Gender.current.value === ""){
      setGenderError(<MiniFormModal message="You need to enter Gender" />);
    } 
    if(Email.current.value === ""){
      setEmailError(<MiniFormModal message="You need to enter Email" />);
      // setEmailError(StyleSheet.);
    } 
    if(Contact.current.value === ""){
      setContactError(<MiniFormModal message="Contact number not valid" />);
    } 
    if(Specialization.current.value === ""){
      setSpecError(<MiniFormModal message="You need to enter Specialization" />);
    } 
    
}
   



  const [posts, setPosts] = useState();

  const [renderPost, setRenderPost] = useState();

  useEffect(()=>{
    axios.get("http://localhost/receptionistapplication/ReadDoctors.php")
    .then((res)=> {
        let data = res.data;
        let renderPost = data.map((item) => <DocCard uniqueId={item.id} key={item.id} rerender={setRenderPost} NameSurname={item.NameSurname} Age={item.Age} Email={item.Email} Contact={item.Contact} Specialization={item.Specialization}/>);
        
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
    
      <div className={classes.carousel}>
        <h1 className={classes.Pat}> List of Doctors </h1>
          {posts}
      </div>

      <div className={classes.new}>
        
        <div className={classes.DocImg} ></div>
          <input className={classes.emp} placeholder="Name & Surname" ref={NameSurname}/>
          {NameSurnameError}
          <input className={classes.emp} placeholder="Age" ref={Age}/>
          {AgeError}
          <input className={classes.emp} placeholder="Gender" ref={Gender}/>
          {GenderError}
          <input className={classes.emp} id="em" placeholder="Email" ref={Email} />
          {EmailError}
          <input className={classes.emp} placeholder="Contact" ref={Contact}/>
          {ContactError}
          <input className={classes.emp} placeholder="specialization" ref={Specialization}/>
          {SpecError}


          <button className={classes.bott} onClick={AddDoctor}> Add Doctor</button>

      </div>
    

    </>
  );
};

export default Doctor;
