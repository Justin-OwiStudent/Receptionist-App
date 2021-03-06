import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import classes from "../Modal/Modal.module.css"

const EditPost = (props) => {

  const [UpdatedPatient, setUpdatedPatient] = useState({
    NameSurname: props.originalName,
    Age: props.originalAge,
    Gender: props.originalGender,
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
    document.getElementById("updateGender").innerHTML = props.originalGender;
    document.getElementById("updateEmail").innerHTML = props.originalEmail;
    document.getElementById("updateContact").innerHTML = props.originalContact;
  }, []);

  const NameChange = (e) => {
    let value = e.target.value;
    setUpdatedPatient({ ...UpdatedPatient, NameSurname: value });
    console.log(UpdatedPatient);
  };

  const AgeChange = (e) => {
    let value = e.target.value;
    setUpdatedPatient({ ...UpdatedPatient, Age: value });
    console.log(UpdatedPatient);
  };

  const GenderChange = (e) => {
    let value = e.target.value;
    setUpdatedPatient({ ...UpdatedPatient, Gender: value });
    console.log(UpdatedPatient);
  };

  const EmailChange = (e) => {
    let value = e.target.value;
    setUpdatedPatient({ ...UpdatedPatient, Email: value });
    console.log(UpdatedPatient);
  };

  const ContactChange = (e) => {
    let value = e.target.value;
    setUpdatedPatient({ ...UpdatedPatient, Contact: value });
    console.log(UpdatedPatient);
  };

  const updatePost = () => {
    axios.post("http://localhost/receptionistapplication/UpdatePatient.php", UpdatedPatient)
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
        <h1>Edit Patient Data</h1>

        {/* <h2 id="updateName" ></h2> */}
        <input className={classes.inpu} id="updateName" placeholder="Edit Patient Name" onChange={NameChange}/>

        <input className={classes.inpu} id="updateAge" placeholder="Edit Patient Age" onChange={AgeChange}/>

        <input className={classes.inpu} id="updateGender" placeholder="Edit Patient Gender" onChange={GenderChange}/>

        <input className={classes.inpu} id="updateEmail" placeholder="Edit Patient Email" onChange={EmailChange}/>

        <input className={classes.inpu} id="updateContact" placeholder="Edit Patient Contact" onChange={ContactChange}/>
      </form>

      <button type="submit" className={classes.PatBut} onClick={updatePost}>Edit this post</button>

      <button type="submit" className={classes.PatButi} onClick={closeModal}>Cancel</button>

    </div>
  );
};

export default EditPost;
