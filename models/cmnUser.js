const express = require('express');
const server = express();
const bodyParser = require('body-parser');
var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');
var BaseJoi = require('joi');
var Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
var JoiValidator = require("../validator/userValidator");
var nodemailer = require('nodemailer');
var IpAddress = require('../iPAddress');
//global.user_session = {};
//global.config = require('./config/config.js');


const setUserSchema = Joi.object().keys(JoiValidator.userSchema);

var setUserGuardian = function (req, res, reqBody) {

    Joi.validate({
        UserID: reqBody.UserID,
        UserNo: reqBody.UserNo,
        UserTypeID: reqBody.UserTypeID,
        UserTitleID: reqBody.UserTitleID,
        UserFirstName: reqBody.UserFirstName,
        UserMiddleName: reqBody.UserMiddleName,
        UserLastName: reqBody.UserLastName,
        UserFullName: reqBody.UserFullName,
        NickName: reqBody.NickName,
        EmailID: reqBody.EmailID,
        SkypeID: reqBody.SkypeID,
        FacebookID: reqBody.FacebookID,
        WhatsApp: reqBody.WhatsApp,
        Viber: reqBody.Viber,
        LinkedIN: reqBody.LinkedIN,
        ParAddress: reqBody.ParAddress,
        ParThana: reqBody.ParThana,
        ParPostCode: reqBody.ParPostCode,
        ParCountryID: reqBody.ParCountryID,
        ParStateID: reqBody.ParStateID,
        ParCityID: reqBody.ParCityID,
        PreAddress: reqBody.PreAddress,
        PreThana: reqBody.PreThana,
        PrePostCode: reqBody.PrePostCode,
        PreCountryID: reqBody.PreCountryID,
        PreStateID: reqBody.PreStateID,
        PreCityID: reqBody.PreCityID,
        ReligionID: reqBody.ReligionID,
        MobileNo: reqBody.MobileNo,
        PhoneNo: reqBody.PhoneNo,
        UniqueIdentity: reqBody.UniqueIdentity,
        BloodGroupID: reqBody.BloodGroupID,
        Weigth: reqBody.Weigth,
        Height: reqBody.Height,
        DOB: reqBody.DOB,
        BirthCertificate: reqBody.BirthCertificate,
        PassportNO: reqBody.PassportNO,
        ImageUrl: reqBody.ImageUrl,
        SignatureUrl: reqBody.SignatureUrl,
        FingerUrl: reqBody.FingerUrl,
        NID: reqBody.NID,
        OfficeID: reqBody.OfficeID,
        GenderID: reqBody.GenderID,
        Remarks: reqBody.Remarks,
        IsActive: reqBody.IsActive,
        StatusID: reqBody.StatusID,
        InstituteID: reqBody.InstituteID,
        CreateBy: reqBody.CreateBy,
        CreateOn: reqBody.CreateOn,
        CreatePc: reqBody.CreatePc,
        UpdateBy: reqBody.UpdateBy,
        UpdateOn: reqBody.UpdateOn,
        UpdatePc: reqBody.UpdatePc,
        IsDeleted: reqBody.IsDeleted,
        DeleteBy: reqBody.DeleteBy,
        DeleteOn: reqBody.DeleteOn,
        DeletePc: reqBody.DeletePc,
    }, setUserSchema, function (err, reqBody) {
        if (err) {
            res.send(err.details[0].message);
        } else {
            var sql = "spSetCmnUser  " + reqBody.UserID + ", '" + reqBody.UserNo + "', " + reqBody.UserTypeID + ", " + reqBody.UserTitleID + ", '" + reqBody.UserFirstName + "', '" + reqBody.UserMiddleName + "', '" + reqBody.UserLastName + "', '" + reqBody.UserFullName + "', '" + reqBody.NickName + "', '" + reqBody.EmailID + "', '" + reqBody.SkypeID + "', '" + reqBody.FacebookID + "', '" + reqBody.WhatsApp + "', '" + reqBody.Viber + "', '" + reqBody.LinkedIN + "', '" + reqBody.ParAddress + "', '" + reqBody.ParThana + "', '" + reqBody.ParPostCode + "', " + reqBody.ParCountryID + ", " + reqBody.ParStateID + ", " + reqBody.ParCityID + ", '" + reqBody.PreAddress + "', '" + reqBody.PreThana + "', '" + reqBody.PrePostCode + "', " + reqBody.PreCountryID + ", " + reqBody.PreStateID + ", " + reqBody.PreCityID + ", " + reqBody.ReligionID + ", '" + reqBody.MobileNo + "', '" + reqBody.PhoneNo + "', '" + reqBody.UniqueIdentity + "', " + reqBody.BloodGroupID + ", " + reqBody.Weigth + ", " + reqBody.Height + ", '" + reqBody.DOB + "', '" + reqBody.BirthCertificate + "', '" + reqBody.PassportNO + "', '" + reqBody.ImageUrl + "', '" + reqBody.SignatureUrl + "', '" + reqBody.FingerUrl + "', '" + reqBody.NID + "', '" + reqBody.OfficeID + "', " + reqBody.GenderID + ", '" + reqBody.Remarks + "', " + reqBody.IsActive + ", " + reqBody.StatusID + ", " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
            console.log(sql);

            db.executeSql(sql, function (data, err) {
                if (err) {
                    console.error(err);
                    throw err;
                } else {
                    console.log(data.recordset);
                    res.send(data.recordset);
                }
            });
        }
        //res.end();

    })
}

