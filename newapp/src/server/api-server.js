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


// Initialize app
var webAuth = new auth0.WebAuth({
  domain:     'domain',
  clientID:     'clientID',
});

// Calculate URL to redirect to
var url = webAuth.client.buildAuthorizeUrl({
  clientID: 'clientID', // string
  responseType: 'token', // code or token
  redirectUri: 'http://localhost:3000/profile',
  scope: 'openid profile email',
  state: 'YOUR_STATE',
});

// Redirect to url
// ...

// const port = process.env.API_PORT;
// const appOrigin = process.env.APP_ORIGIN;
// const audience = process.env.AUTH0_AUDIENCE;
// const issuer = process.env.AUTH0_ISSUER;

// if (!issuer || !audience) {
//   throw new Error("Please make sure that .env is in place and populated");
// }

// app.use(morgan("dev"));
// app.use(helmet());
// app.use(cors({ origin: appOrigin }));

// const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `${issuer}.well-known/jwks.json`,
//   }),

//   audience: audience,
//   issuer: issuer,
//   algorithms: ["RS256"],
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

app.listen(3000, () => console.log('API is running on http://localhost:3000/home'));