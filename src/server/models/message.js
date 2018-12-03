const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  text: String,
  senderId: Number,
  receiverId: Number
  // senderId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  // receiverId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }
  // time: Date,
}, { timestamps: {createdAt: 'created_at'}});


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;