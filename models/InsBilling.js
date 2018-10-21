var db = require('../core/db');
var BaseJoi = require('joi');
var Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
var IpAddress = require('../iPAddress');

var postInsBilling = function (req, res, reqBody) {
    var sql = "spSetInsBilling " + reqBody.UserID + ", '" + reqBody.UserFullName + "', '" + reqBody.PhoneNo + "', '" + reqBody.EmailID + "', '" + reqBody.PreAddress + "', " + reqBody.UserTypeID + ", " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
    console.log(sql);

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
            console.log(data.recordset);
        }
        res.end();
    });
}


module.exports = {
    postInsBilling
}
