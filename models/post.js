const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    
    title: String,
    description: String,
    image: String,
    link: String,
    created_at: Date,
    updated_at: Date
    

});
// name of collection created or to be created in quotes
// then the schema itself made
module.exports = mongoose.model('video', PostSchema);