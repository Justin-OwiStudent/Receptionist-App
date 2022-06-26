import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostItem from '../Modal/PostItem';
import classes from './Appointment.module.css'



const Appointments = () => {

  const [posts, setPosts] = useState();

  const [renderPost, setRenderPost] = useState();

  useEffect(()=>{
    axios.get("http://localhost/receptionistapplication/ReadAppointments.php")
    .then((res)=> {
        let data = res.data;

        let renderPost = data.map((item,index) => <PostItem id={index} patient={item.Patient} doctor={item.Doctor} />);
        
        setPosts(renderPost);   
        setRenderPost(false);
    })
    .catch(err=>{
        console.log(err)
    })

  }, [renderPost]);

//   const postVal = (e) => {
//     let 
//   }



    return(
        <>
        
        <div className={classes.appoint}>
            <h1>Appointments</h1>

            <div className={classes.appointment}>
                
             {posts}
                
                {/* <div className={classes.rowe}>
                    <div className={classes.prof}></div>
                    <h2></h2>
                    <h2></h2>
                    <div className={classes.trash}></div>
                    <div className={classes.edit}></div>
                </div> */}


            </div>
        </div>
     
        </> 
    )
}

export default Appointments;