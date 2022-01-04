import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  // <BrowserRouter>
  //  <Auth0Provider
  //   domain=" dev-kyqugnex.us.auth0.com"
  //   clientId="BSAJZuV3YlBjTchDo9GAPM0ftNt095jv"
  //   redirectUri={window.location.origin}
  // >
  //   <App />
  // </Auth0Provider>
  // </BrowserRouter>,
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


