const express = require("express");
const mongoose = require('mongoose');
const mongodb = require('mongodb')
const url = 'mongodb://localhost:27017/posts';
const router = express.Router();
const Post = require('../models/post.model')
// Database Name
const dbName = 'posts';


// route to posts controller
router.get('/' ,function(req, res, next)  {
  
  
      // Use connect method to connect to the server
      // MongoClient.connect(url, function(err, client) {
      //   console.log("Connected successfully to server");
      //   const db = client.db(dbName);
      //   const collection = db.collection('videos');
      //   collection.find().toArray((error, documents) => {
      //   console.log(documents);
      //   // end mongo connection
      //   client.close();


      //   res.render('posts',{'documents': documents});
      //   });



      
      // });
      mongoose.connect(url, { useNewUrlParser: true });
      var post = new Post({ title: '@!@' });
      post.save(function (err) {
        if (err) return handleError(err);
        
        // saved!
      });

      
      //Get the default connection
      var db = mongoose.connection;
        //Bind connection to error event (to get notification of connection errors)
      db.on('error', console.error.bind(console, 'MongoDB connection error:'));

      postPass = Post.find();
      console.log(postPass)
      
        //   console.log(documents);
        //   // end mongo connection
        //   client.close();
      res.render('posts',{'postPass': postPass})

});



module.exports = router;
