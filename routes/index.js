const chat = require('./chat.js');
const users = require ('./users.js');
const testAPI = require ('./testAPI.js');
//const socket = require ('./socketio.js');

const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('메인페이지가 로드되었습니다');
	res.send(express.static(path.join(__dirname, '../../client/public/index.html')));
	//	res.render('../client/src/index.js');
	//res.sendFile(path.resolve(__dirname, '../client/public/index.html');
});
router.use('/chat', chat);
//router.use('/socket', socket);
router.use('/users', users);
router.use('/testAPI', testAPI);

module.exports = router;
