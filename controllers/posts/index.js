const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../../models/Post.js')






router.get('/' , (req, res, next) => {
  
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    let db = client.db('piano')
    let colletion = db.collection('videos')
    colletion.find({}).toArray((error,documents) => {
      var post_all = documents
      console.log("docs: " + post_all.title)
      client.close();
      res.render('posts',{'posts' : post_all})
    })

  }); 
});
// show post in full view, 
router.get('/:id',async(req,res,next)  => {
  console.log("i'm here at show id: ");
  const selectedId = req.params.id;
  const document = await Post.findById(selectedId).exec();
  res.render('show',{'vid': document.link, 'description': document.description, 'title' :document.title})
  
})






// update post


// delete post






module.exports = router;
