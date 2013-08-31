/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
<<<<<<< HEAD
var chatroom = require('./routes/myroom');
=======
var login = require('./routes/login');
>>>>>>> 9598e527df4ff7d35b58adf0ea13f561a731d066
var http = require('http');
var path = require('path');

var app = express(),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/static', express.static(__dirname + 'node_modules'));

// deploy env
if ('development' == app.get('env')) {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

if ('production' == app.get('env')) {
  app.use(express.errorHandler());
}

<<<<<<< HEAD
// Routes
app.get('/', routes.index);
app.get('/myroom', chatroom.index);
=======
// login
app.get('/(login)?', login.index);
app.post('/dologin', login.dologin);
>>>>>>> 9598e527df4ff7d35b58adf0ea13f561a731d066

// application layout
app.set('view_options', {
    layout: 'layout'
});

// socket.io settings.
io.sockets.on('connection', function (socket) {
    console.log('connected(server side).');
    socket.on('msg send', function (message) {
        console.log('in msg send. message:' + message);
        socket.emit('msg push', message);
        socket.broadcast.emit('msg push', message);
    });
    socket.on('disconnect', function() {
        console.log('disconnect');
    });
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
