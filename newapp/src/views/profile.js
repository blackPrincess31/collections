import React from "react";
import { Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { LogoutButton } from "../components/log-btn";

const Profile = () => {
  return (
    <Container className="mb-5">
      <ProfilePage />
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
          <div>
            <h2>{user?.nickname}</h2>
            <p>{user?.email}</p>
          </div>
          <h2>----------------</h2>
          
          <p>{user.sub}</p>
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