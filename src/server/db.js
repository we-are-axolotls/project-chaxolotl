const dotenv = require('dotenv');
dotenv.config();

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

const connection = process.env.MONGO_URI;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to MONGO DB!')
});

module.exports = db;