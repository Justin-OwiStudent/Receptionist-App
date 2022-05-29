import React from "react";
import "./Doctor.css";

const Doctor = () => {
  return (
    <>
      <div className="Doc-Card">

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

                <div className="appointment">
                    <h6>patient name: {}</h6> 
                    <h6>Room: {}</h6> 
                    <h6>Time: {}</h6> 
                </div>

            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Doctor;
