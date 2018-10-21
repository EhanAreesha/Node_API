//const express = require('express');
//const server = express();
//const bodyParser = require('body-parser');
//var parseUrlencoded = bodyParser.urlencoded({ extended: false });
//var settings = require('./settings');
//var path = require('path');
//// var test = require('./routes/test');

const express = require('express');
const server = express();
const bodyParser = require('body-parser');
server.use(bodyParser.json({ limit: "50mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
var settings = require('./settings');
var path = require('path');


var cmnMenu = require('./routes/cmnMenu')

var commonService = require('./routes/commonService')
var userService = require('./routes/cmnUser')
var cmnCustomCode = require('./routes/cmnCustomCode')
var insBranch = require('./routes/insBranch')

var cmnMail = require('./routes/cmnMail')


var insNotification = require('./routes/insNotification')

var insInstitute = require('./routes/insInstitute')
var cmnUserRegistration = require('./routes/cmnUserRegistration')
var login = require('./routes/login')
var uploads = require('./routes/uploads')
var home = require('./home');
var userAuthentication = require('./routes/userAuthentication')
var cmnUserMenu = require('./routes/cmnUserMenu')
var InsNotice = require('./routes/InsNotice')
var restaurantBackend = require('./routes/restaurantBackend')

//========FrontRestaurent
var FrontRestaurent = require('./routes/FrontRestaurent')

//========FrontRestaurent

//=================================================================================
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header("Access-Control-Allow-Headers",'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

//=================================================================================
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//Get info of all APIs
server.get('/',function(req,res){
	home.showHome(req,res);
});

server.use('/', cmnMenu);
server.use('/', commonService);
server.use('/', userService);
server.use('/', cmnCustomCode);
server.use('/', insBranch);
server.use('/', cmnMail);
server.use('/', insInstitute);
server.use('/', insNotification);
server.use('/', cmnUserRegistration);
server.use('/', login);
server.use('/', uploads);
server.use('/', userAuthentication);
server.use('/', cmnUserMenu);
server.use('/', InsNotice);
server.use('/', restaurantBackend);

//========FrontRestaurent

server.use('/', FrontRestaurent);
//========FrontRestaurent

server.use('/uploads', express.static(path.join(__dirname, 'uploads')))
//server.use(filePath, express.static(path.join(__dirname, 'uploads')))

//===================================== Attendence Scheduler =================================================
var schedule = require('node-schedule');
var axios = require('axios');

const smsAccessToken = 'a161686e823b8e88bbf2538f4e93692e';
let startTime = new Date(Date.now() + 5000);
let endTime = new Date(startTime.getTime() + 5000);
let params = {
    token: smsAccessToken,
    to: '01680360609',
    message : 'printf(Hello world)'
}
var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function () {
    //axios.post('http://sms.greenweb.com.bd/api.php?token=' + 'params.token' + '&to=' + 'params.to' + '&message=' + 'params.message')
    console.log(params.message);
});

var rule = new schedule.RecurrenceRule();
rule.minute = 41;

var job = schedule.scheduleJob(rule, function () {
    console.log('Hiding Elephant in the mouse hole !');
});

//console.log(startTime);
//console.log(endTime);

//===================================== FireBase Push Notification Code =================================================

var firebase = require("firebase-admin");

var serviceAccount = require("./onems-firebase-sdk.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://onems-6ac4a.firebaseio.com"
});

var registrationToken = 'AAAAo7H6j9k:APA91bGUA87SPsKs6Eq-73P7L2BoTtFxHfz_36u9otccAhcxdN2B5W3PYUNpStdDTS01lqMLokHghD8WDpvCNUfWUcIajCuYXao3r8gOgbfQDHvhnSvDj-G1e4AJHTwhE_etVnJKsBOf';
var payload = {
    data: {
        MyKey1: "Hello"
    }
};

var options = {
    priorty: "high",
    timeToLive: 60 * 60 * 24
};

firebase.messaging().sendToDevice(registrationToken, payload, options)
    .then(function (response) {
        console.log("Successfully sent message", response);
    })
    .catch(function (error) {
        console.log("Error sending message", error);
    });
//======================================================================================
//===================================== Socket.io Notification Configaration =================================================
var socketEvent = require('./socket/socket');
var http = require('http').createServer(server);
var io = require('socket.io')(http);
socketEvent.ioHandler(io, server);

//// Register a callback function to run when we have an individual connection
//// This is run for each individual user that connects
//io.sockets.on('connection',
//    // We are given a websocket object in our function
//    function (socket) {

//        console.log("We have a new client: " + socket.id);

//        // When this user emits, client side: socket.emit('otherevent',some data);
//        socket.emit('news', { hello: 'worldcup 2018 Russia' });
//        socket.emit('opps', { client: 'Hi Client Side' });

//        socket.on('my other event', function (data) {
//            console.log(data);
//        });

//        socket.on('disconnect', function () {

//            console.log("Client has disconnected");
//        });
//    }
//);




//======================================================================================
http.listen(process.env.PORT || settings.webPort, function (err) {
    if (err) {
        throw err;
    } else {
        console.log('server started at: ' + settings.webPort);
    }
});

