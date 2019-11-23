/* var express = require('express');
var router = express.Router();*/

/* GET users listing. *//*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/:cellphone', userController.getOne);
router.get('/', userController.getAll);

router.post('/',userController.register);
router.put('/:cellphone', userController.update);
router.delete('/:cellphone',userController.delete);

module.exports = router;
module.exports = router;
