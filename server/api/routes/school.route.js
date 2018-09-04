var express = require('express');
var app = express();
var router = express.Router();
// Getting the User Controller
const SchoolController = require('../controllers/school.controller');

// ***************SchoolName-Controller*******************************
router.post('/add', SchoolController.createSchoolname);
router.get('/get', SchoolController.getSchoolnames);

// ***************SchoolData-Controller*******************************
router.post('/add-data', SchoolController.createSchooldata);
router.get('/get-data', SchoolController.getSchooldata);
router.get('/editData/:id', SchoolController.getSchooldataById);
router.put('/updateData/:id', SchoolController.updateSchooldata);
router.delete('/delete-data/:id', SchoolController.removeSchooldata);
module.exports = router;






// // Require Item model in our routes module
// var Schoolname = require('../models/schoolname');

// // Defined store route
// itemRouter.route('/').post(function (req, res) {
//     var name = new Schoolname(req.body);
//     name.save()
//         .then(item => {
//             res.status(200).json({ Schoolname: 'Schoolname added successfully' });
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");
//         });
// });

// // Defined get data(index or listing) route
// itemRouter.route('/').get(function (req, res) {
//     Schoolname.find(function (err, names) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.json(names);
//         }
//     });
// });