import "./Nav.css";
import React from "react";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";


const Navigation = () => {
  return (
    <>
      
      <div className="nav">
        <div className="LOGO"> </div>

        <div className="nav-1">
          <div className="img-1"></div>{" "}
          <h7>Doctor</h7>   
        </div>

        <div className="nav-2">
        <div className="img-2"></div>{" "}
          <h7>Patients</h7>   
          {/* {" "}
          <div className="img-2"></div>{" "}
          <div className="name-2">
            {" "}
            <h7>Patients</h7>{" "}
          </div>{" "} */}
        </div>

        <div className="btn">
          <h3>Log In</h3>
        </div>
      </div>
    </>
  );
};

export default Navigation;
