var express = require('express');
var router = express.Router();

const clientControllers = require('../controllers/client');

/* GET home page. */
router.get('/', clientControllers.getHome);



module.exports = router;
