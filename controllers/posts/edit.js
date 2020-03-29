const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../../models/post.model.js')




// edit post
router.get('/:id',(req,res,next)  => {
    // find other elements of this id, then return them to view to use
    
  
    const selectedId = req.params.id;
    res.render('edit',{'id':selectedId})
  });


  module.exports = router;

  // update