function Delay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 50);
    });
}

var setUserStudent = function (req, res, reqBody) {

    Joi.validate({
        UserID: reqBody.UserID,
        UserNo: reqBody.userSetup.UserNo,
        UserTypeID: reqBody.UserTypeID,
        UserTitleID: reqBody.userSetup.UserTitleID,
        UserFirstName: reqBody.userSetup.UserFirstName,
        UserMiddleName: reqBody.userSetup.UserMiddleName,
        UserLastName: reqBody.userSetup.UserLastName,
        UserFullName: reqBody.userSetup.UserFullName,
        NickName: reqBody.userSetup.NickName,
        EmailID: reqBody.userSetup.EmailID,
        SkypeID: reqBody.userSetup.SkypeID,
        FacebookID: reqBody.userSetup.FacebookID,
        WhatsApp: reqBody.userSetup.WhatsApp,
        Viber: reqBody.userSetup.Viber,
        LinkedIN: reqBody.userSetup.LinkedIN,
        ParAddress: reqBody.userSetup.ParAddress,
        ParThana: reqBody.userSetup.ParThana,
        ParPostCode: reqBody.userSetup.ParPostCode,
        ParCountryID: reqBody.userSetup.ParCountryID,
        ParStateID: reqBody.userSetup.ParStateID,
        ParCityID: reqBody.userSetup.ParCityID,
        PreAddress: reqBody.userSetup.PreAddress,
        PreThana: reqBody.userSetup.PreThana,
        PrePostCode: reqBody.userSetup.PrePostCode,
        PreCountryID: reqBody.userSetup.PreCountryID,
        PreStateID: reqBody.userSetup.PreStateID,
        PreCityID: reqBody.userSetup.PreCityID,
        ReligionID: reqBody.userSetup.ReligionID,
        MobileNo: reqBody.userSetup.MobileNo,
        PhoneNo: reqBody.userSetup.PhoneNo,
        UniqueIdentity: reqBody.userSetup.UniqueIdentity,
        BloodGroupID: reqBody.userSetup.BloodGroupID,
        Weigth: reqBody.userSetup.Weigth,
        Height: reqBody.userSetup.Height,
        DOB: reqBody.userSetup.DOB,
        BirthCertificate: reqBody.userSetup.BirthCertificate,
        PassportNO: reqBody.userSetup.PassportNO,
        ImageUrl: reqBody.ImageUrl,
        SignatureUrl: reqBody.SignatureUrl,
        FingerUrl: reqBody.FingerUrl,
        NID: reqBody.userSetup.NID,
        OfficeID: reqBody.userSetup.OfficeID,
        GenderID: reqBody.userSetup.GenderID,
        Remarks: reqBody.userSetup.Remarks,
        IsActive: reqBody.userSetup.IsActive,
        StatusID: reqBody.userSetup.StatusID,
        InstituteID: reqBody.userSetup.instituteID,
        LoggedUserID: reqBody.LoggedUserID,
        presentAddressArr: reqBody.presentAddressArray,
        permanentAddressArr: reqBody.permanentAddressArray,
        educationInfoArr: reqBody.educationInfoArray,
        guardianInfoArr: reqBody.guardianInfoArray,
        jobContractArr: reqBody.jobContractArray,
        experinceArr: reqBody.experinceArray,
        guardianModalArray: reqBody.guardianModalArray,
        UserTypeArray: reqBody.UserTypeArray
    }, setUserSchema, function (err, reqBody) {
        if (err) {
            res.send(err.details[0].message);
        } else {
            //----- Add details object from joi array ---//
            var preAddress = reqBody.presentAddressArr;
            var permanentAddress = reqBody.permanentAddressArr;
            var educationInfo = reqBody.educationInfoArr;
            var guardianInfo = reqBody.guardianInfoArr;
            var jobContractInfo = reqBody.jobContractArr;
            var exprienceInfo = reqBody.experinceArr;
            var guardianModalArr = reqBody.guardianModalArray;
            var UserTypeArr = reqBody.UserTypeArray;
            reqBody.UserFullName = reqBody.UserFirstName + ' ' + reqBody.UserMiddleName + ' ' + reqBody.UserLastName;
            //----- Add details object from joi array End---//
            if (reqBody.BloodGroupID === undefined) {
                reqBody.BloodGroupID = null;
            }
            if (reqBody.ReligionID === undefined) {
                reqBody.ReligionID = null;
            }
            if (reqBody.GenderID === undefined) {
                reqBody.GenderID = null;
            }
            var sql = "spSetCmnUser  " + reqBody.UserID + ", '" + reqBody.UserNo + "', " + reqBody.UserTypeID + ", " + reqBody.UserTitleID + ", '" + reqBody.UserFirstName + "', '" + reqBody.UserMiddleName + "', '" + reqBody.UserLastName + "', '" + reqBody.UserFullName + "', '" + reqBody.NickName + "', '" + reqBody.EmailID + "', '" + reqBody.SkypeID + "', '" + reqBody.FacebookID + "', '" + reqBody.WhatsApp + "', '" + reqBody.Viber + "', '" + reqBody.LinkedIN + "', '" + reqBody.ParAddress + "', '" + reqBody.ParThana + "', '" + reqBody.ParPostCode + "', " + reqBody.ParCountryID + ", " + reqBody.ParStateID + ", " + reqBody.ParCityID + ", '" + reqBody.PreAddress + "', '" + reqBody.PreThana + "', '" + reqBody.PrePostCode + "', " + reqBody.PreCountryID + ", " + reqBody.PreStateID + ", " + reqBody.PreCityID + ", " + reqBody.ReligionID + ", '" + reqBody.MobileNo + "', '" + reqBody.PhoneNo + "', '" + reqBody.UniqueIdentity + "', " + reqBody.BloodGroupID + ", " + reqBody.Weigth + ", " + reqBody.Height + ", '" + reqBody.DOB + "', '" + reqBody.BirthCertificate + "', '" + reqBody.PassportNO + "', '" + reqBody.ImageUrl + "', '" + reqBody.SignatureUrl + "', '" + reqBody.FingerUrl + "', '" + reqBody.NID + "', '" + reqBody.OfficeID + "', " + reqBody.GenderID + ", '" + reqBody.Remarks + "', " + reqBody.IsActive + ", " + reqBody.StatusID + ", " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', 0";
            console.log(sql);
            db.executeSql(sql, function (data, err) {
                if (err) {
                    console.error(err);
                    throw err;
                } else {
                    res.send(data.recordset);
                    var userID = data.recordset[0].ReturnValue;
                    //------------------- Details Insert Strat------------------------------//
                    //------------------- If Statement Strat------------------------------//
                    if (preAddress.length > 0 || permanentAddress.length > 0 || educationInfo.length > 0 || guardianInfo.length > 0 || jobContractInfo.length > 0 || exprienceInfo.length > 0 || UserTypeArr.length > 0) {
                        //------------------- Present Address Info Insert Strat------------------------------//
                        if (preAddress.length > 0) {
                            for (var i = 0; i < preAddress.length; i++) {
                                preAddress[i].CityID = preAddress[i].CityID === undefined ? null : preAddress[i].CityID;
                                preAddress[i].StateID = preAddress[i].StateID === undefined ? null : preAddress[i].StateID;
                                var bool = preAddress[i].IsActive === true ? 1 : 0;
                                var IsDeleted = preAddress[i].IsDeleted === true ? 1 : 0;
                                var sql = "spSetCmnUserAddress  " + preAddress[i].UserAddressID + "," + userID + ",'" + preAddress[i].address + "','" + preAddress[i].thana + "','" + preAddress[i].postCode + "'," + preAddress[i].CityID + "," + preAddress[i].StateID + "," + preAddress[i].CountryID + "," + preAddress[i].AddressTypeID + "," + bool + "," + reqBody.InstituteID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + IsDeleted + "";
                                db.executeSql(sql, function (data, err) {
                                    if (err) {
                                        throw err;
                                    } else {
                                        console.log("Presernt Address");
                                    }
                                    //res.end();
                                });
                            }
                        }
                        //------------------- Present Address Info Insert End----------------------------------//
                        //------------------- Permanent Address Info Insert Strat------------------------------//
                        if (permanentAddress.length > 0) {
                            for (var i = 0; i < permanentAddress.length; i++) {
                                var bool = permanentAddress[i].IsActive === true ? 1 : 0;
                                var IsDeleted = permanentAddress[i].IsDeleted === true ? 1 : 0;
                                permanentAddress[i].CityID = permanentAddress[i].CityID === undefined ? null : permanentAddress[i].CityID;
                                permanentAddress[i].StateID = permanentAddress[i].StateID === undefined ? null : permanentAddress[i].StateID;
                                var sql = "spSetCmnUserAddress  " + permanentAddress[i].UserAddressID + "," + userID + ",'" + permanentAddress[i].address + "','" + permanentAddress[i].thana + "','" + permanentAddress[i].postCode + "'," + permanentAddress[i].CityID + "," + permanentAddress[i].StateID + "," + permanentAddress[i].CountryID + "," + permanentAddress[i].AddressTypeID + "," + bool + "," + reqBody.InstituteID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + IsDeleted + "";
                                db.executeSql(sql, function (data, err) {
                                    if (err) {
                                        throw err;
                                    } else {
                                        console.log("Permanent Address");
                                    }
                                    //res.end();
                                });
                            }
                        }
                        //------------------- Permanent Address Info Insert End------------------------------//
                        //------------------- Education Info Insert Strat------------------------------//
                        if (educationInfo.length > 0) {
                            for (var i = 0; i < educationInfo.length; i++) {
                                var IsDeleted = educationInfo[i].IsDeleted === true ? 1 : 0;
                                var sql = "spSetCmnUserEducation  " + educationInfo[i].UserEducationRecordID + "," + userID + ",'" + educationInfo[i].Description + "','" + educationInfo[i].ExamID + "','" + educationInfo[i].GPA + "','" + educationInfo[i].GradeID + "'," + educationInfo[i].BoardID + "," + educationInfo[i].SessionID + "," + educationInfo[i].YearPass + "," + educationInfo[i].EducationDuration + ",'" + educationInfo[i].Institute + "','" + educationInfo[i].ImageURL + "'," + reqBody.InstituteID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + IsDeleted + "";
                                console.log(sql);
                                db.executeSql(sql, function (data, err) {
                                    if (err) {
                                        throw err;
                                    } else {
                                        console.log("Education Info");
                                    }
                                    //res.end();
                                });
                            }
                        }
                        //------------------- Education Info Insert End------------------------------//
                        //------------------- Guardian Info Insert Strat------------------------------//
                        if (guardianInfo.length > 0 && guardianModalArr.length > 0) {
                            async function asyncCall() {
                                var j = 0;
                                for (var i = 0; i < guardianModalArr.length; i++) {
                                    //j = i;
                                    var IsDeleted = guardianModalArr[i].IsDeleted === true ? 1 : 0;

                                    var sql = "spSetCmnUser  " + guardianModalArr[i].UserID + ", '" + guardianModalArr[i].UserNo + "', " + guardianModalArr[i].UserTypeID + ", " + guardianModalArr[i].UserTitleID + ", '" + guardianModalArr[i].UserFirstName + "', '" + guardianModalArr[i].UserMiddleName + "', '" + guardianModalArr[i].UserLastName + "', '" + guardianModalArr[i].UserFullName + "', '" + guardianModalArr[i].NickName + "', '" + guardianModalArr[i].EmailID + "', '" + guardianModalArr[i].SkypeID + "', '" + guardianModalArr[i].FacebookID + "', '" + guardianModalArr[i].WhatsApp + "', '" + guardianModalArr[i].Viber + "', '" + guardianModalArr[i].LinkedIN + "', '" + guardianModalArr[i].ParAddress + "', '" + guardianModalArr[i].ParThana + "', '" + guardianModalArr[i].ParPostCode + "', " + guardianModalArr[i].ParCountryID + ", " + guardianModalArr[i].ParStateID + ", " + guardianModalArr[i].ParCityID + ", '" + guardianModalArr[i].PreAddress + "', '" + guardianModalArr[i].PreThana + "', '" + guardianModalArr[i].PrePostCode + "', " + guardianModalArr[i].PreCountryID + ", " + guardianModalArr[i].PreStateID + ", " + guardianModalArr[i].PreCityID + ", " + guardianModalArr[i].ReligionID + ", '" + guardianModalArr[i].MobileNo + "', '" + guardianModalArr[i].PhoneNo + "', '" + guardianModalArr[i].UniqueIdentity + "', " + guardianModalArr[i].BloodGroupID + ", " + guardianModalArr[i].Weigth + ", " + guardianModalArr[i].Height + ", '" + guardianModalArr[i].DOB + "', '" + guardianModalArr[i].BirthCertificate + "', '" + guardianModalArr[i].PassportNO + "', '" + guardianModalArr[i].ImageUrl + "', '" + guardianModalArr[i].SignatureUrl + "', '" + guardianModalArr[i].FingerUrl + "', '" + guardianModalArr[i].NID + "', '" + guardianModalArr[i].OfficeID + "', " + guardianModalArr[i].GenderID + ", '" + guardianModalArr[i].Remarks + "', " + reqBody.IsActive + ", " + reqBody.StatusID + ", " + reqBody.InstituteID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + IsDeleted + "";
                                    //var bool = guardianInfo[i].isLocal === true ? 1 : 0;
                                    //var sql = "spSetCmnUserFamily  " + guardianInfo[i].FamilyID + "," + userID + "," + guardianInfo[i].RelationID + "," + guardianInfo[i].GuardianID + "," + bool + "," + 1 + "," + reqBody.InstituteID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
                                    console.log('Guardian Master');
                                    console.log(sql);
                                    console.log('Guardian Master');
                                    var detailDelay = await Delay();
                                    db.executeSql(sql, function (data, err) {
                                        if (err) {
                                            throw err;
                                        } else {
                                            //j = 0;
                                            //res.send(data.recordset);
                                            var GUserID = data.recordset[0].ReturnValue;

                                            //console.log("Guardian Info");
                                            var bool = guardianInfo[j].isLocal === true ? 1 : 0;
                                            var IsDeleted = guardianInfo[j].IsDeleted === true ? 1 : 0;
                                            var sql = "spSetCmnUserFamily  " + guardianInfo[j].FamilyID + "," + userID + "," + guardianInfo[j].RelationID + "," + GUserID + "," + bool + "," + 1 + "," + reqBody.InstituteID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + IsDeleted + "";
                                            j++;
                                            db.executeSql(sql, function (data, err) {
                                                if (err) {
                                                    throw err;
                                                } else {
                                                    console.log("Guardian Info");
                                                }
                                                //res.end();
                                            });
                                        }
                                        //res.end();
                                    });
                                }
                            }
                            asyncCall();
                        }
                        //------------------- Guardian Info Insert End------------------------------//
                        //------------------- Job Contarct Info Insert Strat------------------------------//
                        if (jobContractInfo.length > 0) {
                            for (var i = 0; i < jobContractInfo.length; i++) {
                                var bool = jobContractInfo[i].IsActive === true ? 1 : 0;
                                var IsDeleted = jobContractInfo[i].IsDeleted === true ? 1 : 0;
                                var sql = "spSetCmnUserJobContract  " + jobContractInfo[i].JobContractID + "," + jobContractInfo[i].JobContractTypeID + ",'" + jobContractInfo[i].RFID + "'," + userID + "," + jobContractInfo[i].DesignationID + "," + jobContractInfo[i].BrunchID + "," + jobContractInfo[i].DepartmentID + "," + reqBody.InstituteID + ",'" + jobContractInfo[i].ContractDate + "'," + bool + ",'" + jobContractInfo[i].ConfirmationDate + "','" + jobContractInfo[i].JoiningDate + "'," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + IsDeleted + "";
                                console.log(sql);
                                db.executeSql(sql, function (data, err) {
                                    if (err) {
                                        throw err;
                                    } else {
                                        console.log("Job Info");
                                    }
                                    //res.end();
                                });
                            }
                        }
                        //------------------- Job Contarct Info Insert End------------------------------//
                        //------------------- Exprience Info Insert Strat------------------------------//
                        if (exprienceInfo.length > 0) {
                            for (var i = 0; i < exprienceInfo.length; i++) {
                                var bool = 1;
                                var IsDeleted = exprienceInfo[i].IsDeleted === true ? 1 : 0;
                                var sql = "spSetCmnUserExperience  " + exprienceInfo[i].UserExperienceRecordID + "," + userID + ",'" + exprienceInfo[i].Description + "'," + exprienceInfo[i].ExperienceID + ",'" + exprienceInfo[i].ExperienceStartDate + "','" + exprienceInfo[i].ExperienceEndDate + "','" + exprienceInfo[i].ExperienceDuration + "','" + exprienceInfo[i].Institute + "','" + exprienceInfo[i].InstituteAddress + "','" + exprienceInfo[i].ImageURL + "'," + reqBody.InstituteID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + IsDeleted + "";
                                //console.log(sql);
                                db.executeSql(sql, function (data, err) {
                                    if (err) {
                                        throw err;
                                    } else {
                                        console.log("Exprience Info");
                                    }
                                    //res.end();
                                });
                            }
                        }

                        if (UserTypeArr.length > 0) {
                            for (var i = 0; i < UserTypeArr.length; i++) {
                                var bool = 1;
                                var IsDeleted = UserTypeArr[i].IsDeleted === true ? 1 : 0;
                                var IsDefault = UserTypeArr[i].IsDefault === true ? 1 : 0;
                                var sql = "spSetCmnUserWiseUserType  " + UserTypeArr[i].UserWiseUserTypeID + "," + userID + ", " + UserTypeArr[i].UserTypeID + ",'" + UserTypeArr[i].UserTypeName + "'," + IsDefault + "," + reqBody.InstituteID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + IsDeleted + "";
                                //console.log(sql);
                                db.executeSql(sql, function (data, err) {
                                    if (err) {
                                        throw err;
                                    } else {
                                        console.log("Exprience Info");
                                    }
                                    //res.end();
                                });
                            }
                        }
                        //------------------- Exprience Info Insert End------------------------------//
                    }
                    //------------------- If Statement End------------------------------//
                    //------------------- Details Insert End------------------------------// 
                }
                //res.end();
            });
        }
    })
}

