import React from "react";
import { BrowserRouter, Switch, Route, NavLink, NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";



const MainNav = () => (

  <Nav className ="mr-auto" >
    <Nav.Link as={RouterNavLink} exact to="/" activeClassName="router-link-exact-active">
      Home
    </Nav.Link>
    <Nav.Link as={RouterNavLink} exact to="/profile" activeClassName="router-link-exact-active">
      Profile
    </Nav.Link>
    <Nav.Link as={RouterNavLink} exact to="/external-api" activeClassName="router-link-exact-active">
      External API
    </Nav.Link>
  </Nav>

);

const AuthNav = () => null;

const NavBar = () => {
  return (
    <Navbar  bg="light">
      <Container>

        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <Nav />
        <MainNav />
        <AuthNav />

      </Container>
    </Navbar>
  );
};


export default NavBar;

