const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const router = express.Router();
const post = require('../models/Post')
// Database Name
const dbName = 'posts';


// route to posts controller
router.get('/' ,function(req, res, next)  {
  
  
  
  
  
      // Use connect method to connect to the server
      MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('videos');
        collection.find().toArray((error, documents) => {
        console.log(documents);
        // end mongo connection
        client.close();


        res.render('posts',{'documents': documents});
        });

        
      });



});
module.exports = router;
