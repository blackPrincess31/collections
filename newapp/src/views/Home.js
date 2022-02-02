import React, { Fragment } from "react";
import { Hero} from "../components";
import { LoginButton } from "../components/log-btn"


import Auth0ProviderWithHistory from "../auth/auth0-provider-with-history";


const Home = () => {
  return (
    <Fragment>
      <Hero />
      <hr />
      <LoginButton />
    </Fragment>
  )
}





export default Home;


