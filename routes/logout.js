const express = require('express');
const { Router } = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    req.session.destroy()
    .then(console.log("destroyed"))
    .catch(console.log(err))
        
})

module.exports = router