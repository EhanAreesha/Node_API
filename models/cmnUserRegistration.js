var db = require('../core/db');
var IpAddress = require('../iPAddress');

function Delay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 50);
    });
}

var postCmnUserResistration = function (req, res, reqBody) {
    if (reqBody.UserID !== undefined) {
        var sql = "spSetCmnUserResistration  " + reqBody.UserClassID + ", " + reqBody.UserID + ", '" + reqBody.RFID + "', '" + reqBody.RollNo + "', " + reqBody.BoardID + ", " + reqBody.SessionID + ", " + reqBody.BrunchID + ", " + reqBody.MediumID + ", " + reqBody.DepartmentID + ", " + reqBody.ShiftID + ", " + reqBody.ClassID + ", " + reqBody.SectionID + ", '" + reqBody.StudentNo + "', " + reqBody.CompulsorySubjectID + ", " + reqBody.OptionalSubjectID + ",'" + reqBody.Remarks + "', " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
        console.log(sql);
        db.executeSql(sql, function (data, err) {

            if (err) {
                throw err;
            } else {
                console.log(data.recordset[0]);
                res.send(data.recordset);
            }
            res.end();
        });
    }
    else console.log("Student not selected");
}

var putCmnUserResistration = function (req, res, reqBody) {
    debugger;
    if (reqBody.AllStudentMeritArray.length > 0) {
        var MeritArray = reqBody.AllStudentMeritArray;
        async function asyncCall() {
            for (var i = 0; i < MeritArray.length; i++) {
                var sql = "spPutCmnUserResistration  " + 0 + ", " + MeritArray[i].StudentID + ", '" + MeritArray[i].RFID + "', '" + MeritArray[i].ProposedRoll + "', " + MeritArray[i].BoardID + ", " + MeritArray[i].SessionID + ", " + MeritArray[i].BrunchID + ", " + reqBody.MediumID + ", " + MeritArray[i].DepartmentID + ", " + MeritArray[i].ShiftID + ", " + reqBody.ClassID + ", " + MeritArray[i].SectionID + ", '" + MeritArray[i].StudentNo + "', " + MeritArray[i].CompulsorySubjectID + ", " + MeritArray[i].OptionalSubjectID + ",'" + MeritArray[i].Remarks + "', " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
                console.log(sql);
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        //console.log(data.recordset[0]);
                        //res.send(data.recordset);
                    }
                    //res.end();
                });
                res.end();
            }
        }
        asyncCall();
    }
    //else console.log("Student not selected");
}


var getAllStudentByInsID = function (req, res, reqBody) {
    var sql = "spGetAllStudent " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", " + reqBody.pageNumber + ", " + reqBody.pageSize + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'";
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




var getCmnUserResistrationByUserID = function (req, res, id) {

    console.log("spGetCmnUserResistrationByUserID " + id + "");

    db.executeSql("spGetCmnUserResistrationByUserID " + id + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var GetAccYearlyFeesForReceivebleGenerate = function (req, res, InstituteID, MediumID, ClassID, DepartmentID) {

    var sql = "spGetAccYearlyFeesForReceivebleGenerate " + InstituteID + "," + MediumID + "," + ClassID + "," + DepartmentID + "";
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
    getAllStudentByInsID,
    getCmnUserResistrationByUserID,
    postCmnUserResistration,
    GetAccYearlyFeesForReceivebleGenerate,
    putCmnUserResistration
}