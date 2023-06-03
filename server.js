const express = require("express");
const { MongoClient } = require('mongodb');
// import models here once made

const app = express();
const port = 3001;



const client = new MongoClient(connectionStringURI);

