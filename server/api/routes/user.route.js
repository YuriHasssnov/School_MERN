const express = require('express');
const router = express.Router();
// Getting the User Controller

const UserController = require('../controllers/user.controller');

// Map each API to the Controller Functions

router.post('/authenticate', UserController.authenticate);
router.post('/register', UserController.createUser);
router.get('/', UserController.getUsers);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.removeUser);
router.get('/edit/:id', UserController.getUserById);

router.put('/edit/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// Export the Router
module.exports = router;