//get all Guardian
var getUser = function (req, res) {

    console.log("spGetCmnUser ");

    db.executeSql("spGetCmnUser ", function (data, err) {
        if (err) {
            //httpMsgs.show500(req, res, err);
            throw err;
        } else {
            //httpMsgs.sendJson(req, res, data.recordset);
            res.send(data.recordset);
        }
        res.end();
    });
}
var getLastInputUser = function (req, res) {

    console.log("spGetCmnUserMaxID ");

    db.executeSql("spGetCmnUserMaxID ", function (data, err) {
        if (err) {
            //httpMsgs.show500(req, res, err);
            throw err;
        } else {
            //httpMsgs.sendJson(req, res, data.recordset);
            res.send(data.recordset);
        }
        res.end();
    });
}
//get user By User ID
var getUserByID = function (req, res, id) {

    console.log("spGetCmnUser " + id + "");

    db.executeSql("spGetCmnUser " + id + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

//get user By Type ID
var getUserByTypeID = function (req, res, userID, typeID, instituteID) {

    console.log("spGetCmnUser " + userID + "," + typeID + "," + instituteID + ", 0, 0, 0, 0, ''");

    db.executeSql("spGetCmnUser " + userID + "," + typeID + "," + instituteID + ", 0, 0, 0, 0, ''", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getAllEmployee = function (req, res, reqBody) {

    //var sql = "spGetCmnUser 0," + reqBody.typeID + ", " + reqBody.InstituteID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + ", " + reqBody.pageSize + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'";
    var sql = "spGetCmnUser 0,'" + reqBody.typeID + "', " + reqBody.InstituteID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + ", " + reqBody.pageSize + ", " + reqBody.IsPaging + ", '" + reqBody.SearchProperty + "'";
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

//get user Master Details By Type ID
var getUserMasterDetailsByID = function (req, res, userID) {

    console.log("spGetCmnUserByID " + userID + " ");

    db.executeSql("spGetCmnUserByID " + userID + " ", function (data, err) {
        var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
        // console.log(result.length);
        if (result.length == 0) {
            result = "[]";
            res.send(result);
        } else {
            res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
        }
        res.end();
    });
}

var setBulkAddress = function (req, res, reqBody) {

    var preAddress = reqBody.presentAddress;
    var params = "";
    for (var i = 0; i < preAddress.length; i++) {
        params = params + ",(" + preAddress[i].address + "," + preAddress[i].thana + "," + preAddress[i].postCode + "," + preAddress[i].countryID + "," + preAddress[i].stateID + "," + preAddress[i].cityID + ")"

    }
    params = params.substr(1);
    var sql = "INSERT INTO [dbo].[CmnBoard]([BoardID],[BoardName],[IsDeleted])VALUES" + params;
    console.log(sql);
}


var getUserExprience = function (req, res) {

    console.log("spGetCmnUserExperienceList ");

    db.executeSql("spGetCmnUserExperienceList ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var deleteUserByID = function (req, res, userID) {

    console.log("SpDeleteCmnUsers " + userID + "");

    db.executeSql("SpDeleteCmnUsers " + userID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
//var setStudentBasicInfo = function (req, res, reqbody) {
//  var sql = "spSetStudentBasicInfo " + reqbody.UserClassID + "," + reqbody.UserID + ",'" + reqbody.RFID + "','" + reqbody.RollNo + "','" + reqbody.StudentNo + "'," + reqbody.SectionID + "," + reqbody.ClassID + "," + reqbody.BrunchID + "," + reqbody.ShiftID + ",'" + reqbody.Remarks + "'," + reqbody.InstituteID + "," + reqbody.UserTypeID + "," + reqbody.GenderID + ",'" + reqbody.UserName + "','" + reqbody.PhoneNo + "','" + reqbody.EmailID + "','" + reqbody.ImageUrl + "','" + reqbody.FingerUrl + "','" + reqbody.SignatureUrl + "','" + reqbody.Guardian + "','" + reqbody.GuardianPhone + "','" + reqbody.GuardianEmailID + "','" + reqbody.DOB + "','" + reqbody.PreAddress + "'," + reqbody.ReligionID + ", " + reqbody.CreateBy + ", '" + reqbody.CreateOn + "', '" + reqbody.CreatePc + "', " + reqbody.UpdateBy + ", '" + reqbody.UpdateOn + "', '" + reqbody.UpdatePc + "', " + reqbody.IsDeleted + ", " + reqbody.DeleteBy + ", '" + reqbody.DeleteOn + "', '" + reqbody.DeletePc + "' "
var setStudentBasicInfo = function (req, res, reqbody) {
    var sql = "spSetStudentBasicInfo " + reqbody.UserClassID + "," + reqbody.UserID + ",'" + reqbody.RFID + "','" + reqbody.RollNo + "','" + reqbody.StudentNo + "'," + reqbody.SectionID + "," + reqbody.ClassID + "," + reqbody.BrunchID + "," + reqbody.ShiftID + ",'" + reqbody.Remarks + "'," + reqbody.InstituteID + "," + reqbody.UserTypeID + "," + reqbody.GenderID + ",'" + reqbody.UserName + "','" + reqbody.PhoneNo + "','" + reqbody.EmailID + "','" + reqbody.ImageUrl + "','" + reqbody.FingerUrl + "','" + reqbody.SignatureUrl + "','" + reqbody.Guardian + "','" + reqbody.GuardianPhone + "','" + reqbody.GuardianEmailID + "','" + reqbody.DOB + "','" + reqbody.PreAddress + "'," + reqbody.ReligionID + "," + reqbody.DepartmentID + "," + reqbody.MediumID + "," + reqbody.IsImageCaptured + "," + reqbody.CreateBy + ", '" + reqbody.CreateOn + "', '" + reqbody.CreatePc + "', " + reqbody.UpdateBy + ", '" + reqbody.UpdateOn + "', '" + reqbody.UpdatePc + "', " + reqbody.IsDeleted + ", " + reqbody.DeleteBy + ", '" + reqbody.DeleteOn + "', '" + reqbody.DeletePc + "' "
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





// bulk_student


var SetExcelData = function (req, res, reqbody) {

    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 500);
        });
    }
    var excelData = reqbody.excelData;

    //    console.log(excelData);
    async function asyncCall() {
        if (excelData.length > 0) {
            for (var i = 0; i < excelData.length; i++) {

                var ReligionID = null;
                var address = null;


                if (excelData[i].religionSelected.ReligionID !== undefined) {
                    ReligionID = excelData[i].religionSelected.ReligionID;
                }

                if (excelData[i].religionSelected.religionID !== undefined) {
                    ReligionID = excelData[i].religionSelected.religionID;
                }


                if (excelData[i].address === 'undefined' || excelData[i].address === undefined) {
                    address = null;
                } else {
                    address = excelData[i].address
                }

                if (excelData[i].DOB !== null) {

                    excelData[i].DOB = formatDate(excelData[i].DOB);
                }


                var sql = "spSetStudentBasicInfo " +
                    reqbody.UserClassID + "," +
                    reqbody.UserID + ",'" +
                    reqbody.RFID + "','" +
                    excelData[i].roll + "','" +
                    reqbody.StudentNo + "'," +
                    reqbody.SectionID + "," +
                    reqbody.ClassID + "," +
                    reqbody.BrunchID + "," +
                    reqbody.ShiftID + ",'" +
                    reqbody.Remarks + "'," +
                    reqbody.InstituteID + "," +

                    reqbody.UserTypeID + "," +
                    excelData[i].genderSelected.GenderID + ",'" +
                    excelData[i].studentName + "','" +
                    excelData[i].phone + "','" +
                    excelData[i].email + "','" +
                    excelData[i].imageURL + "','" +
                    "" + "','" +
                    "" + "','" +
                    excelData[i].parentName + "','" +
                    excelData[i].phone + "','" +
                    excelData[i].email + "','" +
                    excelData[i].DOB + "','" +
                    address + "'," +
                    ReligionID + "," +
                    reqbody.DepartmentID + "," +
                    reqbody.MediumID + "," +
                    0 + ",'" +

                    //new
                    "" + "','" +
                    1 + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    1 + "','" +
                    1 + "','" +
                    1 + "','" +
                    "" + "','" +
                    "" + "','" +
                    1 + "','" +
                    1 + "','" +
                    1 + "','" +
                    "" + "','" +
                    "" + "','" +
                    1 + "','" +
                    1 + "','" +
                    1 + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    1 + "','" +
                    1 + "','" +


                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    "" + "','" +
                    1 + "','" +
                    "" + "','" +
                    "" + "','" +


                    1 + "','" +
                    1 + "','" +
                    1 + "','" +
                    3 + "','" +
                    6 + "','" +//board
                    1 + "','" +
                    //new



                    reqbody.CreateBy + "', '" +
                    reqbody.CreateOn + "', '" +
                    reqbody.CreatePc + "', " +
                    reqbody.UpdateBy + ", '" +
                    reqbody.UpdateOn + "', '" +
                    reqbody.UpdatePc + "', " +
                    reqbody.IsDeleted + ", " +
                    reqbody.DeleteBy + ", '" +
                    reqbody.DeleteOn + "', '" +
                    reqbody.DeletePc + "' "

                console.log(sql);

                var detailDelay = await Delay();
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data.recordset);
                        console.log("Post Success");
                    }
                });
            }

        }

    }
    asyncCall();
}



function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}










