var db = require('../core/db');

var setNotification = function(req,res,reqbody) {
    var sql = "spSetInsNotificationSetup " + reqbody.InsNotificationSetupID + "," + reqbody.NotificationTypeID + ",'" + reqbody.Subject + "','" + reqbody.Body + "'," + reqbody.IsActive + "," + reqbody.InstituteID + "," + reqbody.CreateBy + ",'" + reqbody.CreateOn + "','" + reqbody.CreatePc + "'," + reqbody.UpdateBy + ",'" + reqbody.UpdateOn + "','" + reqbody.UpdatePc + "'," + reqbody.IsDeleted + "," + reqbody.DeleteBy + ",'" + reqbody.DeleteOn + "','" + reqbody.DeletePc + "'";
    console.log(sql);

    db.executeSql(sql,function (data,err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    }); 
}

// get cmnNotification
var getNotification = function (req, res) {

    console.log("spGetInsNotificationSetup 0");

    db.executeSql("spGetInsNotificationSetup 0",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}

var getNotificationById = function (req, res, id) {

    console.log("spGetInsNotificationSetup " + id + "");

    db.executeSql("spGetInsNotificationSetup "+id+"",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var getNotificationTypeName = function (req, res) {

    console.log("spGetInsNotificationSetup 0");

    db.executeSql("spGetInsNotificationSetup 0",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}

module.exports = {
    setNotification,
    getNotification,
    getNotificationById,
    getNotificationTypeName
     
}