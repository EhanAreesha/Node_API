var db = require('../core/db');
var IpAddress = require('../iPAddress');

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
var getBranchByID = function (req, res, insid, id) {

    console.log("spGetInsBranch " + insid + "," + id + "");

    db.executeSql("spGetInsBranch "+insid+","+id+"",function (data,err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    }); 
}
var getBranchByInsID = function (req, res, insid) {

    console.log("spGetInsBranchDDLforParentBranch " + insid + "");

    db.executeSql("spGetInsBranchDDLforParentBranch " + insid + "",function (data,err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    }); 
}
var getBranchByBranchID = function (req, res, insid, id) {

    console.log("spGetInsBranch " + 0 + "," + id + "");

    db.executeSql("spGetInsBranch "+0+","+id+"",function (data,err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    }); 
}

var deleteInsBranch = function (req, res, reqBody) {


    console.log("spDeleteInsBranch " + reqBody.BrunchID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'");

    db.executeSql("spDeleteInsBranch " + reqBody.BrunchID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getInsBranchUI = function (req, res, reqBody) {


    console.log("spGetInsBranch " + reqBody.InstituteID + "," + reqBody.BrunchID + ", " + reqBody.LoggedUser + ", " + reqBody.PageNo + ", " + reqBody.RowCountPerPage + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'");

    db.executeSql("spGetInsBranch " + reqBody.InstituteID + "," + reqBody.BrunchID + ", " + reqBody.LoggedUser + ", " + reqBody.PageNo + ", " + reqBody.RowCountPerPage + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'", function (data, err) {
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
    getBranchByID,
    getBranchByInsID,
    getBranchByBranchID,
    deleteInsBranch,
    getInsBranchUI
}