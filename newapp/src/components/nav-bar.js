import React from "react";
import { BrowserRouter, NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const MainNav = () => (
  <BrowserRouter>
    <Nav className="mr-auto">
      <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
      >
        Home
      </Nav.Link>
      <Nav.Link
        as={RouterNavLink}
        to="/profile"
        exact
        activeClassName="router-link-exact-active"
      >
        Profile
      </Nav.Link>
      <Nav.Link
        as={RouterNavLink}
        to="/external-api"
        exact
        activeClassName="router-link-exact-active"
      >
        External API
      </Nav.Link>
    </Nav>
  </BrowserRouter>

);

const AuthNav = () => null;

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <BrowserRouter>
          <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        </BrowserRouter>
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};


export default NavBar;

