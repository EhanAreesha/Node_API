var db = require('../core/db');
var IpAddress = require('../iPAddress');


var setAdress = function(req,res,reqbody) {

    var sql = "spSetCmnAddressCity " + reqbody.CityID + ",'" + reqbody.CityName + "','" + reqbody.CityShortName + "'," + reqbody.StateID + "," + reqbody.CreateBy + ",'" + reqbody.CreateOn + "','" + reqbody.CreatePc + "'," + reqbody.UpdateBy + ",'" + reqbody.UpdateOn + "','" + reqbody.UpdatePc + "'," + reqbody.IsDeleted + "," + reqbody.DeleteBy + ",'" + reqbody.DeleteOn + "','" + reqbody.DeletePc + "'";
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

//get cmn Adress
var getAdress = function (req, res) {

    console.log("spGetCmnAddressCity 0");

    db.executeSql("spGetCmnAddressCity 0",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var getCityById = function (req, res, id) {

    console.log("spGetCmnAddressCity " + id + "");

    db.executeSql("spGetCmnAddressCity "+id+"",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
            res.send(data.recordset);
        }
    	res.end();
    });
}
var deleteAddress = function (req, res, reqBody) {

    console.log("[spDeleteCmnAddressCity] " + reqBody.CityID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'");

    db.executeSql("[spDeleteCmnAddressCity] " + reqBody.CityID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}



module.exports = {
    setAdress,
    getAdress,
    getCityById ,
    deleteAddress
}