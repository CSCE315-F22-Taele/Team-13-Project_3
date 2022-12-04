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

  async getTestData() {
    try {
      const response = await new Promise((resolve, reject) =>{
        const query = "SELECT * FROM cheese";
        // SELECT * FROM crust WHERE id = ?

        pool.query(query /*[id]*/, (err, results) =>{
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
}

module.exports = DbConnect;