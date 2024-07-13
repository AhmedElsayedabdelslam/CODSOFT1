const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();
const auth = require("../middlewire/auth");
const { json } = require("body-parser");

router.post("/namegroup", (req, res) => {
    const name = req.body.name
    console.log(name)
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("codesoft1");
      dbo.createCollection(name, function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    });
})
module.exports=router