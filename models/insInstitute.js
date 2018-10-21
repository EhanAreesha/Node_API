var db = require('../core/db');
var BaseJoi = require('joi');
var Extension = require('joi-date-extensions');
var IpAddress = require('../iPAddress');
const Joi = BaseJoi.extend(Extension);

//const setinsInstituteSchema = Joi.object().keys({
//    InstituteID: Joi.number().integer().options({ convert: false }).required(),
//    InstituteCode: Joi.string().allow("", null).options({ convert: false }).required(),
//    ResigtrationNo: Joi.string().allow("", null).options({ convert: false }).required(),
//    InstituteNo: Joi.string().allow("", null).options({ convert: false }).required(),
//    InstituteName: Joi.string().allow("", null).options({ convert: false }).required(),
//    InstituteShortName: Joi.string().allow("", null).options({ convert: false }).required(),
//    InstituteTypeID: Joi.number().integer().allow(null).options({ convert: false }).required(),
//    BoardID: Joi.number().integer().allow(null).options({ convert: false }).required(),
//    StatusID: Joi.number().integer().allow(null).options({ convert: false }).required(),
//    FounderName: Joi.string().allow("", null).options({ convert: false }).required(),
//    EstublishedYear: Joi.number().integer().allow(null).options({ convert: false }),
//    ContactNo: Joi.string().allow("", null).options({ convert: false }).required(),
//    NoOfBuilding: Joi.number().integer().allow(null).options({ convert: false }),

//    InstituteLogo: Joi.string().allow("", null).options({ convert: false }),
//    PrinSignatureURL: Joi.string().allow("", null).options({ convert: false }),
//    IsActive: Joi.number().min(0).max(1).allow(null).options({ convert: false }).required(),
//    CreateBy: Joi.number().integer().allow(null).options({ convert: false }).required(),
//    CreateOn: Joi.string().allow("", null).options({ convert: false }),
//    CreatePc: Joi.string().allow("", null).options({ convert: false }).required(),
//    UpdateBy: Joi.number().integer().allow(null).options({ convert: false }).required(),
//    UpdateOn: Joi.string().allow("", null).options({ convert: false }),
//    UpdatePc: Joi.string().allow("", null).options({ convert: false }).required(),
//    IsDeleted: Joi.number().min(0).max(1).allow(null).options({ convert: false }).required(),
//    DeleteBy: Joi.number().integer().allow(null).options({ convert: false }).required(),
//    DeleteOn: Joi.string().allow("", null).options({ convert: false }),
//    DeletePc: Joi.string().allow("", null).options({ convert: false }).required(),
//});

var setinsInstitute = function (req, res, reqBody) {
    var bool = reqBody.IsActive === true ? 1 : 0;

    var sql = "spSetInsInstitute  " + parseInt(reqBody.InstituteID) + ", '" + reqBody.InstituteCode + "', '" + reqBody.ResigtrationNo + "', '" + reqBody.InstituteNo + "', '" + reqBody.InstituteName + "', '" + reqBody.InstituteShortName + "',  " + reqBody.InstituteTypeID + "," + reqBody.BoardID + ", " + reqBody.StatusID + ", '" + reqBody.FounderName + "', " + reqBody.EstublishedYear + ", '" + reqBody.ContactNo + "', " + reqBody.NoOfBuilding + ",'" + reqBody.InstituteLogo + "', '" + reqBody.PrinSignatureURL + "'," + bool + ", " + reqBody.CreateBy + ", '" + reqBody.CreateOn + "', '" + reqBody.CreatePc + "', " + reqBody.UpdateBy + ", '" + reqBody.UpdateOn + "', '" + reqBody.UpdatePc + "', " + reqBody.IsDeleted + ", " + reqBody.DeleteBy + ", '" + reqBody.DeleteOn + "', '" + reqBody.DeletePc + "'";
    // var sql = "spSetInsInstitute  " + reqBody.InstituteID + ", '" + reqBody.InstituteCode + "', '" + reqBody.ResigtrationNo + "', '" + reqBody.InstituteNo + "', '" + reqBody.InstituteName + "', '" + reqBody.InstituteShortName + "', " + reqBody.BoardID + ", " + reqBody.StatusID + ", '" + reqBody.FounderName + "', " + reqBody.EstublishedYear + ", '" + reqBody.ContactNo + "', " + reqBody.NoOfBuilding + ", " + reqBody.CreateBy + ", '" + reqBody.CreateOn + "', '" + reqBody.CreatePc + "', " + reqBody.UpdateBy + ", '" + reqBody.UpdateOn + "', '" + reqBody.UpdatePc + "', " + reqBody.IsDeleted + ", " + reqBody.DeleteBy + ", '" + reqBody.DeleteOn + "', '" + reqBody.DeletePc + "'";

    console.log(sql);
    //  console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
            
        }
    });
}



