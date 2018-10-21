var db = require('../core/db');
var IpAddress = require('../iPAddress');

var setDay = function (req, res, reqbody) {
    var sql = "spSetInsWeekend " + parseInt(reqbody.WeekendID) + ",'" + reqbody.DayID + "'," + reqbody.InstituteID + "," + reqbody.LoggedUserID + ",'" + IpAddress.IP + "'";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getcmnDay = function (req, res) {

    console.log("spGetCmnDay ");
    db.executeSql("spGetCmnDay ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getinsweekend = function (req, res, weekID, insID) {

    console.log("spGetInsWeekend " + weekID + "," + insID + " ");

    db.executeSql("spGetInsWeekend " + weekID + "," + insID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllWeekendById = function (req, res, id) {

    console.log("spGetInsWeekend " + parseInt(id) + "");

    db.executeSql("spGetInsWeekend " + parseInt(id) + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var deleteInsWeekEnd = function (req, res, reqBody) {

    console.log("spDeleteInsWeekend " + reqBody.WeekendID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'");

    db.executeSql("spDeleteInsWeekend " + reqBody.WeekendID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}



module.exports = {
    setDay,
    getcmnDay,
    getinsweekend,
    getAllWeekendById,
    deleteInsWeekEnd

}