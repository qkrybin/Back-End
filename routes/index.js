var express = require('express');
var router = express.Router();
const maria = require('../maria');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('메인페이지가 로드되었습니다')
	res.render('index');
	//return res.render('../Front-End/public/index.html');

});

//module.exports = app;
module.exports = router;
