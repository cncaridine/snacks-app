// ___________________
// Dependencies
// ___________________
// require('dotenv').config()
const express = require('express');
const snackzController = require('./controllers/snackz.js');
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
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + 'snackz';
const mongoURI = process.env.MONGOLAB_CYAN_URI || 'mongodb://localhost:27017/' + 'snackz';

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open', () => {});

// ___________________
// Middleware
// ___________________
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride('_method'));

app.use('/snackz', snackzController);
// ___________________
// Listener
// ___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));
