import React, { Fragment } from "react";
import {useAuth0 } from '@auth0/auth0-react';
import { Hero, Content } from "../components";
import {LoginButton} from "../components/log-btn"


const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <Content />

    <button onClick={LoginButton}> log In </button>
    
    <button onClick={SignupButton}>Sign Up</button>
   
  </Fragment>
   

);


const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    
          loginWithRedirect
        ({
          
          screen_hint: 'signup',
        })
  
   
  );
};
 






export default Home;


