const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../../models/post.model.js')
const mongourl = 'mongodb://bader322:'+process.env.MONGO_ATLAS_PW+'@cluster0-shard-00-00-hgjti.mongodb.net:27017,cluster0-shard-00-01-hgjti.mongodb.net:27017,cluster0-shard-00-02-hgjti.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });






router.get('/' , async(req, res, next) => {
  const docs = await Post.find().exec();
  console.log(docs);
  
  
  res.render('posts')
  
  
  
  // MongoClient.connect(url, function(err, client) {
  //   if (err) throw err;
  //   console.log("Connected successfully to server");
  //   let db = client.db('piano')
  //   let colletion = db.collection('video')
  //   colletion.find({}).toArray((error,documents) => {
  //     var post_all = documents
  //     client.close();
  //     console.log("Root route from posts js "+post_all)
  //     res.render('posts',{'posts' : post_all})
  //   })

  // }); 
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