var getAllInstitute = function (req, res) {

    console.log("spGetInsInstitute ");

    db.executeSql("spGetInsInstitute ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

//var getAllStatus = function (req, res) {    

//    db.executeSql("spGetCmnStatus 0", function (data, err) {
//        if (err) {
//            throw err;
//        } else {
//            res.send(data.recordset);
//        }
//        res.end();
//    });
//}
var getInstituteType = function (req, res) {

    console.log("spGetCmnInstituteType ");

    db.executeSql("spGetCmnInstituteType ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getInstituteByID = function (req, res, id) {

    console.log("spGetInsInstitute " + id + "");

    db.executeSql("spGetInsInstitute " + id + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getInstituteAvailableSMSByInsId = function (req, res, insId) {

    db.executeSql("spGetInstituteSMS " + insId + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var setInsInstituteSMSOrder = function (req, res, reqBody) {
    
    var sql = "spSetInsInstituteSMSOrder  " + reqBody.SMSOrderID + ", '" + reqBody.SMSOrderNo + "', " + reqBody.InstituteID + ", " + reqBody.OrderdSMS + ", " + reqBody.PaidAmount + ", " + reqBody.PaymentType + ", '" + reqBody.TrxID + "', " + reqBody.IsBuyComplete + ", " + reqBody.IsSalesComplete + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "' ";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);

        }
    });
}

var getInsInstituteSMSOrder = function (req, res, insId) {

    db.executeSql("spGetInsInstituteSMSOrder " + insId + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getInsInstituteSMSOrderByOrderID = function (req, res, insId, SMSOrderID) {

    db.executeSql("spGetInsInstituteSMSOrderByOrderID " + insId + ", " + SMSOrderID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getinsInstituteSMSBodyBySetupId = function (req, res, SMSSetupId, insId) {

    db.executeSql("spGetInsSMSSetup " + SMSSetupId + ", " + insId + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

// var getInstituteCatagory = function(req,res) {
//     db.executeSql("spGetCmnInstituteCategory ",function (data,err) {
//         if (err) {
//             throw err;
//         } else {
//             res.send(data.recordset);
//         }
//         res.end();
//     }); 
// }

var getInstituteUI = function (req, res, reqBody) {

    console.log("spGetInsInstituteUIGrid " + reqBody.InstituteID + ", " + reqBody.LoggedUser + ", " + reqBody.PageNo + ", " + reqBody.RowCountPerPage + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'");

    db.executeSql("spGetInsInstituteUIGrid " + reqBody.InstituteID + ", " + reqBody.LoggedUser + ", " + reqBody.PageNo + ", " + reqBody.RowCountPerPage + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var deleteInstitute = function (req, res, reqBody) {

    console.log("spDeleteInsInstitute " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'");

    db.executeSql("spDeleteInsInstitute " + reqBody.InstituteID+ ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


module.exports = {
    setinsInstitute,
    getAllInstitute,
    getInstituteByID,
    getInstituteAvailableSMSByInsId,
    setInsInstituteSMSOrder,
    getInsInstituteSMSOrder,
    getInsInstituteSMSOrderByOrderID,
    getinsInstituteSMSBodyBySetupId,
    //getAllStatus,
    deleteInstitute,
    getInstituteType,
    getInstituteUI

}