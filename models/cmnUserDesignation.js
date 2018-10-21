var db = require('../core/db');

var setUserDesignation = function(req,res,reqbody) {
    var sql = "spSetCmnUserDesignation " + reqbody.UserDesignationID + ",'" + reqbody.DesignationName + "',"+ reqbody.StatusID +"," + reqbody.InstituteID + ","+ reqbody.CreateBy + ",'" +reqbody.CreateOn+ "','" +reqbody.CreatePc+ "', " + reqbody.UpdateBy + ",'" +reqbody.UpdateOn+ "','"+ reqbody.UpdatePc +"'," + reqbody.IsDeleted + "," + reqbody.DeleteBy+ ",'" +reqbody.DeleteOn+ "','" +reqbody.DeletePc+ "'";
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
var getUserDesignation = function (req, res) {

    console.log("spGetCmnUserDesignation ");

    db.executeSql("spGetCmnUserDesignation ",function (data,err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    }); 
}
var getUserDesignationByID = function (req, res, id) {

    console.log("spGetCmnUserDesignation " + id + "");

    db.executeSql("spGetCmnUserDesignation "+id+"",function (data,err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    }); 
}


module.exports = {
    setUserDesignation,
    getUserDesignation,
    getUserDesignationByID
    
}