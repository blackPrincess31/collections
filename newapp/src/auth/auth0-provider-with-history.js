import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.AUTH0_AUDIENCE;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;


//метод onRedirectCallback () для обработки события, когда Auth0 перенаправляет пользователей со страницы Auth0 в ваше приложение React
//хук useHistory (), чтобы получить объект истории из React Router 
//метод history.push (), чтобы вернуть пользователей на маршрут, к которому они намеревались получить доступ до аутентификации