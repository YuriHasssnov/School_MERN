var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for SchoolNames
var SchoolName = new Schema({
    name: {
        type: String,
        required: true
    },
},
    {
        collection: 'names'
    });

module.exports = mongoose.model('SchoolName', SchoolName);
