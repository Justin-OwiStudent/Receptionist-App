import React from "react";
import './Login.css'

const Login = () => {
    return(
        
        <div>
        <div className="loginCon">
              <h1>Login Form</h1>
              <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login User</button>
              </form>
            </div>
        </div>
        
    )
}

export default Login;