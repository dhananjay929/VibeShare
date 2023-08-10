const express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Userpost = require('../models/post'); 
const fetchUser = require('../middleware/fetchUser'); 


// Edit a post
router.put('/edit/:postId', fetchUser, async (req, res) => {
 

  try {
    const postId = req.params.postId;
    const { title, description, tag } = req.body;
    const name = req.user.name;

    // Check if the post belongs to the logged-in user
    console.log({_id:postId, author:name})
    const post = await Userpost.findOne( {_id:postId, author:name} );
    console.log(post)
    if (!post) {
      return res.status(404).json({ error: 'Post not found or does not belong to the user' });
    }

    post.title = title;
    post.description = description;
    post.tag = tag || 'vibes';

    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error editing post:', error);
    res.status(500).json({ error: 'An error occurred while editing the post' });
  }
});

module.exports = router;
