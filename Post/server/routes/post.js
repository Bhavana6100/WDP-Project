const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const posts = await Post.getAllPosts(req.body);
      res.send(posts);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/getPost', async (req, res) => {
    try {
      let post = await Post.getPost(req.body);
      res.send(post)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  
  .get('/byUser', async (req, res) => {
    try {
      let post = await Post.getPostsByUser(req.body);
      if(post["0"]){
        res.send({post})
      }else{
        res.send({error:"User does not have any posts"});
      }
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/createPost', async (req, res) => {
    try {
      let post = await Post.createPost(req.body);
      res.send({post})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .put('/editPost', async (req, res) => {
    try {
      let post = await Post.editPost(req.body);
      res.send({post});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .post('/deletePost', async (req, res) => {
    try {
      Post.deletePost(req.body);
      res.send({success: "Post Deleted Successfully... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })



  
module.exports = router;