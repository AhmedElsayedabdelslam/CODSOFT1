const express =require("express")
const router =express.Router()
const auth =require("../middlewire/auth")
const authadmine =require("../middlewire/authadmine")
const contact =require("../Models/contactus")
router.post("/Home", async(req,res)=>{
    try{
        const contactTask =new contact({...req.body})
        await contactTask.save()
        res.status(200).send(contactTask)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/homeproblems" ,async(req,res)=>{
    contact.find({}).then((task2) => {
        res.status(200).send(task2)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

router.delete('/problems' ,authadmine,async(req,res)=>{
    try {
    const _id =req.body.id
    const user =await contact.findByIdAndDelete(_id)
    res.status(200).json(user)
   }catch(error) {
         res.status(400).json(error)
   }
    
})
module.exports=router