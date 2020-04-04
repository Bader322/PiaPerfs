const express = require("express");
const Post = require('../../models/post')
const moment = require('moment')
const router = express.Router();


const updated = async (req, res) => {
    const idToUpdate = req.params.id;

    console.log("I'm in update**************:   " + idToUpdate)
    const updatePost = {
      title: req.body.title,
      description: req.body.description,
      updated_at: Date()
    };
    console.log("title from object: " + updatePost.title)
    console.log("description from object: " + updatePost.description)
    console.log("updated_at from object: " + updatePost.updated_at)

    let filter = { _id: idToUpdate };
  
    let result = await Post.updateOne(filter, updatePost).exec();
    console.log("Result: ", result);
    res.redirect("/posts");
  };

  module.exports = updated;