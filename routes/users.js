const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const User = require("../models/User")

router.post('/',[
    
check('name', "name is required").not().isEmpty(),
check('email',"please include a valid email").isEmail(),
check('password', "please enter a password with more than 6 characters").isLength({min:6})
,
],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }


    const {name,email,password} =req.body;
    try{
let user = await User.findOne({email})
if(user){
    res.status(400).json({errors:[{msg:'user already exists'}]});
}
const avatar = gravatar.url(email,{
    s:'200',
    r: 'pg',
    d: 'mm'
})


            /// see if user exist
            user = new User({
                name,
                email,
                avatar,
                password
            })
            //encrypt password
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password,salt)
            await user.save();
            //return jwt token
const payload = {
    user:{
        id: user.id
    }
}

jwt.sign(payload,
config.get('jwtSecret'),
{ expiresIn: 3600},
(err,token)=>{
    if(err) throw err;
    res.json({ token })  

})
    
 

    }
    catch(err){
console.error(err.message)
res.status(500).json("servor error")
    }

})

module.exports = router;
