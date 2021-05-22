// Controller handler to handle functionality in home page
const config = require('config');
const Chatroom = require('../models/Chatroom')
const mongoose = require('mongoose');
const roomGenerator = require('../util/roomIdGenerator')
// Example for handle a get request at '/' endpoint.

//AYO WHATS GOOD

fakeDB = () =>{
  return [ 
    {name: "abcd"},
    {name: "efgh"},
    {name: "something"}
  ]
}

function getHome(request, response){
  // do any work you need to do, then
  Chatroom.find().lean(items =>
    {
      response.render('home', {title: 'home', rooms: fakeDB, isAvailable: true});
    })
  
}

  // newChatroom
  //   .save()
  //   .then(item => console.log(item))
  //   .catch(err => console.log(err));




module.exports = {
    getHome
};