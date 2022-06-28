import axios from "axios";
import React, { useEffect, useState } from "react";
import EditAppoint from "./EditAppoint";
import EditPost from "./EditPost";
import classes from "./Modal.module.css";

const PostItem = (props) => {
  const [modal, setModal] = useState();

  const editPost = () => {
    setModal(
      <EditAppoint
        upRender={props.rerender}
        rerender={setModal}
        OriginalTime={props.AppointmentTime}
        originalPatient={props.patient}
        originalDoctor={props.Doctor}
        id={props.uniqueId}
      />
    );
  };

  const [ deleteId, setDeleteId ] = useState('');
  useEffect(() => {
      setDeleteId(props.uniqueId)
  }, [props.uniqueId])


  const deletePost = () => {
    if (window.confirm("Are you sure you want to delete this Appointment?") == true) {

      axios.post("http://localhost/receptionistapplication/DeleteAppoint.php", {id: deleteId})
      .then((res) => {
          let data = res.data;
          console.log(data);

          props.rerender(true);
        });
    } else {
      console.log("The Appointment was not Deleted");
    }
  };

  return (
    <div>
      {modal}
      <div className={classes.rowe} id={props.key}>
        <div className={classes.prof}></div>
        <h2 className="patient">{props.patient}</h2>
        <h2 className="doctor">{props.doctor}</h2>
        <h2 className="time">{props.time}</h2>

        <div className={classes.trash} onClick={deletePost}></div>
        <div className={classes.edit} onClick={editPost}></div>
      </div>
    </div>
  );
};

export default PostItem;
