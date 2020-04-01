const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
const router = express.Router();
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const Post = require('../../models/post.model.js')


// get a form to fill by user
router.get('/', (req, res) => {
   
    res.render('create');
});




router.post('/', (req,res) => {
    console.log("Printing post field: " + req.body.title)
    console.log("Printing post field: " + req.body.description)
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description
    })
    newPost.save()
    res.redirect('/')



})

// //Create post method
// router.post('/superheroes', (req, res) => {
//     //internal scope of this function
//     const newSuperHero = {
//         name: req.body.superhero.toUpperCase(),
//         image: req.file.filename
//     }
//     const superheroe = new Superheroe(newSuperHero);
//     superheroe.save()
//     res.redirect('/');
// });


module.exports = router;