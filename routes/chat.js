var express = require('express');
var router = express.Router();
const maria = require('../maria');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('chat', { title: 'chat tutorial' });
});

module.exports = router;
