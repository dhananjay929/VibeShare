const express = require('express');
const router = express.Router();
const Userpost = require('../models/post'); 
const fetchUser = require('../middleware/fetchUser'); 


// delete a post
router.delete('/delete/:postId', fetchUser, async (req, res) => {
  
  try {
      const postId = req.params.postId;
      const name = req.user.name;

    // Check if the post belongs to the logged-in user
    const post = await Userpost.deleteOne( {_id:postId, author:name} );
    console.log(post)
     if (!post) {
      return res.status(404).json({ error: 'Note not found or does not belong to the user' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'An error occurred while deleting the post' });
  }
});

module.exports = router;
