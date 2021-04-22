import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Surveys" id="basic-nav-dropdown" className="mr-3">
      <NavDropdown.Item href="#create-survey">New Survey</NavDropdown.Item>
      <NavDropdown.Item href="#surveys">View Surveys</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Account" id="basic-nav-dropdown" className="mr-3">
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
    <Nav.Link href="#take-survey">Take A Survey</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/" className="mr-3">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="nav-bar" variant="dark" expand="md">
    <Navbar.Brand href="#">
      <img src='logo-su-white.png'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
