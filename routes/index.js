import chat from './chat.js';
import users from './users.js';
import testAPI from './testAPI.js';
import socket from './socketio.js';

const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('메인페이지가 로드되었습니다');
	res.sendFile(path.resolve(__dirname, '../client/public/index.html');
});

router.use('/chat', chat);
router.use('/socket', socket);
router.use('/users', users);
router.use('/testAPI', testAPI);

module.exports = router;
