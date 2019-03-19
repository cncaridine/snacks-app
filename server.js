// ___________________
// Dependencies
// ___________________
// require('dotenv').config()
const express = require('express');
const Snack = require('./models/snackz.js');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
// ___________________
// Port
// ___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

// ___________________
// Database
// ___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + 'snackz';

// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open', () => {});

// ___________________
// Middleware
// ___________________
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride('_method'))

// ___________________
// Routes
// ___________________

// ___________________
// SEED route
app.get('/snackz/seed', (req, res)=>{
    Snack.create([
      {
        snacker: 'Chase',
                snack: 'pastries',
                continent: 'South America',
                description: 'dessert',
                img: 'public/images/cooking-cuisine-delicious-908180.jpg'
              }, {
                snacker: 'Ian',
                snack: 'sushi',
                continent: 'Asia',
                description: 'fresh sushi',
                img: 'public/images/asia-carrot-chopsticks-357756.jpg'
              }, {
                snacker: 'Shawn',
                snack: 'avocado and stuff',
                continent: 'North America',
                description: 'healthy stuff',
                img: 'public/images/avocado-basil-close-up-1143754.jpg'
              }, {
                snacker: 'Kylie',
                snack: 'chocolate cake',
                continent: 'Australia',
                description: 'yummy cake',
                img: 'public/images/adult-brawny-chocolate-cake-936000.jpg'
              }, {
                snacker: 'Gail',
                snack: 'bananas',
                continent: 'South America',
                description: 'crunchy sweetness',
                img: 'public/images/banana-bowl-chips-77029.jpg'
              }, {
                snacker: 'Rob',
                snack: 'biscuits and a beverage',
                continent: 'Europe',
                description: 'afternoon snack',
                img: 'public/images/beverages-biscuits-book-213074.jpg'
              }, {
                snacker: 'Adrienne',
                snack: 'i do not know',
                continent: 'Antarctica',
                description: 'after the jetlag I cannot remember',
                img: 'public/images/appetizers-catering-cheese-6589.jpg'
              }, {
                snacker: 'Tiffany',
                snack: 'cheese and stuff',
                continent: 'Europe',
                description: 'healthy yumminess',
                img: 'public/images/cheese-cuisine-diet-1239312.jpg'
      }
    ], (err, data)=>{
        res.redirect('/snackz');
    })
});
// ___________________
// delete route

// ___________________
// edit route

// ___________________
// put route

// ___________________
// index route
app.get('/snackz', (req, res) => {
  Snack.find({}, (error, allSnackz) => {
    res.render('index.ejs', {
      snacks: allSnackz
    });
  });
});

// ___________________
// new route
app.get('/snackz/new', (req, res) => {
  res.render('new.ejs');
});

// ___________________
// show route
app.get('/snackz/:id', (req, res) => {
  Snack.findById(req.params.id, (err, foundSnack)=>{
    res.render('show.ejs', {
      snack: foundSnack
    });
  });
});

// create route
app.post('/snackz/', (req, res) => {
  Snack.create(req.body, (error, createdSnack) => {
      res.send(createdSnack);
  })
});
// ___________________
// Listener
// ___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));
