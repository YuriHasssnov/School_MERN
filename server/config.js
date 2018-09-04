const bluebird = require('bluebird');
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/School';

mongoose.Promise = bluebird;
mongoose.connect(connectionString, { useMongoClient: true });
module.exports = { mongoose };