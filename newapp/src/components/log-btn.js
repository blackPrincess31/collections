import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css"

// var webAuth = new auth0.WebAuth({
//   domain:       process.env.REACT_APP_AUTHO_DOMAIN ,
//   clientID:     process.env.REACT_APP_AUTHO_CLIENT_ID ,
//   audience:     process.env.AUTH0_AUDIENCE,
//   redirectUri:  'http://localhost:3000/profile', 
//   scope: 'read',
//   responseType: 'token id_token',
// });



const LoginButton = () => {
  const {loginWithPopup} = useAuth0();

return<Button onClick={() =>loginWithPopup()}>Log In</Button>;

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


export {LoginButton, LogoutButton};
