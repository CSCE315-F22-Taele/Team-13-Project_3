const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));

const cors = require("cors");
const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config();

var cors_proxy = require('cors-anywhere');

const dbConnect = require("./dbConnect");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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



// create
app.post("/addItem", (req, res) => {
  console.log("item type: " + req.body.itemType);
  console.log("item name: " + req.body.itemName);
  console.log("item price: " + req.body.itemPrice);

  const db = dbConnect.getDbConnectInstance();
  try {
    db.addItem(req.body.itemType, req.body.itemName, req.body.itemPrice);
  } catch (error) {
    console.log(error);
  }
});

app.post("/updatePrice", (req, res) => {
  console.log("item type: " + req.body.itemType);
  console.log("item name: " + req.body.itemName);
  console.log("item price: " + req.body.itemPrice);

  const db = dbConnect.getDbConnectInstance();
  try {
    db.updatePrice(req.body.itemType, req.body.itemName, req.body.itemPrice);
  } catch (error) {
    console.log(error);
  }
});

// read
app.post("/viewTable", (req, res) => {
  const db = dbConnect.getDbConnectInstance();
  console.log("body: " + req.body.tableName);
  const result = db.getTableData(String(req.body.tableName));

  result
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
});

app.post('/viewSales', (req, res) => {
  const db = dbConnect.getDbConnectInstance();

  const startDate = req.body.startDate;
  const endDate = req.body.endDate;


  const result = db.getSalesData(startDate, endDate);

  result
  .then(data => res.json({data : data}))
  .catch(err => console.log(err));
});

app.post("/restockItem", (req, res) => {
  console.log("item type: " + req.body.itemType);
  console.log("item name: " + req.body.itemName);
  console.log("item amount: " + req.body.itemAmount);
  const db = dbConnect.getDbConnectInstance();

  try {
    db.restockItem(req.body.itemType, req.body.itemName, req.body.itemAmount);
  } catch (error) {
    console.log(error);
  }
});

// update

app.post("/processOrder", (req, res) => {
  const db = dbConnect.getDbConnectInstance();

  const crust = req.body.crust;
  const sauce = req.body.sauce;
  const cheese = req.body.cheese;
  const drink = req.body.drink; // if none: null
  const toppings = req.body.toppings; // if none: null
  const price = req.body.price;

  try {
    db.processOrder(crust, sauce, cheese, drink, toppings, price);
  } catch (error) {
    console.log(error);
  }
});

/**
 * Outputs to the console the port being used; useful for coders and managers alike.
 * @param {number} port the port number being used
 */
 // app.listen(3000, () => console.log('app is running'));

//  cors_proxy.createServer({
//   originWhitelist: [], // Allow all origins
//   requireHeader: ['origin', 'x-requested-with'],
//   removeHeaders: ['cookie', 'cookie2']
// })

app.listen(3000, () => console.log('app is running'));

