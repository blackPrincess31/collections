const { React } = require('react')
const { useAuth0 } = require('@auth0/auth0-react')

// const domain = process.env.REACT_APP_AUTHO_DOMAIN ;
// const clientID = process.env.REACT_APP_AUTHO_CLIENT_ID ;
// const audience = process.env.AUTH0_AUDIENCE;

const GetTokenButton = () => {
  const { getAccessTokenSilently } = useAuth0();

  return (
    <button
      className="btn btn-danger btn-block"
      onClick={async () => {
        try {
          var token = await getAccessTokenSilently({
            audience: 'https://dev-kyqugnex.us.auth0.com/api/v2/',
            scope: 'read:posts;',
          });
          console.log(token);
        } catch (e) {
          console.error(e);
        }
      }
      }
    >
      GetTokenButton
    </button>
  );
};

export { GetTokenButton }

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://dev-kyqugnex.us.auth0.com/api/v2/users',
//   // params: {q: 'email:"hello@example.by"', search_engine: 'v3'},
//   headers: {authorization: 'Bearer ${token}'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// var axios = require("axios").default;

// var options = {
//   method: 'PATCH',
//   url: 'https://dev-kyqugnex.us.auth0.com/api/v2/resource-servers/61d434e4ee332201e6ac68eb',
//   headers: {
//     'content-type': 'application/json',
//     authorization: 'Bearer MGMT_API_ACCESS_TOKEN',
//     'cache-control': 'no-cache'
//   },
//   data: {
//     scopes: [
//       {value: 'PERMISSION_NAME', description: 'PERMISSION_DESC'},
//       {value: 'PERMISSION_NAME', description: 'PERMISSION_DESC'}
//     ]
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// app.get("/api/public-message", (req, res) => {
//   res.send({
//     msg: "The API doesn't require an access token to share this message.",
//   });
// });

// app.get("/api/private-message", checkJwt, (req, res) => {
//   res.send({
//     msg: "The API successfully validated your access token.",
//   });
// });

// app.listen(3000, () => console.log('API is running on http://localhost:3000/home'));