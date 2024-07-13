const express = require('express')
const Task = require('../Models/applyjob')
const auth = require("../middlewire/auth")
const authadmine = require("../middlewire/authadmine")
const router = express.Router()
const { imageupload } = require("../Models/applyjob")

router.post('/applyjob', auth, imageupload.single("image"), async (req, res) => {
    const yourname = req.body.yourname
    const youremail = req.body.youremail
    const yournumber = req.body.yournumber
    const yourtitlejob = req.body.yourtitlejob
    const expectedsalary = req.body.expectedsalary
    const ownerpost=req.body.ownerpost
    const check=req.body.check
    const image = req.file
    console.log(image)
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";


    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Codesoft-2");
        var myobj = { yourname: yourname, youremail: youremail, yournumber: yournumber, yourtitlejob: yourtitlejob, expectedsalary: expectedsalary,owner: req.user._id,image:image,ownerpost:ownerpost,check:check};
        dbo.collection("AllResponse").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("You have added new job");
            db.close();
        });
    });
});


router.get('/tasksDetails', authadmine, async (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(200).send(tasks)
    }).catch((e) => {
        res.status(400).send(e)
    })

})

router.delete('/task1Inf',async(req,res)=>{
    try{
        
        const _id = req.body._id
        const task = await Task.findByIdAndDelete(_id)
        if(!task){
            res.status(404).send('No task is found')
        }
        res.status(200).send({_id,task})
    }
    catch(e){
        res.status(500).send(e.message)
    }
})





module.exports = router 