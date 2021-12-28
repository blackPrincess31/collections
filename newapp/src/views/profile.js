import React from "react";
import { Container } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  return (
    <Container className="mb-5">
      <h1>Profile</h1>
      <p>
        You use will use an ID Token to get the profile information of a
        logged-in user. <strong>This route should be private</strong>.
      </p>
      <button onClick={LogoutButton}>logout</button> 
    </Container>
  );
};


const LogoutButton = () =>
 {
  const { logout } = useAuth0();
  return (
        logout({
          returnTo: window.location.origin,
        })
  );
};

export default Profile;