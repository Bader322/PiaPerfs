const express = require("express");
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/pianoperf';
const router = express.Router();
const Post = require('../Models/Post');
// Database Name
const dbName = 'posts';


// route to posts controller
router.get('/' , (req, res, next) => {
  const posts = Post.find({});
  // console.log("POsts::  "+posts)
  res.render('posts',posts);
  
  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('You are now connected to Mongo!'))
    .catch(err => console.error('Something went wrong', err))   
   
  
  
  
  
  // Use connect method to connect to the server
      // MongoClient.connect(url, function(err, client) {
      //   console.log("Connected successfully to server");
      //   const db = client.db(dbName);
      //   const collection = db.collection('videos');
      //   collection.find().toArray((error, documents) => {
      //   console.log(documents);
      //   });

      //   // end mongo connection
      //   client.close();
      // });



});
module.exports = router;
