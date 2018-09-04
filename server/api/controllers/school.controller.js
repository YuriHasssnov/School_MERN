const SchoolNameService = require('../services/schoolname.service');
const SchoolDataService = require('../services/schooldata.service');

// ***************************Schoolname********************************
// ***************createSchoolname*******************
exports.createSchoolname = async function (req, res, next) {
  // Req.Body contains the form submit values.
  let schoolname = {
    name: req.body.name
  };
  try {
    // Calling the Service function with the new object from the Request Body
    let createdSchoolname = await SchoolNameService.createSchoolname(schoolname);
    return res.status(201).json({ status: 201, data: createdSchoolname, message: "Successfully Created Schoolname !" })
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: "Schoolname Creation was Unsuccessfully !" })
  }
};
// ***************getSchoolnames*******************
exports.getSchoolnames = async function (req, res, next) {
  try {
    let schoolnames = await SchoolNameService.getAll();
    // Return the schoolnames list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({ status: 200, data: schoolnames, message: "Successfully Schoolnames Received !" });
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: e.message });
  }
};


// ***************************Schooldata********************************
// ************createSchooldata**************
exports.createSchooldata = async function (req, res, next) {
  // Req.Body contains the form submit values.
  console.log('====schoolcontroller===')
  console.log(req.body.data)
  let schooldata = {
    schoolname_id: req.body.data._id,
    year: req.body.data.year,
    week: req.body.data.week,
    month: req.body.data.month,
    elecEuro: req.body.data.elecEuro,
    elecKwh: req.body.data.elecKwh,
    heatEuro: req.body.data.heatEuro,
    heatKwh: req.body.data.heatKwh,
    waterEuro: req.body.data.waterEuro,
    waterLitres: req.body.data.waterLitres
  };
  try {
    // Calling the Service function with the new object from the Request Body
    let createdSchooldata = await SchoolDataService.createSchooldata(schooldata);
    return res.status(201).json({ status: 201, data: createdSchooldata, message: "Successfully Created Schooldata !" })
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: "Schooldata Creation was Unsuccessfully !" })
  }
};
// ************getAllSchooldata**************
exports.getSchooldata = async function (req, res, next) {
  try {
    let schooldata = await SchoolDataService.getAllData();
    // Return the schoolnames list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({ status: 200, data: schooldata, message: "Successfully Schooldata Received !" });
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: e.message });
  }
};
// ************getSchooldataByID**************
exports.getSchooldataById = async function (req, res, next) {
console.log('===========safafafaf==============');
console.log(req.params);

  if (!req.params.id) {
    return res.status(400).json({ status: 400, message: "Id must be present" })
  }
  let id = req.params.id;
  // let user = {
  //   id,
  //   username: req.body.username || null,
  //   email: req.body.email || null,
  // };
  try {
    let schooldata = await SchoolDataService.getDataById(id);
    console.log("UOIUIOUIOUIUI");
    console.log(schooldata);
    return res.status(200).json({ status: 200, data: schooldata, message: "Successfully Edit page loaded" })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.updateSchooldata = async function (req, res, next) {
  // Id is necessary for the update
  if (!req.body._id) {
    return res.status(400).json({ status: 400, message: "Id must be present asdfsadf" })
  }
  let id = req.body._id;
  let shooldata = {
    id,
    year: req.body.year || null,
    month: req.body.month || null,
    week: req.body.week || null,
    elecEuro: req.body.elecEuro || null,
    elecKwh: req.body.elecKwh || null,
    heatEuro: req.body.heatEuro || null,
    heatKwh: req.body.heatKwh || null,
    waterEuro: req.body.waterEuro || null,
    waterLitres: req.body.waterEuro || null
  };
  try {
    let updatedSchooldata = await SchoolDataService.updateSchooldata(shooldata);
    return res.status(200).json({ status: 200, data: updatedSchooldata, message: "Successfully Updated Schooldata !" })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
};

// ************deleteAllSchooldata**************
exports.removeSchooldata = async function (req, res, next) {
  let id = req.params.id;
  // console.log(id)
  try {
    let deleted = await SchoolDataService.deleteSchoolData(id);
    return res.status(204).json({ status: 204, data: deleted, message: "Successfully Schooldata Deleted !" })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
};


