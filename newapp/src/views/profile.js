import React from "react";
import { Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { LogoutButton } from "../components/log-btn";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";


const Profile = () => {
  return (
    <Container className="mb-5">

      <ProfilePage />
  
      <h3>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <Nav.Link as={RouterNavLink} exact to="/Collections" activeClassName="router-link-exact-active">
          Collections
        </Nav.Link>
      </h3>
      
      <LogoutButton />
    </Container>
  );
};

const ProfilePage = withAuthenticationRequired(
  () => {
    // const { user } = useAuth0()
    const { user, isAuthenticated } = useAuth0();
    return (
      <>
        <h1>Profile Page</h1>
        <div className='profile'>
          <img src={user?.picture} alt={user?.name} />
            <h2>{user?.nickname}</h2>
            <p>{user?.email}</p>
        </div>
      </>
    )
  },

  {
    returnTo:
      '/profile',
  }
)



export { Profile, ProfilePage };