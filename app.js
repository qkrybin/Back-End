var express = require('express');
var http = require('http');
var createError = require('http-errors');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

//import api from './routes';

const app = express();
app.set('port', process.env.PORT || 3000); //port setup

/* maraidb connection*/
const maria = require('./maria');
maria.connect();

//app.use('/', express.static(path.join(__dirname, '../client/public')));
/* set up routers & static directory */
//app.use('/api', api);

const home = require('./routes/index');
app.use('/', home);

//app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
//});

/* catch 404 & forward error to error handler*/
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* create server */
var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
});
//module.exports = app;


//var createError = require('http-errors');
//var express = require('express');
//var path = require('path');
//var logger = require('morgan');
//var cors = require('cors');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set("view engine", "ejs");
//app.engine("html", require('ejs').renderFile);

//app.use(cors())
//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use("/testAPI", testAPIRouter);

