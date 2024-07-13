const nodemailer = require('nodemailer');
const express =require("express");
const { google } = require("googleapis");
const crypto = require('crypto');
const router =express.Router();
require("dotenv").config()
const http =require("http")

// const OAuth2 = google.auth.OAuth2;
// const oauth2Client = new OAuth2(process.env.OAUTH_CLIENTID, process.env.OAUTH_CLIENT_SECRET, 'https://developers.google.com/oauthplayground');
// oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN_AUTH });
// let accessToken =oauth2Client.refreshAccessToken().then(tokens => (accessToken = tokens.credentials.access_token));
// console.log(accessToken)
// // Step 2: Set up transporter
// const transporter = nodemailer.createTransport({
  
//   service: 'gmail', // or your email service
//   host: "mail.google.com",
//   port: 465,
  
//   key :"AIzaSyBG4lGZOC6JOVY-WXirZGn3eo9_Y_UiQs8",
//   secure :false,
//   scope: 'https://mail.google.com',
//   auth: {
//     type: 'OAuth2',
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//     clientId: process.env.OAUTH_CLIENTID, 
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.REFRESH_TOKEN_AUTH ,
//     accessToken:"ya29.a0AXooCgvlsHDYqQ7Hv66fMatRelY9m4PdWrIp_umR8ffz1FerUIFSxYFpSKmMM-gU3iTMVOzpy2saNK1JHOA0z42d0Zhnkk_EC8xYf3_OeL53fFzmUm4CLlNdTaRv5upY_ugmEuJlE1RYFgT6qiKcZbJM_JmjbnAHjEzxaCgYKARMSARMSFQHGX2MijdaTMfC1En8FGD1jwxC_Cg0171",
//     expires_in :3599,
//     token_type: "Bearer"

//     //   user: "ae521686@gmail.com",
//     // pass: "ahmed@660660",
//     // clientId: "243450262194-36oklj4ik9psg9ttel71f4jnuh03drge.apps.googleusercontent.com",
//     // clientSecret: "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",
//     // refreshToken: "1//043W2a1p3272oCgYIARAAGAQSNwF-L9IreuxPLY2DD72l6zGLNvS46eIYjJ_744NzqlbU5j6vUq2Q-Kayqg3J0jll9uQKVCC6ZxA",
//   },
//   tls: { 
//     rejectUnauthorized: false,  
//   },
    
// }); 



// // // Step 3: Password reset request route
// router.post('/forgetpass', (req, res) => {
  
//   // Generate token and save it with the user's data in your database
//   const check = crypto.randomBytes(5).toString('hex'); 
//   // ... save token logic

//   // Step 5: Send email
//   const mailOptions = {
//     from: 'ae521686@gmail.com', 
//     to: req.body.email,
//     subject: 'Password Reset',
//     text: "the check number is" +check
//    };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Email sent: ' + info.response);
//     res.status(200).send('A password reset email has been sent.');
//   });
// });
// const server =http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type' : 'Text/plain'})
// })
// server.listen(3000,'127.0.0.1')

/////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/forgetpass', (req, res) => {
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
  const check = crypto.randomBytes(5).toString('hex'); 
  var mailOptions = {
    from: 'ae5216864@gmail.com',
    to: req.body.email,
    subject: 'codesoft-Team',
    text: 'The verify code is ' +check
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