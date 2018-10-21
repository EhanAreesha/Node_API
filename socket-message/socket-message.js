var db = require('../core/db');
var settings = require('../settings');
var axios = require('axios');

function messageEvent(io, socket, server) {

    socket.on('room:notice', function (data) {
        //console.log(data);
        var UserId = data.UserId;
        var State = data.State;
        var InstituteID = parseInt(data.InstituteID);
        var noticeId = parseInt(data.NoticeID);
        var NoticeArray = data.noticeArr;

        function Delay() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('resolved');
                }, 100);
            });
        }

        async function asyncCall() {

            for (var i = 0; i < NoticeArray.length; i++) {
                //Create Notification
                var sql = "spSetCmnNotification " + 0 + "," + InstituteID + "," + NoticeArray[i].UserTypeID + "," + UserId + ",'" + State + "'," + noticeId + ",'" + NoticeArray[i].NoticeHead + "','" + NoticeArray[i].NoticeBody + "'," + 0 + "," + 0 + " ";
                console.log(sql);
                var detailDelay = await Delay();
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("Notification Posted");
                    }
                });
            }

        }
        asyncCall();

        
        
        
        
       
    });

    
    
    
}


module.exports = {
    messageEvent
}