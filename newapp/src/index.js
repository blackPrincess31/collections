import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom";


import { Provider } from "react-redux";

import store from "./store2/store"


ReactDOM.render(

  <Provider store ={store}>
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


