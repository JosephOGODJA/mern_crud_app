// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}


// Import dependencies
const express = require('express')
const connectToDB = require("./config/connectToDB");
// Create an Express app
const app = express();

// Connect to database
connectToDB();

// Routing
app.get('/', (req, res) =>{
    res.json({hello: "world"});
});

// Start our server
app.listen(process.env.PORT);