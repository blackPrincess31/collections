import React from "react";
import { BrowserRouter,Switch ,Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, Footer } from "./components";

import { Home } from "./views";
import { Profile } from "./views";
import {Collections} from "./views/Collections";

import "./App.css";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const App = () => {
  return (
    <Auth0ProviderWithHistory>
    <div id="app" className="d-flex flex-column h-100">
      <Container className="flex-grow-1 mt-5">
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/Collections" component={Collections} />
          </Switch> 
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
    </Auth0ProviderWithHistory>
  );
};

export default App;

