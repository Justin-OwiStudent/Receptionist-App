import React, { useEffect, useState } from "react";
import classes from "./Patient.module.css";
import Navigation from "../Nav/Navigation";
import axios from "axios";
import Card from "../Modal/Card";

const Patient = () => {


  const [posts, setPosts] = useState();

  const [renderPost, setRenderPost] = useState();

  useEffect(()=>{
    axios.get("http://localhost/receptionistapplication/ReadPatients.php")
    .then((res)=> {
        let data = res.data;
        console.log(data)
        let renderPost = data.map((item,index) => <Card id={index} NameSurname={item.NameSurname} Age={item.Age} Gender={item.Gender} />);
        
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
        {/* <div className={classes.PatientCard}>
            <h2> Patient Name </h2>
          <div className={classes.ProfImage}></div>
          
          <h3>Patient Name</h3>
          <h3>Patient Name</h3>
          <h3>Patient Name</h3>
        </div> */}

        
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
