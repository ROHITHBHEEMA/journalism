var express = require('express');
var router = express.Router();

const clientControllers = require('../controllers/client');

/* GET home page. */
router.get('/', clientControllers.getHome);

router.get('/articles/:articleid',clientControllers.getArticle);

module.exports = router;
