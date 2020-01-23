const express = require('express');

const controladorUser = require('../../controllers/v1/users-controller');


const router = express.Router();
router.post('/createU', controladorUser.createUser);
router.post('/updateU', controladorUser.updateUser);
router.get('/getU', controladorUser.getUsers);
router.post('/deleteU', controladorUser.deleteUser);

module.exports = router;
