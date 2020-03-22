const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const router = express.Router();
// Database Name
const dbName = 'posts';


// route to posts controller
router.get('/' ,(req, res, next) => {
  // middleware
  
  


  //end of mid ware
  res.render('posts');
      // Use connect method to connect to the server
      MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('videos');
        collection.find().toArray((error, documents) => {
          //console.log(documents);
        });

        

        // end mongo connection
        client.close();
      });



});
module.exports = router;
