var messageEventForNotice = require('../socket-message/socket-message');
var db = require('../core/db');

function ioHandler(io, server) {
    let onlineBidder = [];
    io.on('connection', function (socket) {
        console.log('socket connected');
        
        socket.on('room:add', function (data) {
            socket.room = data.room;
            socket.join(data.room);
            //Notification Q
            var UserID = parseInt(data.UserID);
            var UserTypeID = parseInt(data.UserTypeID);
            var Date = data.Date;

            if (data.room == 'bidder') {
                console.log('in room');
                var notificationData = [];

                var sql = "spGetAllCmnNotification " + parseInt(1) + "," + parseInt(1) + " ";
                console.log(sql);
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        notificationData.push(data.recordset);
                        if (UserTypeID === 5) {
                            var sql = "spGetSpecificAttendenceNotificationForGuardian " + UserID + "," + UserTypeID + ",'" + Date + "' ";

                            db.executeSql(sql, function (data, err) {
                                if (err) {
                                    throw err;
                                } else {
                                    console.log('------------', data.recordset);

                                    //var notificationData = [];
                                    if (data.recordset.length > 0) {
                                        var notificationQ = [
                                            {
                                                "Body": 'Hi Sir Your Children ' + data.recordset[0].childrenName + ' is Just CheckIn At ' + data.recordset[0].Times,
                                                "Subject": "ATTENDANCE NOTIFICATIONS FOR " + data.recordset[0].parentName,
                                                "NotificationDate": "20-10-2018"
                                            }
                                        ]

                                        notificationQ.filter(function (v, i) {
                                            notificationData[0].push(v);
                                        });
                                    }
                                    socket.emit('noticeUpdate', { notice: notificationData[0].reverse() });
                                }
                            });
                        } else {
                            socket.emit('noticeUpdate', { notice: notificationData[0].reverse() });
                        }
                    }
                });
            }
        });

        messageEventForNotice.messageEvent(io, socket, server);
        

    });
};

module.exports = {
    ioHandler
}