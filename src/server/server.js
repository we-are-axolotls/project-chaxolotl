const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./db');
const path = require('path');
const { getAllUsers, createUser, getUserById } = require('./controllers/userController');
const { addMessage, getConversations } = require('./controllers/messageController');
// const User = require('./models/user');
const Message = require('./models/message');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// let staticPath = path.join(__dirname + );
// console.log('staticPath ' + staticPath);

app.use(express.static("dist"));

// app.use('/', require('./router'));

//Home page route
app.get('/', function (req, res) {
  res.send();
});

//Return all users from database, user object returns username and id only. 
//See userController for ref.
app.get('/users', async (req, res) => {
  const allUsers = await getAllUsers();
  res.send(allUsers);
})

//Create a new user. req.body includes {id: string, username: string, password: string}
app.post('/user', (req,res) => {
  const newUser = createUser(req.body);
  res.send(newUser);
})

//Given an user id, return user object. getUsedById takes in a string as argument.
app.get('/user/:id', async (req, res) => {
  const user = await getUserById(req.params.id);
  res.send(user);  
}) 

//Get all messages between two users. getConversation func takes in two strings as args.
app.get('/messages/:senderId/:receiverId', async(req, res) => {
  // const messages = await getMessageAsSender('5c03130d48834ed55490835c');
  const conversations = await getConversations(req.params.senderId, req.params.receiverId);
  res.send(conversations);
})

//Add new message to database. req.body includes {text: string, senderId: string, receiverId: string}
app.post('/messages', async (req, res) => {
  console.log('this is the body', req.body)
  const newMessage = await addMessage(req.body);
  console.log('newmssg', newMessage)
  res.send(newMessage);
})


// return all messages (both as sender and receiver) by the user
// app.get('/messages', async(req, res) => {
//   // const messages = await getMessageAsSender('5c03130d48834ed55490835c');
//   const senderMessages = await getMessageAsSender(1);
//   // getMessageAsSender(req.params.senderId)
//   const receiverMessages = await getMessageAsReceiver(1);
//   const allUserMessages = senderMessages.concat(receiverMessages);
//   res.send(allUserMessages);
// })


app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Server listening on localhost:3000')
})