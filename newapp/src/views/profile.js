import React from "react";
import { Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { LogoutButton } from "../components/log-btn";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";



const Profile = () => {
  return (
    <Container className = "md5">
      <ProfilePage />
      <LogoutButton />
    </Container>
  );
};

const ProfilePage = withAuthenticationRequired(
  () => {
    const { user} = useAuth0();
    return (
      <>
        <div className = "md3" class="row">

          <div className='profile' class="text-center" >
            <img src={user?.picture} alt={user?.name} class = "rounded-circle" />
            <h3> My nickname: {user?.nickname}</h3>
            <p> My email: {user?.email}</p>
            <h3>
              <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
              <Nav.Link as={RouterNavLink} exact to="/Collections" activeClassName="router-link-exact-active">
                Collections
              </Nav.Link>
            </h3>
          </div>
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