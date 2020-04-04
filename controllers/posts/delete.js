const Post = require('../../models/post')


const to_delete = async(req, res) => {
    //internal scope of this function
    const idToDelete = req.params.id;
    console.log("I'm onto delete: " + idToDelete)
    const document = await Post.findById(idToDelete).exec();
    //Delete the image
    await Post.deleteOne({ _id: idToDelete }).exec();
    res.redirect('/posts');
};


module.exports = to_delete;