const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


let staticPath = __dirname + '/../../dist';
// console.log('staticPath ' + staticPath);

app.use(express.static(staticPath));

app.use('/', require('./router'));


app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Server listening on localhost:3000')
})