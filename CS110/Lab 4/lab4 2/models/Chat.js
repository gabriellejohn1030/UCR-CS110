const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChatSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('Chat', ChatSchema);