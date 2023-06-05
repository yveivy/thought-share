const express = require('express');
const { connect, connection } = require('mongoose');
const mongoose = require("mongoose")
// const dotenv = require("dotenv")


// dotenv.config();



// const connectionString =  
//   process.env.MONGOLAB_URI || `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@classactivities.fq7zpnf.mongodb.net/T`;

// connect(connectionString);

mongoose.connect(`mongodb+srv://yveivy:Yevette1@classactivities.fq7zpnf.mongodb.net/thoughtshareDB`)


module.exports = mongoose.connection;


