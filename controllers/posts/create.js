const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
const router = express.Router();
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const Post = require('../../models/post.js')


// get a form to fill by user
router.get('/', (req, res) => {
   
    res.render('create');
});




router.post('/', (req,res) => {
    console.log("Printing post field: " + req.body.title)
    console.log("Printing post field: " + req.body.description)
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description,
        created_at: Date(),
        updated_at: Date()
    })
    newPost.save()
    res.redirect('/')



})
module.exports = router;