import React, { Fragment } from "react";
//import {useAuth0 } from '@auth0/auth0-react';
import { Hero, Content } from "../components";
//import auth0 from '@auth0/auth0-spa-js';
import LoginButton from "../components/log-btn";


const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <Content />
    <button onClick={LoginButton}> log In </button>
    
    {/* <button onClick={SignupButton}>Sign Up</button> */}
   
  </Fragment>
   

);


// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();
//   return (
    
//       loginWithRedirect()
    
//   );
// };

// const SignupButton = () => {
//   const { loginWithRedirect } = useAuth0();
//   return (
    
//           loginWithRedirect
//         ({
          
//           screen_hint: 'signup',
//         })
  
   
//   );
// };
 


export default Home;


