import React from "react";

import logo from "../assets/logo.svg";

  
function Welcome(props) {
  return <h1>Привет, {props.className}</h1>;
}  

const Hero = () => (
  <div className="text-center hero my-5">
    <Welcome name= 'user.name' /> 
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
  </div>
);


export default Hero;
