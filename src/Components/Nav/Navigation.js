import "./Nav.css";
import { createRoot } from 'react-dom/client';
import React, { useState, Offcanvas } from "react";
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'

import Navbar from 'react-bootstrap/Navbar'
import { Container, Form, FormControl, Nav } from "react-bootstrap";
import { Button } from "bootstrap";




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



      <div className="nav">
        <div className="LOGO" > </div>

<a>

<div className="nav-1">
          <div className="img-1"></div>{" "}
          <h7>Doctor</h7>
        </div>

</a>
        

        <div className="nav-2">
          <div className="img-2"></div>{" "}
          <h7>Patients</h7>

        </div>

        <div className="btn">
          <h3>Log In</h3>
        </div>
      </div>
    </>
  );
};

export default Navigation;
