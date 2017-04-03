var express = require('express')
var router = express.Router()

var Post = require('../models/post.js')

// INDEX of Post
router.get('/', function(req, res) {
  var posts = Post.find(function (err, posts) {
    if (err) return console.error(err)
    console.log(posts)
    res.render('posts', { posts: posts })
  })
})

// NEW of Post
router.get('/new', function(req, res) {
  res.render('new-post')
})

// CREATE of Post
router.post('/', function(req, res) {
  var post = new Post(req.body)
  console.log(post)
  post.save(function (err, post) {
    if (err) return console.error(err)
    res.send({ redirectUrl: '/posts' })
  })
})

// DELETE of Post
router.delete('/:id', function(req, res) {

})

module.exports = router
