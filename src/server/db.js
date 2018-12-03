require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./models/user');
const Message = require('./models/message');


mongoose.connect(process.env.MONGO_URI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MONGO DB!')
});


// user.createIndex( { id : 1 }, function(err, result) {
//   console.log(result);
//   callback(result);
// })

// const user1 = new User({
//   id: 1,
//   userName: 'danni',
//   password: 'codesmith1'
// })

// const user2 = new User({
//   id: 2,
//   userName: 'evgenii',
//   password: 'codesmith2'
// })

// const user3 = new User({
//   id: 3,
//   userName: 'Chris',
//   password: 'codesmith3'
// })

// const user4 = new User({
//   id: 4,
//   userName: 'Jae',
//   password: 'codesmith4'
// })

// user1.save();
// user2.save();
// user3.save();
// user4.save();


// const message1 = new Message({
//   text: 'Danni to Evgenii!',
//   senderId: user1._id,
//   receiverId: user2._id,
//   time: new Date()
// })
// message1.save(err => {
//   if (err) {
//     Message.find({})
//       .populate('senderId')
//       .populate('receiverId')
//       .exec((err, messages) => {
//         console.log(JSON.stringify(messages, null, '\t'))
//       })
//   }
// })

// const message2 = new Message({
//   text: 'Danni to Chris!',
//   senderId: user1._id,
//   receiverId: user3._id,
//   time: new Date()
// })

// message2.save(err => {
//   if (err) {
//     Message.find({})
//       .populate('senderId')
//       .populate('receiverId')
//       .exec((err, messages) => {
//         console.log(JSON.stringify(messages, null, '\t'))
//       })
//   }
// })

// const message3 = new Message({
//   text: 'Chris to Danni!',
//   senderId: user3._id,
//   receiverId: user1._id,
//   time: new Date()
// })

// message3.save(err => {
//   if (err) {
//     Message.find({})
//       .populate('senderId')
//       .populate('receiverId')
//       .exec((err, messages) => {
//         console.log(JSON.stringify(messages, null, '\t'))
//       })
//   }
// })

// const message4 = new Message({
//   text: 'Chris to Danni!',
//   senderId: user3._id,
//   receiverId: user1._id,
//   time: new Date()
// })

// message4.save(err => {
//   if (err) {
//     Message.find({})
//       .populate('senderId')
//       .populate('receiverId')
//       .exec((err, messages) => {
//         console.log(JSON.stringify(messages, null, '\t'))
//       })
//   }
// })


//Queries
// let output = undefined;

// User.findOne({id: 1}, function (err, res){
//   if (err){
//     console.error(err)
//   } else {
//     //console.log("Danni's _id " + res['_id'])
//   }
// })
//   .then((res) => {
//     Message.find({senderId: res['_id']}, (err, res) => {
//       //console.log(res);
//       output = res;
//     })
//   })


// User.findOne({id: 1}, function (err, res){
//   if (err){
//     console.error(err)
//   } else {
//     //console.log("Danni's _id " + res['_id'])
//   }
// })
//   .then((res) => {
//     Message.find({receiverId: res['_id']}, (err, res) => {
//       //console.log(res);
//       output = output.concat(res);
//       console.log(output);
//     })
//   })


// User.aggregate([
//   { $match: {id: 1} },
//   { $lookup: {
//       from: 'Message',
//       localField: '_id',
//       foreignField: 'senderId', 
//       as: 'sender'
//     } 
//   },
//   {
//     $unwind: '$sender'
//   },
// ])


module.exports = db;