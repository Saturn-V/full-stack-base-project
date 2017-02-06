var express = require('express')
var app = express()
var exphbs  = require('express-handlebars')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var Post = require('./models/post.js')



// Mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// Express
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', express.static(__dirname + '/public'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
  res.render('home')
})

app.get('/posts', function(req, res) {
  var posts = Post.find(function (err, posts) {
    if (err) return console.error(err)
    console.log(posts)
  })

  res.render('posts', { posts: posts })
})

app.get('/posts/new', function(req, res) {
  res.render('new-post')
})

app.post('/posts', function(req, res) {
  var post = new Post(req.body)

  post.save(function (err, post) {
    if (err) return console.error(err)
  })
  // res.send("success")
  res.redirect('/')
})



app.listen('3000', function() {
  console.log('Base app listening on port 3000!');
})
