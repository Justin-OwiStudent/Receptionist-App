import React from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: '', 
    password: ''
});

const usernameVal = (e) => {
  const value = e.target.value.trim();
  setInputs({...inputs, username: value});
  


  //modal no user exists
}

const passwordVal = (e) => {
  const value = e.target.value.trim();
  setInputs({...inputs, password: value});
 

  //modal incorrect password
  
    // let input = document.getElementById("pass");
    // let text = document.getElementById("text");
    // input.addEventListener("keyup", function(e) {

    //   if (e.getModifierState("CapsLock")) {
    //     text.style.display = "block";
    //   } else {
    //     text.style.display = "none"
    //   }
    // })
  
}


    const handleSubmit = (e) => {
      e.preventDefault();
    
      console.log(inputs);

      axios.post('http://localhost/receptionistapplication/LoginUser.php', inputs)
              .then(function(response){
               console.log(response);
  
               if(response.data === true){
                  sessionStorage.setItem('activeUser', inputs.username);
                   navigate("/Dashboard");
               } else {
                 console.log('Not working')
               }
  
              });


      // if (inputs.username === "") {
      //   setUsernameError(
      //     <MiniModalLeft message="you must provide a valid Username" />
      //   );
      // } else {
      //   setUsernameError();
      // }
  
      // if (inputs.password === "") {
      //   setPasswordError(
      //     <MiniModalLeft message="you must provide a valid Password" />
      //   );
      // } else {
      //   setPasswordError();
      // }
  
     





    // console.log(inputs);

    //     axios.post('http://localhost:8888/receptionist application/LoginUser.php', inputs)
    //         .then(function(response){
    //          console.log(response);

    //          if(response.data === true){
    //             sessionStorage.setItem('activeUser',inputs.username);
    //              navigate("/App");
    //          }else{
    //            console.log('Not working')
    //          }

    //         });
            
  }



  



//   var input = document.getElementById("pass");
//   var text = document.getElementById("text");
//   input.addEventListener("keyup", function(event) {

//   if (event.getModifierState("CapsLock")) {
//       text.style.display = "block";
//     } else {
//       text.style.display = "none"
//     }

// });

  return (
    <div className={classes.Main}>
      <div className={classes.loginCon}>
        <h1 className={classes.LoginTex}>Login Form</h1>
        <form>
          <input type="text" placeholder="Username" onChange={usernameVal}/>
          <input id="pass" type="password" placeholder="Password" onChange={passwordVal} />
          {/* <p id="text">lelel</p>
          <p className={classes.forgot}>Forgot Password?</p> */}
          <button onClick={handleSubmit} type="submit" className={classes.butt}>Login User</button>
        </form>

        <Link to="/Register">
        <p className={classes.RegText}> Register </p>
        </Link>
        
      </div>
      {/* <div className={classes.imageCon}>

      </div> */}
    </div>
  );
};

export default Login;
