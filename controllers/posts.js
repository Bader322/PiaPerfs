const express = require("express");
const mongoose = require('mongoose');
const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../models/post.model.js')

router.get('/' , async(req, res, next) => {
  //open connection to posts db
  mongoose.connect(url, { useNewUrlParser: true });
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    mongodb.connect(url, function(err, client) {
      console.log("Connected successfully to server");
      let db = client.db('piano')
      let colletion = db.collection('video')
      colletion.find({}).toArray((error,documents) => {
        var post_all = documents
        client.close();
        console.log("out side functgion "+post_all)
        res.render('posts',{'posts' : post_all})
      })
      
      
      
    });
    
  });
  

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
