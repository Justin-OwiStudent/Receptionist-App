import React, { useState, useEffect } from "react";
import classes from "./Nav.module.css";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navigation = () => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState();

  const [renderImage, setRenderImage] = useState();

  useEffect(() => {
    let personName = sessionStorage.getItem("activeUser");
    setLogged(personName);

    let userProfile = { activeUser: personName };

    axios
      .post(
        "http://localhost/receptionistapplication/readProfile.php",
        userProfile
      )
      .then((res) => {
        let data = res.data;
        let source = data[0].imgPath;
        let renderpath = "http://localhost/receptionistapplication/" + source;
        setRenderImage(renderpath);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setLogout = () => {
    sessionStorage.clear();
    Navigate("/");
  };

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
          <div className={classes.pfp} src={renderImage}></div>
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
