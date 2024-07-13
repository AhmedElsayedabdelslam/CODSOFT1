const mongoose = require("mongoose")

const contactSchama = new mongoose.Schema({
   YourName : {
        type: String,
        required: true,
        trim: true
    },
    yourMail: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: Number,
        required: true,
        trim: true
    },
})

const contact =mongoose.model('Contact',contactSchama)
module.exports=contact