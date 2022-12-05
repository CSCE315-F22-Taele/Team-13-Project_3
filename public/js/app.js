const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { response } = require('express');
dotenv.config();

const dbConnect = require('./dbConnect')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// create
app.post('/insert', (req, res) => {
    console.log(request.body);
});

// read
app.post('/viewTable', (req, res) =>{
    const db = dbConnect.getDbConnectInstance();
    console.log("body: " + req.body.tableName);
    const result = db.getTableData(String(req.body.tableName));
    
    result
    .then(data => res.json({data : data}))
    .catch(err => console.log(err));
    
});

// update


// delete

app.listen(process.env.PORT, () => console.log('app is running'));