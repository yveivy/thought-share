const express = require('express');
const { MongoClient } = require('mongodb');
const data = require('./models/data');
const mongoose = require("mongoose")
const dotenv = require("dotenv")


dotenv.config();
process.env.MONGOLAB_URI;

const connectionStringURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@classactivities.fq7zpnf.mongodb.net/thoughtshare`



module.exports = mongoose.connection;


