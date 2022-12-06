const express = require("express");
const { Pool, Connection } = require('pg');
const dotenv = require('dotenv').config();
const app = express();
let instance = null;

const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});

pool.connect((err) =>{
    if (err) {
        console.log(err.message);
    } else{
        console.log('db has connected');
    }
});

class DbConnect {
  static getDbConnectInstance() {
    return instance ? instance : new DbConnect();
  }

  async addItem(type, name, price){
    try {
      /* Need separate functions for price and not prices bc different table columns */
      console.log(type);
      console.log(name);
      console.log(price);

      var query = "";
      if (price == "N/A"){
        console.log("not pizza or drink");
        query = "INSERT INTO " + type + " (name, quantity) VALUES ('"+name+"', 999)";
      } else if (type == "pizza") {
        query = "INSERT INTO " + type + "(type, numtoppings, baseprice) VALUES ('"+name+"', 4, '"+price+"')";
      } else {
        // type = drink
        query = "INSERT INTO " + type + "(name, quantity, price) VALUES ('"+name+"', 999, '"+price+"')";
      } 

      console.log("query: "+query);

      pool.query(query);
      /*
        CREATE SEQUENCE cheese_seq0 START WITH 3;
        ALTER TABLE cheese ALTER COLUMN id SET DEFAULT nextval('cheese_seq0');
      */
      
      
    } catch (error) {
      console.log(error);
    }
  }


  async getTableData(tableName) {
    try {
      const response = await new Promise((resolve, reject) =>{
      const query = 'SELECT * FROM ' + tableName;
      
        pool.query(query, (err, results) =>{
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
    
      return response;
      
    } catch (error) {
      console.log(error);
    }
  }

  async getSalesData(startDate, endDate){
    try {
      const response = await new Promise((resolve, reject) =>{
        const query = "SELECT * FROM order_history WHERE date BETWEEN '"+startDate+"' and '"+endDate+"'";

        pool.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      return response;
      
    } catch (error) {
      console.log(error);
    }
  }

  async processOrder(crust, sauce, cheese, drink, toppings){

    var query = "";


    try {
      // crust
      console.log("crust: " + crust);
      console.log("cheese: " + cheese);
      console.log("sauce: " + sauce);
      console.log("drink: " + drink);
      console.log("toppings: " + toppings);

      query = "UPDATE crust SET quantity = quantity - 1 WHERE id = " + crust;
      pool.query(query);

      query = "UPDATE sauce SET quantity = quantity - 1 WHERE id = " + sauce;
      pool.query(query);

      query = "UPDATE cheese SET quantity = quantity - 1 WHERE id = " + cheese;
      pool.query(query);

      if (drink != "None"){
        query = "UPDATE drinks SET quantity = quantity - 1 WHERE id = " + drink;
        pool.query(query);
      }
      
      if (toppings != null){
        // comma separate values from string

        const toppingsArray = toppings.split(",");

        toppingsArray.forEach(topping => {
          query = "UPDATE toppings SET quantity = quantity - 1 WHERE id = " + topping;
          pool.query(query);
        });
      }
      
    } catch (error) {
      console.log(error);
    }

  }
}


module.exports = DbConnect;