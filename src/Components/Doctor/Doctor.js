import React from "react";
import Navigation from "../Nav/Navigation";
import classes from "./Doctor.module.css";

const Doctor = () => {

  
  return (
    <>
    <Navigation></Navigation>

      <div className={classes.heroImage}>
        <div className={classes.HeroText}>
          <h1>Welcome logged in recep</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
        <div className={classes.Image}></div>
      </div>

      <div className={classes.carousel}>

        <div className={classes.card}>
        <div className={classes.Icon}></div>
          <div className={classes.ProfilePic}></div>
          <h2>Doc Name</h2>
          <h3>Type</h3>
          <h3>Available</h3>
        </div>

        <div className={classes.card}>
        <div className={classes.Icon}></div>
          <div className={classes.ProfilePic}></div>
          <h2>Doc Name</h2>
          <h3>Type</h3>
          <h3>Available</h3>
        </div>{" "}

        <div className={classes.card}>
        <div className={classes.Icon}></div>
          <div className={classes.ProfilePic}></div>
          <h2>Doc Name</h2>
          <h3>Type</h3>
          <h3>Available</h3>
        </div>{" "}

        
        <div className={classes.card}>
        <div className={classes.Icon}></div>
          <div className={classes.ProfilePic}></div>
          <h2>Doc Name</h2>
          <h3>Type</h3>
          <h3>Available</h3>
        </div>{" "}


        {/* <div className={classes.add}>
          <div className={classes.plus}></div>
        </div> */}
      </div>

      <div className={classes.new}>
        
        <div className={classes.DocImg} ></div>
          <input placeholder="Name & Surname"></input>
          <input placeholder="Email"></input>
          <input placeholder="Contact Number"></input>
          <input placeholder=" "></input>
          {/* <input placeholder="Name & Surname"></input> */}

          <button className={classes.bott}> Add Doctor</button>

      </div>

      

      {/* <div className="Doc-Card">
        <div className="profile-Card">
          <div className="profile"> </div>
          <div className="details">
            <h2>Doctor Name</h2>

            <h3>Doctor details</h3>
            <h3>Doctor details</h3>
          </div>
        </div>

        <div className="block">
          <div className="block-1">
            <div className="doc-patients">
              <h2>patients</h2>

              <div className="individual-patient">
                <h6>patient name: {}</h6>
                <h6>patient number: {}</h6>
                <h6>patient condition: {}</h6>
              </div>
            </div>
          </div>

          <div className="block-2">
            <div className="doc-appointments">
              <h2>appointments</h2>

              <div className="appointments">
                <h6>patient name: {}</h6>
                <h6>Room: {}</h6>
                <h6>Time: {}</h6>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Doctor;
