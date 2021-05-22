const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChatroomSchema = new Schema({
    roomName: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true
    },
    // messages: {
    //     type: Array,
    //     required: true
    // }
});

module.exports = Item = mongoose.model('Chatroom', ChatroomSchema);