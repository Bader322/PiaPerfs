const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../models/post.model.js')




router.get('/' , (req, res, next) => {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    let db = client.db('piano')
    let colletion = db.collection('video')
    colletion.find({}).toArray((error,documents) => {
      var post_all = documents
      client.close();
      console.log("Root route from posts js "+post_all)
      res.render('posts',{'posts' : post_all})
    })

  }); 
});
// show post in full view, 
router.get('/:id',(req,res,next)  => {
  console.log("i'm here at show id: ");
  const selectedId = req.params.id;
  res.render('show',{'id':selectedId})
  
})




// edit post
router.get('/edit/:id',(req,res,next)  => {
  // find other elements of this id, then return them to view to use
  

  const selectedId = req.params.id;
  res.render('edit',{'id':selectedId})
});

// update post


// delete post






module.exports = router;
