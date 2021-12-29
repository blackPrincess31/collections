import React from "react";
import { BrowserRouter,Switch ,Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, Footer } from "./components";

import { Home } from "./views";
import { Profile } from "./views";
import ExternalApi from "./views/external-app";

import "./App.css";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Container className="flex-grow-1 mt-5">
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch> 
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;

