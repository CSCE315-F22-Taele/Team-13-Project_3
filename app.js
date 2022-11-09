const express = require("express");
const { Pool } = require('pg');
const dotenv = require('dotenv').config();
const app = express();


app.use(express.static(__dirname + '/public'));
const port = 3000;
// app.get("/", (req, res) => {
//   res.send("world!");
// });

// Create pool
const pool = new Pool({
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: process.env.PSQL_DATABASE,
  password: process.env.PSQL_PASSWORD,
  port: process.env.PSQL_PORT,
  ssl: {rejectUnauthorized: false}
});

process.on('SIGINT', function() {
  pool.end();
  console.log('Application successfully shutdown');
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
