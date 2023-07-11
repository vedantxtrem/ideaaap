const express = require('express');

const serverconfig = require('./config/server.config');

const mongoose = require('mongoose');

const dbconfig = require('./config/db.config');

const app = express();
/*
    logic to connect mongodb and create admin user 
    Need to help mongo db up and running in your local host
*/
mongoose.connect(dbconfig.DB_URL);
const db = mongoose.connection ;

db.on("error",()=>{
    console.log("Error while connecting to the data base");
});

db.once("open",()=>{
    console.log("data base are connected");
})

app.listen(serverconfig.PORT,()=>{
    console.log(`server started on port number ${serverconfig.PORT}`);
});