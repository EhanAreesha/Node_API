var db = require('../core/db');

var setBranch = function(req,res,reqbody) {
    var sql = "spSetInsBranch " + reqbody.BrunchID + ",'"+reqbody.BrunchNo+"','" + reqbody.BrunchName + "'," + reqbody.ParentID + ","+ reqbody.InstituteID +","+ reqbody.CreateBy + ",'" +reqbody.CreateOn+ "','" +reqbody.CreatePc+ "', " + reqbody.UpdateBy + ",'" +reqbody.UpdateOn+ "','"+ reqbody.UpdatePc +"'," + reqbody.IsDeleted + "," + reqbody.DeleteBy+ ",'" +reqbody.DeleteOn+ "','" +reqbody.DeletePc+ "'";
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
var getBranch = function (req, res) {

    console.log("spGetInsBranch ");

    db.executeSql("spGetInsBranch ",function (data,err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    }); 
}
var getBranchByID = function (req, res, id) {

    console.log("spGetInsBranch " + id + "");

    db.executeSql("spGetInsBranch "+id+"",function (data,err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    }); 
}

module.exports = {
    setBranch,
    getBranch,
    getBranchByID
}