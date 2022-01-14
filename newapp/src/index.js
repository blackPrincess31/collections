import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';
// import CollectionReducer from "./redux/redusers";
// import thunk from 'redux-thunk';
import { Provider } from "react-redux";

import store from "./store2/store"


// const store = createStore(CollectionReducer, applyMiddleware(thunk));




//  export const store = createStore(reducer);


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


