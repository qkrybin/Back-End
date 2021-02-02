var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatRouter = require('./routes/chat');
//var socket = require('./routes/socketio');
var testAPIRouter = require("./routes/testAPI");

var app = express();

const maria = require('./maria');
maria.connect();

/* setup routers & static directory */
//import api from './routes';
//app.use('/api', api);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set("view engine", "ejs");
//app.engine("html", require('ejs').renderFile);

//port setup
app.set('port', process.env.PORT || 3000);

//get home page
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// ------- creates Server -------

module.exports = app;
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});
