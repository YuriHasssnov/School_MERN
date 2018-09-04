var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for SchoolNames
var SchoolData = new Schema({
    schoolname_id: {
        type: String,
       
    },
    year: {
        type: Number,
        required: true
    },
    week: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    elecEuro: {
        type: Number,
        required: true
    },
    elecKwh: {
        type: Number,
        required: true
    },
    heatEuro: {
        type: Number,
        required: true
    },
    heatKwh: {
        type: Number,
        requried: true
    },
    waterEuro: {
        type: Number,
        required: true
    },
    waterLitres: {
        type: Number,
        required: true
    }
},
    {
        collection: 'data'
    });
module.exports = mongoose.model('SchoolData', SchoolData);
