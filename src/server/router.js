const express = require('express'),
router = express.Router();
const path = require('path');
const db = require('./db');

//Setting up routes

//render index.html
// router.get('/',function(req,res,next){
//   res.set('Content-Type', 'text/html');
//   res.sendFile(path.join(__dirname+'./../../index.html'));
  
// })

// //Get all jobs
// router.get('/jobs',function(req,res,next){
//   db.any('select * from jobs')
//   .then(dbData => res.status(200).json(dbData))
//   .catch(err => res.status(500).json({error: err.message}));
// });

module.exports = router;