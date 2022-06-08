import React from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.loginCon}>
        <h1 className={classes.LoginTex}>Login Form</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <p className={classes.forgot}>Forgot Password?</p>
          <button type="submit" className={classes.butt}>Login User</button>
        </form>

        <Link to="/Register">
        <p className={classes.RegText}> Register </p>

        </Link>
        


      </div>
    </div>
  );
};

export default Login;
