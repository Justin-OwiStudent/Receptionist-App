import { createRoot } from "react-dom/client";
import React, { useState, Offcanvas } from "react";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import classes from "./Nav.module.css";

import Navbar from "react-bootstrap/Navbar";
import { Container, Form, FormControl, Nav } from "react-bootstrap";
import { Button } from "bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))} */}

      {/* <div className="nav">
        <div className="LOGO"> </div>

        <Link to="Doctor">
          <div className="nav-1">
            <div className="img-1"></div> <h7>Doctor</h7>
          </div>
        </Link>

        <Link to="Patient">
          <div className="nav-2">
            <div className="img-2"></div> <h7>Patients</h7>
          </div>
        </Link>

        <div className="btn">
          <h3>Log In</h3>
        </div>
      </div> */}

      <div className={classes.nav}>
        <Link to="App">
          <div className={classes.LOGO}></div>
        </Link>

        <Link to="Doctor">
          <div className={classes.navItem}>
            <div className={classes.smaller}>
              <div className={classes.img1}></div>
              <div className={classes.text1}>Doctor</div>
            </div>
          </div>
        </Link>

        <Link to="Patient">
          <div className={classes.navItem}>
            <div className={classes.smaller}>
              <div className={classes.img2}></div>
              <div className={classes.text2}>Patients</div>
            </div>
          </div>
        </Link>

        <div className={classes.profile}>
          <div className={classes.pfp}></div>
          <h5>Logged in receptionist</h5>
        </div>

        <Link to="Login">
          <div className={classes.edit}>
            <div className={classes.textI}>
              <p> Logout </p>
            </div>
          </div>
        </Link>

      </div>
    </>
  );
};

export default Navigation;
