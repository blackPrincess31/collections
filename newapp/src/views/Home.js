import React, { Fragment } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Hero, Content } from "../components";
import { LoginButton } from "../components/log-btn"

import Auth0ProviderWithHistory from "../auth/auth0-provider-with-history";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <hr />
      <Content />
      <LoginButton />
      

    </Fragment>
  )
}




export default Home;


