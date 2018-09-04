const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schoolname = require('../models/schoolname.model');

exports.createSchoolname = async function (schoolname) {

    // Creating a new Mongoose Object by using the new keyword
    let newSchoolname = new Schoolname({
        name: schoolname.name
    });
    try {
        // Saving the Schoolname
        let savedSchoolname = await newSchoolname.save();
        return savedSchoolname;
    } catch (e) {
        // return an Error message describing the reason
        throw Error("Error while Creating Schoolname !");
    }
};

exports.getAll = async function () {
    // Try Catch the awaited promise to handle the error
    try {
        let schoolnames = await Schoolname.find();
        // Return the stats list that was returned by the mongoose promise
        return schoolnames;
    } catch (e) {
        // return a Error message describing the reason
        throw Error('Error while Paginating Stats');
    }
};

