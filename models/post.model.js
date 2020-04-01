const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    created_at: Date,
    updated_at: Date,
    image: String

});
module.exports = mongoose.model('PostModel', PostSchema);