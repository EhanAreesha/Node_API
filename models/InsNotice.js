var db = require('../core/db');
var IpAddress = require('../iPAddress');
var axios = require('axios');


var noticeIdForMsg = {};

var setInsNotice = function (req, res, reqbody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    var UserTypeArray = reqbody.UserTypeIDArr;
    var sql = "spSetInsNotice " + reqbody.NoticeID + ", '" + reqbody.NoticeDate + "', '" + reqbody.NoticeExpDate + "'," + reqbody.NoticeTypeID + ",'" + reqbody.NoticeHead + "','" + reqbody.NoticeBody + "'," + reqbody.InstituteID + ", " + reqbody.LoggedUserID + ", '" + IpAddress.IP + "'";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            var NoticeID = data.recordset[0].ReturnValue;
            noticeIdForMsg.NoticeID = NoticeID;
            res.send(data.recordset);
            if (NoticeID > 0) {
                var payload = {
                    "data": {
                        "notification": {
                            "title": "FCM Message Hauya",
                            "body": "This is an FCM Message",
                            "icon": "/itwonders-web-logo.png",
                        }
                    },
                    "to": "d439CfUpryk:APA91bEJSIgF6E3sHnEI0thWd1K1RiSWbncdUCYppEbQxxdkQNOI6_cdoJKX_lV1X_dxYhL8I2X5QH6OthDxoXhmDwTIyR1rLoY4qIjsyoDl52NpoNFxj1QRCdxuyEDX5O9LxGE1F1gN"
                };

                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "key=AAAAo7H6j9k:APA91bGUA87SPsKs6Eq-73P7L2BoTtFxHfz_36u9otccAhcxdN2B5W3PYUNpStdDTS01lqMLokHghD8WDpvCNUfWUcIajCuYXao3r8gOgbfQDHvhnSvDj-G1e4AJHTwhE_etVnJKsBOf"
                    }
                };

                axios.post('https://fcm.googleapis.com/fcm/send', payload, axiosConfig)
                .then((res) => {
                    console.log("RESPONSE RECEIVED: ---");
                })
                .catch((err) => {
                    console.log("AXIOS ERROR: ---", err);
                });
            }
            
            
            console.log(UserTypeArray);
            async function asyncCall() {
                if (UserTypeArray.length > 0) {
                    for (var i = 0; i < UserTypeArray.length; i++) {
                        //var NoticeUserID = 0;

                        //if (reqbody.NoticeUserID == 0) {
                        //    NoticeUserID = 0;
                        //}
                        //else {
                        //    NoticeUserID = UserTypeArray[i].NoticeUserID;
                        //}
                        console.log(UserTypeArray[i]);
                        var sql = "spSetInsNoticeUser " + NoticeID + "," + UserTypeArray[i].UserTypeID + "," + reqbody.InstituteID + ", " + reqbody.LoggedUserID + ", '" + IpAddress.IP + "'";
                        //console.log(sql);
                        var detailDelay = await Delay();
                        db.executeSql(sql, function (data, err) {
                            if (err) {
                                throw err;
                            } else {
                                // res.send(data.recordset);
                                console.log("Post Marks");
                            }
                        });
                    }
                }

            }
            asyncCall();  // ----

        }
        res.end();
    });
    // }

}


//var deleteInsNotice = function (req, res, reqbody) {
//    var sql = "spDeleteInsNoticeListUIGrid " + reqbody.InstituteID + "," + reqbody.NoticeID + ", " + reqbody.NoticeUserID + "," + reqbody.LoggedUser + ", '" + IpAddress.IP + "'";
//    console.log(sql);
//    db.executeSql(sql, function (data, err) {
//        if (err) {
//            throw err;
//        } else {
//            res.send(data.recordset);
//        }
//        res.end();
//    });
//}
var getNoticeListByInsID = function (req, res, InstituteID) {

    //console.log("spGetCmnNoticeTypeDDL");

    db.executeSql("SpGetInsNoticeList" + InstituteID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getNoticeListUIGrid = function (req, res, reqbody) {

    var sql = "SpGetInsNoticeListUIGrid " + reqbody.InstituteID + "," + reqbody.NoticeID + "," + reqbody.LoggedUser + "," + reqbody.PageNo + "," + reqbody.RowCountPerPage + "," + reqbody.IsPaging + ",'" + reqbody.SearchProperty + "'";
    //console.log(sql);

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var SpGetInsNoticeUserList = function (req, res, reqbody) {

    var sql = "SpGetInsNoticeUserList " + reqbody.InstituteID + "," + reqbody.NoticeID + "";
    //console.log(sql);

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
            //console.log(data.recordset);
        }
        res.end();
    });
}

var deleteInsNotice = function (req, res, reqbody) {

    var sql = "spDeleteInsNotice " + reqbody.NoticeID + ', ' + reqbody.InstituteID + ", " + reqbody.LoggedUserID + ", '" + IpAddress.IP + "'";
    //console.log(sql);

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var getUserWiseNoticeForSocketIO = function (req, res, InstituteID, NoticeID) {

    var sql = "spGetNotificationByUserType " + InstituteID + "," + NoticeID + " ";
    console.log(sql);
    db.executeSql(sql, function (data, err) {

        if (err) {
            throw err;

        } else {
            res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
            console.log('test',data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);

        }
        res.end();
    });
}

module.exports = {
    setInsNotice,
    getNoticeListByInsID,
    getNoticeListUIGrid,
    deleteInsNotice,
    SpGetInsNoticeUserList,
    noticeIdForMsg,
    getUserWiseNoticeForSocketIO

}