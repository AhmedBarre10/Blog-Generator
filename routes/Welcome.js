const express = require("express")
const router = express.Router();
const User = require("../models/User")
const jwt  = require('jsonwebtoken')
const config = require("config")

router.get('/',async(req,res)=>{
    const token = req.header('autho');

    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'));
req.user = decoded.user;
console.log("good")
        const user   = await User.findById(req.user.id).select("-password")
        res.json( user)
        console.log('success')

    }
    catch(err){
        console.log(err.message)
    }

})

module.exports = router;