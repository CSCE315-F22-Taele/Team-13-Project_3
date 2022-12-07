const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const port = 3000;
// app.get("/", (req, res) => {
//   res.send("world!");
// });

// Import the axios library, to make HTTP requests
const axios = require("axios");

// This is the client ID and client secret that you obtained
// while registering the application
const clientID = "3758f6d1f76b25630586";
const clientSecret = "8385ae3163f5147c751c9e2022a3c583da62b973";

// Declare the redirect route
/**
 * Gets the redirect route for the OAuth API
 * @param  {string} /oauth/redirect
 * @param  {*} req the request
 * @param  {*} res the result
 */
app.get("/oauth/redirect", (req, res) => {
  // The req.query object has the query params that
  // were sent to this route. We want the `code` param
  const requestToken = req.query.code;
  axios({
    // make a POST request
    method: "post",
    // to the Github authentication API, with the client ID, client secret
    // and request token
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSOn
    headers: {
      accept: "application/json",
    },
  }).then((response) => {
    // Once we get the response, extract the access token from
    // the response body
    const accessToken = response.data.access_token;
    // redirect the user to the welcome page, along with the access token
    res.redirect(`/welcome.html?access_token=${accessToken}`);
  });
});

/**
 * Outputs to the console the port being used; useful for coders and managers alike.
 * @param {number} port the port number being used
 */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
