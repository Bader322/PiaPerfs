const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/piano';
const router = express.Router();
const Post = require('../../models/post.model.js')
const mongourl = 'mongodb://bader322:' +  process.env.MONGO_ATLAS_PW + '@cluster0-shard-00-00-hgjti.mongodb.net:27017,\
cluster0-shard-00-01-hgjti.mongodb.net:27017,cluster0-shard-00-02-hgjti.mongodb.net:27017/\
test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';


// get a form to fill by user
router.get('/', (req, res) => {
    //internal scope of this function
    res.render('create');
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