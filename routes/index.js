import express from 'express';
import account from './account';
import chat from './chat';
import users from './users';
import testAPI from './testAPI';
import socket from './socketio';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('메인페이지가 로드되었습니다')
	res.render('index');
	//return res.render('../Front-End/public/index.html');

});

router.use('/chat', chat);
router.use('/socket', socket);
router.use('/users', users);
router.use('/account', account);
router.use('/testAPI', testAPI);

module.exports = router;
