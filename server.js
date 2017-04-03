var express = require('express')
var app = express()
var exphbs  = require('express-handlebars')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// Import Controllers
var auth = require('./controllers/auth')
var posts = require('./controllers/posts')

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

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get('/', function(req, res) {
  res.render('home')
})

app.use('/posts', posts)



app.listen('3000', function() {
  console.log('Base app listening on port 3000!')
})
