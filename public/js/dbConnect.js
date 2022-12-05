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
}


module.exports = DbConnect;