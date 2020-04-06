const express = require("express");
const Post = require('../../models/Post')
const moment = require('moment')
const router = express.Router();


const updated = async (req, res) => {
    const idToUpdate = req.params.id;
    const updatePost = {
      title: req.body.title,
      description: req.body.description,
      updated_at: Date()
    };
    updatePost.updated_at.i
    let filter = { _id: idToUpdate };
    let result = await Post.updateOne(filter, updatePost).exec();
    console.log("Result: ", result);
    res.redirect("/posts");
  };

  module.exports = updated;