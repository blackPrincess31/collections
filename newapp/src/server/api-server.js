const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { resolve } = require("path");


require("dotenv").config({
  path: resolve(process.cwd(), "src", "server", ".env"),
});

const app = express();


const domain = process.env.REACT_APP_AUTHO_DOMAIN ;
const clientID = process.env.REACT_APP_AUTHO_CLIENT_ID ;
const audience = process.env.AUTH0_AUDIENCE;



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

app.get("/api/public-message", (req, res) => {
  res.send({
    msg: "The API doesn't require an access token to share this message.",
  });
});

app.get("/api/private-message", checkJwt, (req, res) => {
  res.send({
    msg: "The API successfully validated your access token.",
  });
});

app.listen(3000, () => console.log('API is running on http://localhost:3000/home'));