const express = require("express");
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../models/post.model')
// Database Name


// route to posts controller
router.get('/' ,async function(req, res, next)  {
      //open connection to posts db
  mongoose.connect(url, { useNewUrlParser: true });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console,'connection error:'))
  db.once('open',function(){})

  var postPass = await Post.find({});
  console.log("***********" + postPass)
  res.render('posts',{'posts': postPass})
     
  
});

// show post in full view, 
router.get('/:id',(req,res)  => {
    const selectedId = req.params.id;
    
  
  res.render('showpost',{'id':selectedId})
})

// edit post


// update post


// delete post





module.exports = router;
