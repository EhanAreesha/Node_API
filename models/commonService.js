var db = require('../core/db');
var BaseJoi = require('joi');
var Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
var IpAddress = require('../iPAddress');

var getAllReation = function (req, res) {

    console.log("spGetCmnRelation ");

    db.executeSql("spGetCmnRelation ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllReligion = function (req, res) {

    console.log("spGetCmnReligion ");

    db.executeSql("spGetCmnReligion ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllBooldGroup = function (req, res) {

    console.log("spGetCmnBloodGroup ");

    db.executeSql("spGetCmnBloodGroup ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllCountry = function (req, res) {

    console.log("spGetCmnAddressCountry ");

    db.executeSql("spGetCmnAddressCountry ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllCity = function (req, res, ID) {

    console.log("spGetCmnAddressCity " + ID + "");

    db.executeSql("spGetCmnAddressCity " + ID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getInsExamforDDL = function (req, res, InstituteID, MediumID, ClassID) {
    db.executeSql("spGetInsExamforDDL " + InstituteID + "," + MediumID + "," + ClassID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllState = function (req, res, ID) {

    console.log("spGetCmnAddressState " + ID + "");

    db.executeSql("spGetCmnAddressState " + ID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
//var getAllBoard = function (req, res) {

//    console.log("spGetCmnBoard ");

//    db.executeSql("spGetCmnBoard ", function (data, err) {
//        if (err) {
//            throw err;
//        } else {
//            res.send(data.recordset);
//        }
//        res.end();
//    });
//}
var getAllExam = function (req, res) {

    console.log("spGetCmnExam ");

    db.executeSql("spGetCmnExam ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllAcademicExam = function (req, res) {

    console.log("spGetCmnAcademicExam ");

    db.executeSql("spGetCmnAcademicExam ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllGrades = function (req, res) {

    console.log("spGetCmnGrade ");

    db.executeSql("spGetCmnGrade ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getEduPassGrade = function (req, res) {

    console.log("spGetCmnEducationPassGrade ");

    db.executeSql("spGetCmnEducationPassGrade ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getAllSession = function (req, res) {

    console.log("spGetCmnSession ");

    db.executeSql("spGetCmnSession ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllGender = function (req, res) {

    console.log("spGetCmnGender ");

    db.executeSql("spGetCmnGender ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getCmnSubject = function (req, res) {

    console.log("spGetInsSubject ");

    db.executeSql("spGetInsSubject ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });

}

var getInstituteShift = function (req, res, instituteId) {

    var sql = "spGetInsShiftddl " + instituteId + "";
    console.log(sql);

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
            console.log(data.recordset[0]);
        }
        res.end();
    });

}

var getSubjectByParms = function (req, res, InstituteID, DepartmentID, MediumID, ClassID) {

    console.log("spGetInsSubject " + InstituteID + "," + DepartmentID + "," + MediumID + "," + ClassID + "");

    db.executeSql("spGetInsSubject " + InstituteID + "," + DepartmentID + "," + MediumID + "," + ClassID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getExamEntrySubjectByParms = function (req, res, InstituteID, DepartmentID, MediumID, ClassID) {

    console.log("spGetExamInsSubject " + InstituteID + "," + DepartmentID + "," + MediumID + "," + ClassID + "");

    db.executeSql("spGetExamInsSubject " + InstituteID + "," + DepartmentID + "," + MediumID + "," + ClassID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });

}

var GetClassWiseSubject = function (req, res, InstituteID, DepartmentID, MediumID, ClassID) {

    console.log("spGetClassWiseSubject " + InstituteID + "," + DepartmentID + "," + MediumID + "," + ClassID + "");

    db.executeSql("spGetClassWiseSubject " + InstituteID + "," + DepartmentID + "," + MediumID + "," + ClassID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var postSubject = function (req, res, reqBody) {

    var subjectArr = reqBody.subjectArray;
    console.log(reqBody.MediumID);
    for (var i = 0; i < subjectArr.length; i++) {
        if (subjectArr[i].InsSubjectID === null) {
            subjectArr[i].InsSubjectID = 0;
        }

    }
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 20);
        });
    }
    async function asyncCall() {
        if (subjectArr.length > 0) {
            for (var i = 0; i < subjectArr.length; i++) {
                var IsOptional = subjectArr[i].IsOptional === true || subjectArr[i].IsOptional === 1 ? 1 : 0;
                var sql = "spSetInsSubject   " + subjectArr[i].InsSubjectID + "," + subjectArr[i].SubjectID + "," + reqBody.MediumID + ", " + reqBody.DepartmentID + ", " + reqBody.ClassID + ", " + subjectArr[i].IsActive + ", " + subjectArr[i].IsCombined + ", " + IsOptional + ", " + subjectArr[i].ParentID + ", " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
                console.log(sql);
                var detailDelay = await Delay();
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {

                    }
                });
            }
            res.end();
        }

    }
    asyncCall();

}


var getInstituteBrunchDdl = function (req, res, instituteId) {

    var sql = "spGetInsBranchDdl " + instituteId + " ";
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

var getInstituteMediumDdl = function (req, res, instituteId) {
    var sql = "spGetInsMediumddl " + instituteId + " ";
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

var getInstituteMedium = function (req, res, instituteId) {

    console.log("spGetInsMedium " + instituteId + " ");

    db.executeSql("spGetInsMedium " + instituteId + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getInstituteClass = function (req, res, instituteId) {

    console.log("spGetInsClassddl " + instituteId + " ");

    db.executeSql("spGetInsClassddl " + instituteId + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getInsClassByInstituteAndMediumID = function (req, res, InstituteID, MediumID) {

    console.log("spGetInsClassByMediumID " + InstituteID + "," + MediumID + " ");

    db.executeSql("spGetInsClassByMediumID " + InstituteID + "," + MediumID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getInstituteSection = function (req, res, instituteId, classID, DepartmentID) {
    var sql = "spGetInsSectionddl " + instituteId + "," + classID + "," + DepartmentID + " ";
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
var getInstituteDepertment = function (req, res, instituteId) {

    console.log("spGetInsDepartmentddl " + instituteId + " ");

    db.executeSql("spGetInsDepartmentddl " + instituteId + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getStudentByClassNShiftNMediumNRoll = function (req, res, instituteId, ClassID, SectionID, DepartmentID, MediumID, ShiftID, UserID) {

    console.log("spGetClassWiseStudent " + instituteId + "," + ClassID + "," + SectionID + "," + DepartmentID + "," + MediumID + "," + ShiftID + "," + UserID + " ");

    db.executeSql("spGetClassWiseStudent " + instituteId + "," + ClassID + "," + SectionID + "," + DepartmentID + "," + MediumID + "," + ShiftID + "," + UserID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getPaymentMethod = function (req, res) {

    console.log("spGetCmnPaymentMethod ");

    db.executeSql("spGetCmnPaymentMethod ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getCurrency = function (req, res) {

    console.log("spGetCmnCurrency ");

    db.executeSql("spGetCmnCurrency ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getStudentClassWiseByUserID = function (req, res, UserID) {

    console.log("spGetClassWiseStudentByUserID " + UserID + " ");

    db.executeSql("spGetClassWiseStudentByUserID " + UserID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var getTotalStudentAndTotalAttendence = function (req, res, CurrentDate, InstituteID, UserTypeID) {

    console.log("spGetHrmDeviceAttendanceTotal 0,0,0,0,0, '" + CurrentDate + "'," + InstituteID + "," + UserTypeID + " ");

    db.executeSql("spGetHrmDeviceAttendanceTotal 0,0,0,0,0, '" + CurrentDate + "'," + InstituteID + "," + UserTypeID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getTotalStudentAndTotalAttendenceDashBoard = function (req, res, CurrentDate, InstituteID, UserTypeID) {

    console.log("spGetStudentHrmDeviceAttendanceTotalDashBoard 0,0,0,0,0, '" + CurrentDate + "'," + InstituteID + "," + UserTypeID + " ");

    db.executeSql("spGetStudentHrmDeviceAttendanceTotalDashBoard 0,0,0,0,0, '" + CurrentDate + "'," + InstituteID + "," + UserTypeID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getAllTeacher = function (req, res, CurrentDate, InstituteID, UserTypeID) {

    console.log("spGetHrmDeviceAttendanceTotalForDashBoard 0,0,0,0, '" + CurrentDate + "'," + InstituteID + "," + UserTypeID + " ");

    db.executeSql("spGetHrmDeviceAttendanceTotalForDashBoard 0,0,0,0, '" + CurrentDate + "'," + InstituteID + "," + UserTypeID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getStudentList = function (req, res, reqBody) {
    //," + reqBody.ExamID + "
    var sql = "spGetClassWiseStudentByUserID " + reqBody.UserID + ", " + reqBody.InstituteID + ", " + reqBody.ClassID + ", " + reqBody.SectionID + ", " + reqBody.DepartmentID + ", " + reqBody.MediumID + ", " + reqBody.ShiftID + "," + reqBody.ExamID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + "";
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

var MediumWiseClassDDL = function (req, res, InstituteID, MediumID) {

    console.log("spGetMediumWiseClassDDL " + InstituteID + ", " + MediumID + " ");

    db.executeSql("spGetMediumWiseClassDDL " + InstituteID + ", " + MediumID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var ClassWiseDepartmentDDL = function (req, res, InstituteID, ClassID, MediumID) {

    console.log("spGetClassWiseDepartmentDDL " + InstituteID + ", " + ClassID + ", " + MediumID + " ");

    db.executeSql("spGetClassWiseDepartmentDDL " + InstituteID + ", " + ClassID + ", " + MediumID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getCmnYear = function (req, res) {

    console.log("spGetCmnYear");

    db.executeSql("spGetCmnYear", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getCmnMonth = function (req, res) {

    console.log("spGetCmnMonth");

    db.executeSql("spGetCmnMonth", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getAllTeacher = function (req, res, CurrentDate, InstituteID, UserTypeID) {

    console.log("spGetHrmDeviceAttendanceTotalForDashBoard 0,0,0,0, '" + CurrentDate + "'," + InstituteID + "," + UserTypeID + " ");

    db.executeSql("spGetHrmDeviceAttendanceTotalForDashBoard 0,0,0,0, '" + CurrentDate + "'," + InstituteID + "," + UserTypeID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getNoticeTypeDDL = function (req, res) {

    //console.log("spGetCmnNoticeTypeDDL");

    db.executeSql("spGetCmnNoticeTypeDDL", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getNoticeForDDL = function (req, res) {

    console.log("spGetCmnNoticeTypeDDL");

    db.executeSql("spGetCmnUserType 0", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getDashBoardCmnUserType = function (req, res, LoggedUserID) {

    console.log("spGetDashBoardCmnUserType " + LoggedUserID + "");

    db.executeSql("spGetDashBoardCmnUserType " + LoggedUserID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var spSetToDayAndToMonthsExpense = function (req, res, InstituteID, BranchID) {

    var sql = "spSetToDayAndToMonthsExpense  " + InstituteID + "," + BranchID + "";
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

var SetFullYearCalendar = function (req, res, reqbody) {
    console.log("SetFullYearCalendar '" + reqbody.StartOfYear + "', '" + reqbody.EndOfYear + "', " + reqbody.InstituteID + "");

    var sql = "SetFullYearCalendar '" + reqbody.StartOfYear + "', '" + reqbody.EndOfYear + "', " + reqbody.InstituteID + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var IfExistAcademicYearCalendar = function (req, res, YearName, InstituteID) {
    console.log("spGetIfExistAcademicYearCalendar '" + YearName + "', " + InstituteID + "");

    var sql = "spGetIfExistAcademicYearCalendar '" + YearName + "', " + InstituteID + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var RemoveFullYearCalendar = function (req, res, YearName, InstituteID) {
    console.log("RemoveFullYearCalendar '" + YearName + "', " + InstituteID + "");

    var sql = "spRemoveFullYearCalendar '" + YearName + "', " + InstituteID + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var spGetDashBoardCalendar = function (req, res, StartDate, EndDate, InstituteID) {
    console.log("spGetDashBoardCalendar '" + StartDate + "', '" + EndDate + "', " + InstituteID + "");

    var sql = "spGetDashBoardCalendar '" + StartDate + "', '" + EndDate + "', " + InstituteID + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var GetOptionalAndCompulsorySubject = function (req, res, InstituteID, MediumID, ClassID, DepartmentID) {
    console.log("spGetOptionalAndCompulsorySubject " + InstituteID + "," + MediumID + "," + ClassID + "," + DepartmentID + "");

    var sql = "spGetOptionalAndCompulsorySubject " + InstituteID + "," + MediumID + "," + ClassID + "," + DepartmentID + "";
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
    getAllReation,
    getAllReligion,
    getAllBooldGroup,
    getAllCountry,
    getAllCity,
    getAllState,
    //getAllBoard,
    getAllExam,
    getAllGrades,
    getEduPassGrade,
    getAllSession,
    getAllGender,
    getCmnSubject,
    getSubjectByParms,
    postSubject,
    getInstituteShift,
    getInstituteMedium,
    getInstituteClass,
    getInstituteSection,
    getInstituteDepertment,
    getStudentByClassNShiftNMediumNRoll,
    getPaymentMethod,
    getCurrency,
    getStudentClassWiseByUserID,
    getTotalStudentAndTotalAttendence,
    getStudentList,
    getInstituteMediumDdl,
    getInstituteBrunchDdl,
    getAllAcademicExam,
    MediumWiseClassDDL,
    ClassWiseDepartmentDDL,
    getCmnYear,
    getAllTeacher,
    getNoticeTypeDDL,
    getNoticeForDDL,
    GetClassWiseSubject,
    spSetToDayAndToMonthsExpense,
    SetFullYearCalendar,
    IfExistAcademicYearCalendar,
    RemoveFullYearCalendar,
    spGetDashBoardCalendar,
    getDashBoardCmnUserType,
    GetOptionalAndCompulsorySubject,
    getInsExamforDDL,
    getTotalStudentAndTotalAttendenceDashBoard,
    getCmnMonth,
    getExamEntrySubjectByParms
}
