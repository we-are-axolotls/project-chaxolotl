const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  text: String,
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  time: Date,
});


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;