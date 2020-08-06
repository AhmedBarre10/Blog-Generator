const express = require("express")
const router = express.Router();
const Blog = require("../models/Blog")
const User = require("../models/User")

const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    try {
      const posts = await Blog.find()
      res.json(posts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


router.post('/',[
    
    check('title',"please include a title").exists(),
    check('content', "please include content").exists().isLength({min:300}),
    check('img', "please include img").exists()

    
    ], async(req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()}) && console.log({errors:errors.array()})
        }
const {title,content,img} = req.body;
try{
const blog = new Blog ({
    title,
    content,
    img,
})

blog.save();
res.send(blog)
}
catch(err){
    console.error(err.message)
    
}


})








module.exports = router;