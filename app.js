"use strict";
// //Bringing in a dotenv package.
if(process.env.NODE_ENV !== "production") {
  require("dotenv").config();
};
//importing packages
const express = require('express');
const app = express();
const mysql = require('mysql');
const ejs = require('ejs');
const connect = require('connect');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const favicon = require('serve-favicon');
const logger = require('morgan');
const debug = require('debug');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
//setting up a server.
// app.set('port', process.env.PORT || 3000);
// const server = app.listen(app.get('port'), () => {
//   debug('Server listening on port ' + server.address().port);
//});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
//inporting modules
const routes = require('./routes/index.js');
const usersRoute = require('./routes/users.js');
const tossFeaturesRoute = require('./routes/products.js');

//setting up a view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.set('layout', 'zlayouts/layout.ejs');


//configuring middlewares
app.use(logger('tiny'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//......................
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));
var sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess));
//=====================================================================
//flash messages set up
//instatiating inported modules
app.use('/', routes);
app.use('/auth', usersRoute);
app.use('/tossfeatures', tossFeaturesRoute);

//error handling
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    console.log(err);
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      console.log(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
