const express = require("express");
const { Pool, Connection } = require('pg');
const dotenv = require('dotenv').config();
const app = express();
let instance = null;

const pool = new Pool({
    user: 'csce315_912_li',
    host: 'csce-315-db.engr.tamu.edu',
    database: 'csce315_912_13',
    password: '1234',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

/**
 * Attempts to connect to the database
 * @param  {} err possble error upon connection to database
 */
pool.connect((err) =>{
    if (err) {
        alert(err);
    } else{
        console.log('db has connected');
    }
});

class DbConnect {
  /**
   * Get the db connection
   * @returns instance of database connection
   */
  static getDbConnectInstance() {
    return instance ? instance : new DbConnect();
  }
  /**
   * Manager function: adds item to database
   * @param  {*} type
   * @param  {*} name
   * @param  {*} price
   */
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
  /**
   * Manager Function: updates the price of an item
   * @param  {*} type
   * @param  {*} name
   * @param  {*} price
   */
  async updatePrice(type, name, price){
    try{
      console.log(type);
      console.log(name);
      console.log(price);
      
      var query = "";
      if (price == "N/A" || name == "N/A") {
        console.log("No price or name given");
        return;
      } else {
        query = " UPDATE " + type + " SET price = '" + price + "' WHERE name = '" + name + "'";
      }

      console.log("query: "+query);
      pool.query(query);
    }
    catch(error) {
      console.log(error);
    }
  }

  async restockItem(type, name, amount) {
    try{
      console.log(type);
      console.log(name);
      console.log(amount);

      if (type == "" || name == "" || amount == "" ) {
        console.log("Field left blank");
        return;
      }

      var query = "UPDATE " + type + " SET quantity = quantity + " + amount + " WHERE name = " + name; 

      console.log("query: "+query);
      pool.query(query);
    }
    catch(error) {
      console.log(error);
    }
  }

  /**
   * Manager Function: Gets all data from a database table
   * @param  {*} tableName
   */
  async getTableData(tableName) {
    try {
      const response = await new Promise((resolve, reject) =>{
      const query = 'SELECT * FROM ' + tableName;
      console.log(query);
      
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
        console.log(query);
        pool.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      console.log(response);
      
      return response;
      
    } catch (error) {
      console.log(error);
    }
  }

  async processOrder(crust, sauce, cheese, drink, toppings, price){

    var query = "";

    console.log("here");

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

      if (price != null){

        console.log()
        const date = new Date();

        var day = date.getDate();
        day = '0' + day;
        var month = date.getMonth() + 1;
        
        var year = date.getFullYear();

        var currentDate = `${year}-${month}-${day}`;
        console.log(currentDate);

        //alert(currentDate);

        query = "insert into order_history(price, date) values ("+ price+", '"+currentDate+"')";
        pool.query(query);
        console.log(query);
      }
      
    } catch (error) {
      console.log(error);
    }

  }
}


module.exports = DbConnect;
