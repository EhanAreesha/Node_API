var db = require('../core/db');
var IpAddress = require('../iPAddress');

var setUserAuthentication = function (req, res, reqBody) {

            
    var sql = "spSetCmnUserAuthentication   " + reqBody.AuthenticationID + ", " + reqBody.UserID + ", '" + reqBody.LoginID + "', '" + reqBody.LoginEmail + "', '" + reqBody.LoginPhone + "', '" + reqBody.Password + "', '" + reqBody.ConfirmPassword + "', '" + reqBody.RegistrationDate + "', '" + reqBody.ExpireDate + "','" + reqBody.ExpireTime+ "', '" + reqBody.ActivationDate + "', '" + reqBody.ActivationTime + "',  " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
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
var deleteUserAuthentication = function (req, res, reqBody) {

    console.log("spDeleteCmnUserAuthentication " + reqBody.AuthenticationID + ", " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'");

    db.executeSql("spDeleteCmnUserAuthentication " + reqBody.AuthenticationID + ", " + reqBody.InstituteID+ ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getExistingParams = function (req, res, reqBody) {

    console.log("spCmnUserAuthenticationExistingParams '" + reqBody.Property + "', '" + reqBody.Flag + "'");

    db.executeSql("spCmnUserAuthenticationExistingParams '" + reqBody.Property + "', '" + reqBody.Flag+ "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var getUserAuthenticationByInsID = function (req, res, reqBody) {
    var sql = "spGetCmnUserAuthentication " + reqBody.InstituteID + ", " + reqBody.AuthenticationID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var spGetCmnUserAuthenticationByUserID = function (req, res, reqBody) {
    var sql = "spGetCmnUserAuthenticationByUserID " + reqBody.InstituteID + ", " + reqBody.UserID + "," + reqBody.UserTypeID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + "";
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

//var getUserAuthenticationByInsID = function(req,res,InsId,AuthID) {
//    db.executeSql("spGetCmnUserAuthentication "+InsId+","+AuthID+"",function (data,err) {
//        if (err) {
//            throw err;
//        } else {
//            res.send(data.recordset);
//        }
//        res.end();
//    }); 
//}




// @UserID int = 0,
// @UserTypeID int = 0,
// @InstituteID int = 0
// ,@LoggedUser		INT
// ,@PageNo			INT
// ,@RowCountPerPage	INT
// // ,@IsPaging			INT
// var getTotalUserFromCmnUser = function (req, res, reqBody) {
//     db.executeSql("spGetCmnUserForAuthentication '" + reqBody.UserID + "', '" + reqBody.UserTypeID+ "','" + reqBody.InstituteID + "', '" + reqBody.LoggedUser+ "'", function (data, err) {
//         if (err) {
//             throw err;
//         } else {
//             res.send(data.recordset);
//         }
//         res.end();
//     });
// }



module.exports = {
    setUserAuthentication,
    getUserAuthenticationByInsID,
    deleteUserAuthentication,
    getExistingParams,
    spGetCmnUserAuthenticationByUserID
    // getTotalUserFromCmnUser
   
}