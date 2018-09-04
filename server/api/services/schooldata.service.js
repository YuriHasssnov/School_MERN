const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schooldata = require('../models/schooldata.model');

exports.createSchooldata = async function (schooldata) {
    console.log(schooldata)
    // Creating a new Mongoose Object by using the new keyword
    let newSchooldata = new Schooldata({
        schoolname_id: schooldata.schoolname_id,
        year: schooldata.year,
        week: schooldata.week,
        month: schooldata.month,
        elecEuro: schooldata.elecEuro,
        elecKwh: schooldata.elecKwh,
        heatEuro: schooldata.heatEuro,
        heatKwh: schooldata.heatKwh,
        waterEuro: schooldata.waterEuro,
        waterLitres: schooldata.waterLitres
    });
    try {
        // Saving the Schoolname
        let savedSchooldata = await newSchooldata.save();
        return savedSchooldata;
    } catch (e) {
        // return an Error message describing the reason
        throw Error("Error while Creating Schooldata !");
    }
};

exports.getAllData = async function () {
    // Try Catch the awaited promise to handle the error
    try {
        let schooldata = await Schooldata.find();
        // Return the stats list that was returned by the mongoose promise
        return schooldata;
    } catch (e) {
        // return a Error message describing the reason
        throw Error('Error while Paginating Stats');
    }
};

exports.getDataById = async function (id) {
    try {
        //Find the old User Object by the Id
        schooldata = await Schooldata.findById(id);
        return schooldata;
    } catch (e) {
        throw Error("Error occured while Finding the Schooldata !");
    }
};

exports.updateSchooldata = async function (schooldata) {
    let id = schooldata._id;
    let oldSchooldata;
    try {
        //Find the old User Object by the Id
        console.log('Yuri#########12')
        console.log(id);
        oldSchooldata = await Schooldata.findByIdAndUpdate(id);
    } catch (e) {
        throw Error("Error occured while Finding the User");
    }

    // If no old User Object exists return false
    if (!oldSchooldata) {
        return false;
    }
}

exports.deleteSchoolData = async function (id) {
    // Delete the schooldata
    try {
        let deleted = await Schooldata.findOneAndRemove({ _id: id });
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Schooldata !")
    }
};

