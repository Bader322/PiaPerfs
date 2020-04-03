const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../../models/post.js')






router.get('/' , (req, res, next) => {
  
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    let db = client.db('piano')
    let colletion = db.collection('videos')
    colletion.find({}).toArray((error,documents) => {
      var post_all = documents
      client.close();
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






// update post


// delete post






module.exports = router;
