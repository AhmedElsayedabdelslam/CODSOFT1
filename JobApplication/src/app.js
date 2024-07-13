const express = require("express");
const mongoose = require("mongoose");
const request=require("request")
const app = express();
const port = process.env.PORT || 3000;
const morgan = require("morgan")
const crypto = require("crypto")
const jquery =require("jquery")
const userRouter = require("../Router/user")
const userModel = require("../Models/user")
const cookieParser = require('cookie-parser');
const applyjob = require("../Router/applyjob")


const forget = require("../Router/forgetpassword")
const name =require("../Router/name")
const insert =require("../Router/mongo")
const postjob =require("../Router/postjob")
const sendmessage =require("../Router/sendmessage")
const contact =require("../Router/contact")
const bodyparser = require("body-parser")
const path = require("path")
const hbs = require("hbs");
const { imageupload } = require("../Models/applyjob");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded())
// app.use(jquery);
app.use(morgan("dev"))
require('../connect/connect')
require("dotenv").config()
app.use(userRouter);
app.use(contact)
app.use(sendmessage)

app.use(name)
app.use(insert)
app.use(cookieParser());
app.use(applyjob)
app.use(forget)
app.use(postjob)
app.use(bodyparser())
var nodemailer = require('nodemailer');
const { ObjectId } = require("mongodb");

// for pages ///////////////////////////////////////////////////////////////////
const publicDirectory = path.join(__dirname, '../publicPage')
app.use(express.static(publicDirectory))
const uploasDirectory =path.join(__dirname ,"../uploads")


app.use("/final" ,express.static("./uploads"))
app.use("/showCars", express.static("./images"))
app.use("/Home", express.static("./images"))
app.use("/Home", express.static("./vendor"))
app.set('view engine', 'hbs');

const viewsDirectory = path.join(__dirname, "../pages/views")
app.set("views", viewsDirectory)
app.get('/login', (req, res) => {
  res.render('login', {
    email: "Email address:",
    password: "Password:"
  })
})
app.get('/Home', (req, res) => {
  res.render('Home', {
  })
})


app.get('/userDetails', (req, res) => {
  res.render('userDetails', {
  })
})
app.get('/forgetpass', (req, res) => {
  res.render('forgetpass', {
  })
})
  
app.get('/namegroup', (req, res) => {
  res.render('namegroup', {
  })
})
app.get('/mongo', (req, res) => {
  res.render('mongo', {
  })
})
app.get('/profile', (req, res) => {
  res.render('profile', {
  })
})
app.get('/postjob', (req, res) => {
  res.render('postjob', {
  })
})
app.get('/applyjob', (req, res) => {
  res.render('applyjob', {
  })
})
app.get('/final', (req, res) => {
  res.render('final', {
  })
})
app.get('/alljobs', (req, res) => {
  res.render('alljobs', {
  })
})
app.get('/ownposts', (req, res) => {
  res.render('ownposts', {
  })
})
app.get('/ownresponse', (req, res) => {
  res.render('ownresponse', {
  })
})
app.get('/showmoredetails', (req, res) => {
  res.render('showmoredetails', {
  })
})
app.get('/sendmessage', (req, res) => {
  res.render('sendmessage', {
  })
})
app.get('/problems', (req, res) => {
  res.render('problems', {
  })
})

app.all("*", (req, res) => {
  res.status(404).send()
})

function db() {
  const URLDB = process.env.DBCONNECT
  mongoose.connect(URLDB)
    .then(() => {
      console.log("db connected")
    }).catch(() => {
      console.log("error in connection")
    })
}
db()
app.listen(port, () => {
  console.log("All Right you are in port  " + port)
})
