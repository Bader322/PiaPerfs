const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    created_at: Date,
    updated_at: Date

});
module.exports = mongoose.model('posts', PostSchema);