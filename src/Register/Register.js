import React from "react"
import { Link } from "react-router-dom";
import classes from './Register.module.css'



const Register = () => {
    return(
        <>

            <div className={classes.MainI}>
            <div className={classes.registerCon}>
              <h1>Register Form</h1>
              <form>
                <input name="names" type="text" placeholder="Name & Surname" />
                <input name="email" type="text" placeholder="Your Email" />
                <input name="contact" type="number" placeholder="Contact" />
                <input name="username" type="text" placeholder="Username" />
                <input name="password" type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit" className={classes.but}>Register User</button>
              </form>

              <Link to="/Login">
              <p className={classes.Log}> Login </p>

              </Link>
              
            </div>
            </div>

        </>
    )
}

export default Register;