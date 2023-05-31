const express = require("express");
const { MongoClient } = require('mongodb');
// import models here once made

const app = express();
const port = 3001;

const connectionStringURI = `mongodb+srv://yveivy:Yevette1@classactivities.fq7zpnf.mongodb.net/`;

const client = new MongoClient(connectionStringURI);

