const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();
const auth = require("../middlewire/auth");
const { ObjectId } = require('mongodb');

router.post("/postjob", auth, (req, res) => {
    console.log(req.user._id)
    const username = req.body.username
    const email = req.body.email
    const companyName = req.body.companyName
    const imageCompany = req.body.imageCompany
    const jobName = req.body.jobName
    const aboutJob = req.body.aboutJob
    const skill1 = req.body.skill1
    const skill2 = req.body.skill2
    const skill3 = req.body.skill3
    const skill4 = req.body.skill4
    const JobType = req.body.JobType
    const salary = req.body.salary
    const idOwner =req.user._id
    

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";


    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Codesoft-2");
        var myobj = { idOwner: idOwner, username: username, email: email, companyName: companyName, imageCompany: imageCompany, jobName: jobName, aboutJob: aboutJob,skill1:skill1,skill2:skill2,skill3:skill3,skill4:skill4,JobType:JobType,salary:salary };
        dbo.collection("AllJobs").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("You have added new job");
            db.close();
        });
    });
})
// ///////////////////////////////////
router.post("/final", auth, (req, res) => {
    const check = req.body.check
 
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Codesoft-2");
        var sort={check:check}
        dbo.collection("AllResponse").findOne({check:check},function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
        });
    });
})
// /////////////////////////////////////////
router.post("/alljobs", auth, (req, res) => {
    const jobName = req.body.jobName
 
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Codesoft-2");
        dbo.collection("AllJobs").find({jobName:jobName}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
          });
    });
})
////////////////////////////////////////

router.post("/ownposts", auth, (req, res) => {
    const idOwner = req.user._id
 
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Codesoft-2");
        dbo.collection("AllJobs").find({idOwner:idOwner}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
          });
    });
})
////////////////////////////////////////////////
router.post("/ownresponse", auth, (req, res) => {
    const ownerpost =(req.user._id).valueOf()
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Codesoft-2");
        dbo.collection("AllResponse").find({ownerpost:ownerpost}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
          });
    });
})
// ///delete item in decoment
router.delete("/ownposts", auth, (req, res) => {
    const _id =req.body._id
    console.log(_id)
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Codesoft-2");
        dbo.collection("AllJobs").remove({_id:ObjectId(_id)},function(err, result) {
            if (err) throw err;
            console.log("You delete this decoment");
            res.send(result)
            db.close();
          });
    });
})
// ////////////////////////////////////////////////////
router.delete("/ownresponse", auth, (req, res) => {
    const _id =req.body._id
    console.log(_id)
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Codesoft-2");
        dbo.collection("AllResponse").remove({_id:ObjectId(_id)},function(err, result) {
            if (err) throw err;
            console.log("You delete this decoment");
            res.send(result)
            db.close();
          });
    });
})

module.exports=router