var db = require('../core/db');

//get user Master Details By Type ID
var getCmnMenuByUser = function (req, res, userID) {
    var sql = "spGetCmnMenuByUser " + userID + " ";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
        //console.log(data);

        if (result.length == 0) {
            result = "[]";
            res.send(result);
        } else {
            res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
        }
        res.end();
    });
}

var getCmnMenuByUserMultiType = function (req, res, userID, UserTypeID) {
    var sql = "spGetCmnMenuByUserMultiType " + userID + "," + UserTypeID + " ";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
        //console.log(data);

        if (result.length == 0) {
            result = "[]";
            res.send(result);
        } else {
            res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
        }
        res.end();
    });
}


module.exports = {
    getCmnMenuByUser,
    getCmnMenuByUserMultiType
}