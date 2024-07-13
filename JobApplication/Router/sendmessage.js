const nodemailer = require('nodemailer');
const express =require("express");
const { google } = require("googleapis");
const crypto = require('crypto');
const router =express.Router();
require("dotenv").config()
const http =require("http")

router.post('/sendmessage', (req, res) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ae5216864@gmail.com',
        pass: 'xggu dady ytwz blws'
      },
      tls: { 
        rejectUnauthorized: false,  
      },
    });
 
    var mailOptions = {
      from: 'ae5216864@gmail.com',
      to: req.body.youremail,
      subject: 'Code Soft',
      text: req.body.inp
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent Succesfuly: ' + info.response);
        res.status(200).json(check);
      }
    });
    
  });
  
  
  module.exports=router 