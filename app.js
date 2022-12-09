// const express = require('express');
// const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { response } = require('express');
// dotenv.config();

// const dbConnect = require('./dbConnect')

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended : false}));

// // create
// app.post('/addItem', (req, res) => {
//     console.log("item type: " + req.body.itemType);
//     console.log("item name: " + req.body.itemName);
//     console.log("item price: " + req.body.itemPrice);

//     const db = dbConnect.getDbConnectInstance();
//     try {
//         db.addItem(req.body.itemType, req.body.itemName, req.body.itemPrice);
//     } catch (error) {
//         console.log(error);
//     }
    
// });

// app.post('/updatePrice', (req, res) => {
//     console.log("item type: " + req.body.itemType);
//     console.log("item name: " + req.body.itemName);
//     console.log("item price: " + req.body.itemPrice);

//     const db = dbConnect.getDbConnectInstance();
//     try {
//         db.updatePrice(req.body.itemType, req.body.itemName, req.body.itemPrice);
//     } catch (error) {
//         console.log(error);
//     }
// });

// // read
// app.post('/viewTable', (req, res) =>{
//     const db = dbConnect.getDbConnectInstance();
//     console.log("body: " + req.body.tableName);
//     const result = db.getTableData(String(req.body.tableName));
    
//     result
//     .then(data => res.json({data : data}))
//     .catch(err => console.log(err));
    
// });

// app.post('/viewSales', (req, res) => {
//     const db = dbConnect.getDbConnectInstance();

//     const startDate = req.body.startDate;
//     const endDate = req.body.endDate;


//     const result = db.getSalesData(startDate, endDate);

//     result
//     .then(data => res.json({data : data}))
//     .catch(err => console.log(error));
// })

// app.post('/restockItem', (req, res) =>{
    
//     console.log("item type: " + req.body.itemType);
//     console.log("item name: " + req.body.itemName);
//     console.log("item amount: " + req.body.itemAmount);
//     const db = dbConnect.getDbConnectInstance();

//     try {
//         db.restockItem(req.body.itemType, req.body.itemName, req.body.itemAmount);
//     } catch (error) {
//         console.log(error);
//     }

// });

// // update

// app.post('/processOrder', (req, res) =>{
//     const db = dbConnect.getDbConnectInstance();

//     const crust = req.body.crust;
//     const sauce = req.body.sauce;
//     const cheese = req.body.cheese;
//     const drink = req.body.drink;      // if none: null
//     const toppings = req.body.toppings; // if none: null

//     try {
//         db.processOrder(crust, sauce, cheese, drink, toppings);
//     } catch (error) {
//         console.log(error);
//     }
    
// });


// // delete

// app.listen(3000, () => console.log('app is running'));
