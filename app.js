var express = require('express');
var http = require('http');
var createError = require('http-errors');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');


const app = express();
//app.set('port', process.env.PORT || 3000); //port setup

/* maraidb connection*/
const maria = require('./maria');
maria.connect();

const api = require('./routes');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, '../client/public')));

/* set up routers & static directory */
app.use('/api', api);

//app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, '../client/src/index.js'));
//});
app.use(express.static(path.join(__dirname, '../client/public')));

/* port listening */
app.listen(3000, () =>{
   console.log('Express server listening on port 3000');
});

/* catch 404 & forward to error handler*/
app.use(function(req, res, next) {
  next(createError(404));
});
/* handle error */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);  // render the error page
  res.render('error');
});

module.exports = app;
