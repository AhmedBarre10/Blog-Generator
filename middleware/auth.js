const jwt  = require('jsonwebtoken')
const config = require("config")
 module.exports = function(req,res,next){
     // get token from header
     const token = req.header('autho');

     // check if not token
     if(!token){
       return res.status(401).json({msg:'no token authorized'})


     }
     // verify token
     try{
const decoded = jwt.verify(token, config.get('jwtSecret'));
req.user = decoded.user;
console.log("good")
next();

     }
     catch(err){
       res.status(401).json({msg:"token is not valid"})
       console.log('token not working')

     }
 }