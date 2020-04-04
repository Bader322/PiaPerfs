const express = require("express");
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../../models/post.js')
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
    .on("error",error => console.log("Error: ", error))
    .once("open", () => {console.log("Connected")})


// edit post
router.get('/:id', async (req,res,next)  => {
    // find other eleme nts of this id, then return them to view to use
    const selectedId = req.params.id;
    const document = await Post.findById(selectedId).exec();
        res.render('edit',{'id': document._id, 'title': document.title, 'description': document.description})
    }); 


  module.exports = router;

  // update