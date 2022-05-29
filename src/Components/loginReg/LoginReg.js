import React from "react";
import classes from './LoginReg.module.css'


const LoginReg = () => {
  return (
    <>
      <div className={classes.bigBlock}>
        <div className={classes.Block}>
          
          <div className={classes.left}>

            <div className={classes.loginCon}>
              <h1>Login Form</h1>
              <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login User</button>
              </form>
            </div>
          </div>

          <div className={classes.right}>
            <div className={classes.registerCon}>
              <h1>Register Form</h1>
              <form>
                <input name="names" type="text" placeholder="Name & Surname" />
                <input name="email" type="text" placeholder="Your Email" />
                <input name="contact" type="number" placeholder="Contact" />
                <input name="username" type="text" placeholder="Username" />
                <input name="password" type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Register User</button>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      {/* <div className="Main">
        <h1>Sign in</h1>
        <div className="login">
          <div className="inside">
            <label className="lab1">
              {" "}
              <h4> Username </h4>{" "}
            </label>
            <br></br>
            <input className="inp1"></input>
            <br></br>
            <br></br>
            <label className="lab2">
              {" "}
              <h4> Password </h4>{" "}
            </label>
            <br></br>
            <input className="inp2"></input>

            <div className="log">
              <button className="login-btn"> Login </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LoginReg;