var setStudentBasicInfo = function (req, res, reqbody) {
    var sql = "spSetStudentBasicInfo " + reqbody.UserClassID + "," + reqbody.UserID + ",'" + reqbody.RFID + "','" + reqbody.RollNo + "','" + reqbody.StudentNo + "'," + reqbody.SectionID + "," + reqbody.ClassID + "," + reqbody.BrunchID + "," + reqbody.ShiftID + ",'" + reqbody.Remarks + "'," + reqbody.InstituteID + "," + reqbody.UserTypeID + "," + reqbody.GenderID + ",'" + reqbody.UserName + "','" + reqbody.PhoneNo + "','" + reqbody.EmailID + "','" + reqbody.ImageUrl + "','" + reqbody.FingerUrl + "','" + reqbody.SignatureUrl + "','" + reqbody.Guardian + "','" + reqbody.GuardianPhone + "','" + reqbody.GuardianEmailID + "','" + reqbody.DOB + "','" + reqbody.PreAddress + "'," + reqbody.ReligionID + "," + reqbody.DepartmentID + "," + reqbody.MediumID + "," + reqbody.IsImageCaptured + ",'" + reqbody.UserNo + "'," + reqbody.UserTitleID + ",'" + reqbody.UserFirstName + "','" + reqbody.UserMiddleName + "','" + reqbody.UserLastName + "','" + reqbody.NickName + "','" + reqbody.SkypeID + "','" + reqbody.FacebookID + "','" + reqbody.WhatsApp + "','" + reqbody.Viber + "','" + reqbody.LinkedIN + "','" + reqbody.ParAddress + "','" + reqbody.ParThana + "','" + reqbody.ParPostCode + "', " + reqbody.ParCountryID + ", " + reqbody.ParStateID + ", " + reqbody.ParCityID + ",'" + reqbody.PreThana + "','" + reqbody.PrePostCode + "', " + reqbody.PreCountryID + "," + reqbody.PreStateID + "," + reqbody.PreCityID + ", '" + reqbody.MobileNo + "','" + reqbody.UniqueIdentity + "'," + reqbody.BloodGroupID + "," + reqbody.Weigth + "," + reqbody.Height + ",'" + reqbody.BirthCertificate + "','" + reqbody.PassportNO + "','" + reqbody.NID + "'," + reqbody.IsActive + "," + reqbody.StatusID + ",'" + reqbody.GuardianMobileNo + "','" + reqbody.GuardianUserFirstName + "','" + reqbody.GuardianUserMiddleName + "','" + reqbody.GuardianUserLastName + "','" + reqbody.GuardianNickName + "','" + reqbody.GuardianUniqueIdentity + "'," + reqbody.GuardianBloodGroupID + ", '" + reqbody.GuardianPassportNO + "', '" + reqbody.GuardianNID + "'," + reqbody.RelationID + "," + reqbody.IsLocalGuardian + "," + reqbody.IsActiveFamily + "," + reqbody.SessionID + "," + reqbody.BoardID + "," + reqbody.IsActiveStudent + "," + reqbody.CreateBy + ", '" + reqbody.CreateOn + "', '" + reqbody.CreatePc + "', " + reqbody.UpdateBy + ", '" + reqbody.UpdateOn + "', '" + reqbody.UpdatePc + "', " + reqbody.IsDeleted + ", " + reqbody.DeleteBy + ", '" + reqbody.DeleteOn + "', '" + reqbody.DeletePc + "' "
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
// bulk_student



//get user By Type ID
var getUserType = function (req, res, instituteID) {

    console.log("spGetUserType " + instituteID);

    db.executeSql("spGetUserType " + instituteID, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getDesignationByInstitute = function (req, res, InstituteID) {
    var sql = "spGetCmnUserDesignationByInstituteID " + InstituteID + "";
    console.log(sql)
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getDepartmentByInstitute = function (req, res, InstituteID) {
    var sql = "spGetInsDepartment " + InstituteID + "";
    console.log(sql)
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getClassWiseAllStudent = function (req, res, reqBody) {

    var sql = "spGetClassWiseAllStudent " + reqBody.UserID + ", " + reqBody.InstituteID + ", " + reqBody.ClassID + ", " + reqBody.SectionID + ", " + reqBody.DepartmentID + ", " + reqBody.MediumID + ", " + reqBody.ShiftID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + "";
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

var getInsGuardian = function (req, res, reqbody) {

    var sql = "spGetInsGuardian " + reqbody.InstituteID + "," + reqbody.UserID + "," + reqbody.LoggedUser + "," + reqbody.PageNo + "," + reqbody.RowCountPerPage + "," + reqbody.IsPaging + ",'" + reqbody.SearchProperty + "'";
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

var getrptStudentInfoDetail = function (req, res, InstituteID, BranchID, MediumID, ClassID, DepartmentID, SectionID, ShiftID) {

    console.log("spGetrptStudentInfoDetail " + InstituteID + "," + BranchID + "," + MediumID + "," + ClassID + "," + DepartmentID + "," + SectionID + "," + ShiftID + "  ");

    db.executeSql("spGetrptStudentInfoDetail " + InstituteID + ", " + BranchID + ", " + MediumID + ", " + ClassID + ", " + DepartmentID + ", " + SectionID + ", " + ShiftID + "  ", function (data, err) {
        var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
         console.log(result.length);
        if (result.length == 0) {
            result = "[]";
            res.send(result);
        } else {
            res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
        }
        res.end();
    });
}

var getrptStudentInfoSummary = function (req, res, InstituteID, BranchID) {

    console.log("spGetrptStudentInfoSummmary " + InstituteID + "," + BranchID + "");

    db.executeSql("spGetrptStudentInfoSummmary " + InstituteID + ", " + BranchID + "", function (data, err) {
       if (err) {
                throw err;
            } else {
                var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
                // console.log(result.length);
                if (result.length == 0) {
                    result = "[]";
                    res.send(result);
                } else {
                    res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
                }
            }
            res.end();
        });
}




module.exports = {
    setUserGuardian,
    setUserStudent,
    getUser,
    getLastInputUser,
    getUserByID,
    getUserByTypeID,
    getUserMasterDetailsByID,
    setBulkAddress,
    getUserExprience,
    deleteUserByID,
    setStudentBasicInfo,
    SetExcelData,
    getAllEmployee,
    getUserType,
    getDesignationByInstitute,
    getDepartmentByInstitute,
    getClassWiseAllStudent,
    getInsGuardian,
    getrptStudentInfoDetail,
    getrptStudentInfoSummary,

}




