
import React, { useState, useEffect } from "react";
import classes from "./Nav.module.css";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

  const navigate = useNavigate();

  const [logged, setLogged] = useState();

  useEffect(()=>{
    let personName = sessionStorage.getItem("activeUser");
    setLogged(personName);
  }, [])

  const setLogout = () => {
    sessionStorage.clear()
    Navigate('/');
  }

  return (
    <>
      <div className={classes.nav}>
        <Link to="/Dashboard">
          <div className={classes.LOGO}></div>
        </Link>

        <Link to="/Doctor">
          <div className={classes.navItem}>
            <div className={classes.smaller}>
              <div className={classes.img1}></div>
              <div className={classes.text1}>Doctors</div>
            </div>
          </div>
        </Link>

        <Link to="/Patient">
          <div className={classes.navItem}>
            <div className={classes.smaller}>
              <div className={classes.img2}></div>
              <div className={classes.text2}>Patients</div>
            </div>
          </div>
        </Link>

        <div className={classes.profile}>
          <div className={classes.pfp}></div>
          <h5>{logged}</h5>
        </div>

        <Link to="/Login">
          <div className={classes.edit}>
            <div className={classes.textI}>
              <p onClick={setLogout}> Logout </p>
            </div>
          </div>
        </Link>
        <Outlet />
      </div>
      
    </>
  );
};

export default Navigation;
