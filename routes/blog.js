const express = require('express');
// const {route}  = require('./userActivity');
const router = express.Router();
const createBlog = require('../controlers/createBlog')

router.post('/createBlog',createBlog)
// router.delete("/deleteBlog/:id",)
// router.get('/getAllBlogs',)
// router.get('/getBlogById',)
module.exports=router;
