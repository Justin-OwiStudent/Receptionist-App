import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import classes from "../Modal/Modal.module.css"

const EditDoc = (props) => {

  const [UpdatedDoctor, setUpdatedDoctor] = useState({
    NameSurname: props.originalName,
    Age: props.originalAge,
    Email: props.originalEmail,
    Contact: props.originalContact,
    id: props.id,
  });

  const closeModal = () => {
    props.rerender();
  };

  useEffect(() => {
    document.getElementById("updateName").innerHTML = props.originalName;
    document.getElementById("updateAge").innerHTML = props.originalAge;
    document.getElementById("updateEmail").innerHTML = props.originalEmail;
    document.getElementById("updateContact").innerHTML = props.originalContact;

  
  }, []);

  const NameChange = (e) => {
    let value = e.target.value;
    setUpdatedDoctor({ ...UpdatedDoctor, NameSurname: value });
    console.log(UpdatedDoctor);
  };

  const AgeChange = (e) => {
    let value = e.target.value;
    setUpdatedDoctor({ ...UpdatedDoctor, Age: value });
    console.log(UpdatedDoctor);
  };


  const EmailChange = (e) => {
    let value = e.target.value;
    setUpdatedDoctor({ ...UpdatedDoctor, Email: value });
    console.log(UpdatedDoctor);
  };

  const ContactChange = (e) => {
    let value = e.target.value;
    setUpdatedDoctor({ ...UpdatedDoctor, Contact: value });
    console.log(UpdatedDoctor);
  };

  const updatePost = () => {
    axios.post("http://localhost/receptionistapplication/UpdateDoctor.php", UpdatedDoctor)
      .then((res) => {
        let data = res.data;
        console.log(data);
        props.upRender(true);
        props.rerender();
      });
  };

  return (
    <div className={classes.modal}>
      <form>
        <h1>Edit Doctor Data</h1>

        {/* <h2 id="updateName" ></h2> */}
        <input className={classes.inpu} id="updateName" placeholder="Edit Doctor Name" onChange={NameChange}/>

        <input className={classes.inpu} id="updateAge" placeholder="Edit Doctor Age" onChange={AgeChange}/>

        <input className={classes.inpu} id="updateEmail" placeholder="Edit Doctor Email" onChange={EmailChange}/>

        <input className={classes.inpu} id="updateContact" placeholder="Edit Doctor Contact" onChange={ContactChange}/>
      </form>

      <button type="submit" className={classes.PatBut} onClick={updatePost}>Edit this post</button>

      <button type="submit" className={classes.PatButi} onClick={closeModal}>Cancel</button>

    </div>
  );
};

export default EditDoc;
