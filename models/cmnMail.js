var db = require('../core/db');
var IpAddress = require('../iPAddress');


var setMail = function(req,res,reqbody) {
    
    var sql = "spSetInsMailSetup " + reqbody.InsMailSetupID + "," + reqbody.InstituteID +"," + reqbody.MailTypeID +",'" + reqbody.Subject +"','" + reqbody.Body +"','" + reqbody.FromEmail +"'," + reqbody.IsActive +"," + reqbody.CreateBy + ",'" + reqbody.CreateOn +"','" + reqbody.CreatePc +"'," + reqbody.UpdateBy +",'" + reqbody.UpdateOn+ "','" + reqbody.UpdatePc + "'," + reqbody.IsDeleted + "," + reqbody.DeleteBy +",'" + reqbody.DeleteOn + "','"+reqbody.DeletePc+"'";
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

// get cmn Adress
var getMail = function (req, res) {

    console.log("spGetInsMailSetup 0");

    db.executeSql("spGetInsMailSetup 0",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}

var getMailById = function (req, res, id) {

    console.log("spGetInsMailSetup " + id + "");

    db.executeSql("spGetInsMailSetup "+id+"",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var getMailTypeName = function (req, res, id) {

    console.log("spGetCmnMailType 0");

    db.executeSql("spGetCmnMailType 0",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var getInstituteName = function (req, res) {

    console.log("spGetInsInstitute 0");

    db.executeSql("spGetInsInstitute 0",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var deleteInsMail = function (req, res, reqBody) {

    console.log("spDeleteInsMailSetup " + reqBody.InsMailSetupID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'");

    db.executeSql("spDeleteInsMailSetup " + reqBody.InsMailSetupID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getInsMailUI = function (req, res, reqBody) {

    console.log("spGetInsMailSetup " + reqBody.InsMailSetupID + "," + reqBody.InstituteID + ", " + reqBody.LoggedUser + ", " + reqBody.PageNo + ", " + reqBody.RowCountPerPage + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'");

    db.executeSql("spGetInsMailSetup " + reqBody.InsMailSetupID + "," + reqBody.InstituteID + ", " + reqBody.LoggedUser + ", " + reqBody.PageNo + ", " + reqBody.RowCountPerPage + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}



module.exports = {
    getInstituteName,
    getMailTypeName,
    getMail,
    getMailById,
    setMail ,
    deleteInsMail,
    getInsMailUI
}