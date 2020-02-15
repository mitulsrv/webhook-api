const mongoose = require('mongoose')

const WebHook = mongoose.Schema({
    name: String, // name
    payload: Object, // unstructured data from another server like object
    addedBy: String, // log
    alexMessage: String // my message
},{
    timestamps: true
});

module.exports = mongoose.model('WebHook', WebHook);
