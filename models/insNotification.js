var db = require('../core/db');
var IpAddress = require('../iPAddress');

var setNotification = function(req,res,reqbody) {
    var sql = "spSetInsNotificationSetup " + reqbody.InsNotificationSetupID + "," + reqbody.NotificationTypeID +",'" + reqbody.Subject +"','" + reqbody.Body +"'," + reqbody.IsActive +"," + reqbody.InstituteID +"," + reqbody.CreateBy + ",'" + reqbody.CreateOn +"','" + reqbody.CreatePc +"'," + reqbody.UpdateBy +",'" + reqbody.UpdateOn+ "','" + reqbody.UpdatePc + "'," + reqbody.IsDeleted + "," + reqbody.DeleteBy +",'" + reqbody.DeleteOn + "','"+reqbody.DeletePc+"'";
    
    console.log(sql)
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
var getNotification = function(req,res, reqBody) {
    db.executeSql("spGetInsNotificationSetup " + reqBody.InstituteID + ", 0," + reqBody.LoggedUser + ", " + reqBody.PageNo + ", " + reqBody.RowCountPerPage + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}

var getNotificationById = function(req,res,id) {
    db.executeSql("spGetInsNotificationSetup "+id+"",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var getNotificationTypeName = function(req,res) {
    db.executeSql("spGetInsNotificationSetup 0",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var getNotificationType = function(req,res) {
    db.executeSql("spGetCmnNotificationType 0",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var deleteInsNotification = function (req, res, reqBody) {
    var sql = "spDeleteInsNotificationSetup " + reqBody.InsNotificationSetupID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
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
var getAllNotificationUI = function (req, res, reqBody) {
    db.executeSql("spGetInsNotificationSetup " + reqBody.InstituteID + ", " + reqBody.InsNotificationSetupID + ", " + reqBody.LoggedUser + ", " + reqBody.PageNo + ", " + reqBody.RowCountPerPage + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'", function (data, err) {
       
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}




module.exports = {
    setNotification,
    getNotification,
    getNotificationById,
    getNotificationTypeName,
    getNotificationType,
    deleteInsNotification,
    getAllNotificationUI
     
}