import axios from "axios";
import React, { useEffect, useState } from "react";
import EditDoc from "./EditDoc";
import classes from "./Modal.module.css";

const DocCard = (props) => {

  const [modal, setModal] = useState();

  const editPost = () => {
    setModal(<EditDoc upRender={props.rerender} rerender={setModal} originalName={props.NameSurname} originalAge={props.Age} originalEmail={props.Email} originalContact={props.Contact} id={props.uniqueId} />)
  }

  const [deleteId, setDeleteId] = useState('');
  useEffect(() => {
    setDeleteId(props.uniqueId)
  }, [props.uniqueId])


  const deletePost = () => {
    if (window.confirm("Are you sure you want to delete this Doctor?") == true) {


      axios.post('http://localhost/receptionistapplication/DeleteDoctor.php', { id: deleteId })
        .then((res) => {
          let data = res.data;
          console.log(data);
          props.rerender(true);
        });

    } else {
      console.log("The Doctor was not Deleted")
    }

  }



  return (
    <div>
      {modal}
      <div className={classes.PatientCard}>

        <h2>{props.NameSurname} </h2>

        <div className={classes.ProfImage}></div>

        <h3>{props.Age}</h3>

        <h3>{props.Email}</h3>

        <h3>{props.Contact}</h3>

        <div className={classes.trashi} onClick={deletePost} > </div>
        <div className={classes.editi} onClick={editPost}></div>

      </div>
    </div>
  );
};

export default DocCard;
