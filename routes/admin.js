var express = require('express');
var router = express.Router();

const adminControllers = require('../controllers/admin');

/* GET home page. */
router.get('/add-trending', adminControllers.getTrending);

router.post('/add-trending',adminControllers.postTrending);





module.exports = router;
