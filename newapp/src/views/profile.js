import React from "react";
import { Container } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  return (
    <Container className="mb-5">
      <h1>Profile</h1>
      <LogoutButton/>
    </Container>
  );
};


const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export {Profile, LogoutButton};