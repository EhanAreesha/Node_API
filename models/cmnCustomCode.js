var db = require('../core/db');
var BaseJoi = require('joi');
var Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
var IpAddress = require('../iPAddress');

var setCustomCode = function (req, res, reqbody) {
    var customCodeDetails = reqbody.customCodeDetails;
    var retVal = '';
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    var sql = "spSetCmnCustomCode " + reqbody.RecordID + "," + reqbody.MenuID + "," + reqbody.BrunchID + ",'" + reqbody.Prefix + "','" + reqbody.Suffix + "'," + reqbody.IsInstitute + ",'" + reqbody.IsBranchCode + "'," + reqbody.InstituteID + "," + reqbody.LoggedUserID + ", '" + IpAddress.IP + "'";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            retVal = data.recordset[0].ReturnValue;

            if (customCodeDetails.length > 0) {
                async function asyncCall() {
                    for (let j = 0; j < customCodeDetails.length; j++) {
                        var detailSql = "spSetCmnCustomCodeDetail " + customCodeDetails[j].RecordDetailID + "," + retVal + ",'" + customCodeDetails[j].ParameterName + "'," + customCodeDetails[j].Length + ",'" + customCodeDetails[j].Seperator + "'," + customCodeDetails[j].Sequence + ", " + customCodeDetails[j].IsDeleted + ", " + reqbody.InstituteID + "," + reqbody.LoggedUserID + ", '" + IpAddress.IP + "'";
                        var detailDelay = await Delay();
                        db.executeSql(detailSql, function (data, err) {
                            if (err) {
                                throw err;
                            } else {
                                //console.log('detail')
                            }
                            //res.end();
                        });

                    }
                }
                asyncCall();
            }
        }
    });
    res.end();
}

var GetAllCustomCode = function (req, res, reqBody) {
    var sql = "spGetCustomCode 0, " + reqBody.InstituteID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + ", " + reqBody.pageSize + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'";
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

var spGetCustomCodeDetailByID = function (req, res, reqBody) {
    var sql = "spGetCustomCodeDetailByID " + reqBody.InstituteID + "," + reqBody.LoggedUserID + "," + reqBody.RecordID + "";
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

var spDeleteCustomCodeMasterDetail = function (req, res, RecordID) {
    var sql = "spDeleteCustomCodeMasterDetail " + RecordID + "";
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

module.exports = {
    setCustomCode,
    GetAllCustomCode,
    spGetCustomCodeDetailByID,
    spDeleteCustomCodeMasterDetail
}