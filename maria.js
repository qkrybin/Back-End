const maria = require('mysql');
const conn = maria.createConnection({
    host:'sober.cge4fsq8vikh.ap-northeast-2.rds.amazonaws.com',
    port:3306,
    user:'admin',
    password:'ewha2021',
    database:'sober'
});
module.exports = conn;
