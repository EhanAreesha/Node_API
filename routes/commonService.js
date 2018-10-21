const express = require('express');
const router = express.Router();
var cntr = require('../models/commonService');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.get('/api/onEms/getrelation', verifyToken, function (req, res) {
    cntr.getAllReation(req, res);
});

router.get('/api/onEms/getreligion', verifyToken, function (req, res) {
    cntr.getAllReligion(req, res);
});

router.get('/api/onEms/getbloodgroups', verifyToken, function (req, res) {
    cntr.getAllBooldGroup(req, res);
});

router.get('/api/onEms/getallcountry', verifyToken, function (req, res) {
    cntr.getAllCountry(req, res);
});

router.get('/api/onEms/getallcity/:StateID', verifyToken, function (req, res) {
    cntr.getAllCity(req, res, req.params.StateID);
});

router.get('/api/onEms/getallstate/:CountryID', verifyToken, function (req, res) {
    cntr.getAllState(req, res, req.params.CountryID);
});

//router.get('/api/onEms/getallboard', verifyToken, function (req, res) {
//    cntr.getAllBoard(req, res);
//});

router.get('/api/onEms/getallexam', verifyToken, function (req, res) {
    cntr.getAllExam(req, res);
});

router.get('/api/onEms/getAllAcademicExam', verifyToken, function (req, res) {
    cntr.getAllAcademicExam(req, res);
});

router.get('/api/onEms/getallgrade', verifyToken, function (req, res) {
    cntr.getAllGrades(req, res);
});

router.get('/api/onEms/getEduPassGrade', verifyToken, function (req, res) {
    cntr.getEduPassGrade(req, res);
});

router.get('/api/onEms/getallsession', verifyToken, function (req, res) {
    cntr.getAllSession(req, res);
});

router.get('/api/onEms/getallgender', verifyToken, function (req, res) {
    cntr.getAllGender(req, res);
});

router.get('/api/onEms/getCmnSubject', verifyToken, function (req, res) {
    cntr.getCmnSubject(req, res);
});

router.get('/api/onEms/getSubjectByParms/:InstituteID/:DepartmentID/:MediumID/:ClassID', verifyToken, function (req, res) {
    cntr.getSubjectByParms(req, res, req.params.InstituteID, req.params.DepartmentID, req.params.MediumID, req.params.ClassID);
});

router.get('/api/onEms/getExamEntrySubjectByParms/:InstituteID/:DepartmentID/:MediumID/:ClassID', verifyToken, function (req, res) {
    cntr.getExamEntrySubjectByParms(req, res, req.params.InstituteID, req.params.DepartmentID, req.params.MediumID, req.params.ClassID);
});

router.get('/api/onEms/getInsExamforDDL/:InstituteID/:MediumID/:ClassID', verifyToken, function (req, res) {
    cntr.getInsExamforDDL(req, res, req.params.InstituteID, req.params.MediumID, req.params.ClassID);
});

router.get('/api/onEms/GetClassWiseSubject/:InstituteID/:DepartmentID/:MediumID/:ClassID', verifyToken, function (req, res) {
    cntr.GetClassWiseSubject(req, res, req.params.InstituteID, req.params.DepartmentID, req.params.MediumID, req.params.ClassID);
});


router.post('/api/onEms/postSubject', verifyToken, function (req, res) {
    cntr.postSubject(req, res, req.body);
});


router.get('/api/onEms/getInsShift/:instituteId', verifyToken, function (req, res) {
    cntr.getInstituteShift(req, res, req.params.instituteId);
});

router.get('/api/onEms/getInstituteBrunchDdl/:instituteId', verifyToken, function (req, res) {
    cntr.getInstituteBrunchDdl(req, res, req.params.instituteId);
});

router.get('/api/onEms/getInstituteMediumDdl/:instituteId', verifyToken, function (req, res) {
    cntr.getInstituteMediumDdl(req, res, req.params.instituteId);
});

router.get('/api/onEms/getInsMedium/:instituteId', verifyToken, function (req, res) {
    cntr.getInstituteMedium(req, res, req.params.instituteId);
});

router.get('/api/onEms/getInsClass/:instituteId', verifyToken, function (req, res) {
    cntr.getInstituteClass(req, res, req.params.instituteId);
});

router.get('/api/onEms/getInsSection/:instituteId/:classID/:DepartmentID', verifyToken, function (req, res) {
    cntr.getInstituteSection(req, res, req.params.instituteId, req.params.classID, req.params.DepartmentID);
});

router.get('/api/onEms/getInsDepertment/:instituteId', verifyToken, function (req, res) {
    cntr.getInstituteDepertment(req, res, req.params.instituteId);
});

router.get('/api/onEms/getStudent/:instituteId/:ClassID/:SectionID/:DepartmentID/:MediumID/:ShiftID/:UserID', verifyToken, function (req, res) {
    cntr.getStudentByClassNShiftNMediumNRoll(req, res, req.params.instituteId, req.params.ClassID, req.params.SectionID, req.params.DepartmentID, req.params.MediumID, req.params.ShiftID, req.params.UserID);
});

router.get('/api/onEms/getPaymentMethod', verifyToken, function (req, res) {
    cntr.getPaymentMethod(req, res);
});

router.get('/api/onEms/getCurrency', verifyToken, function (req, res) {
    cntr.getCurrency(req, res);
});

router.get('/api/onEms/getNoticeTypeDDL', verifyToken, function (req, res) {
    cntr.getNoticeTypeDDL(req, res);
});

router.get('/api/onEms/getNoticeForDDL', verifyToken, function (req, res) {
    cntr.getNoticeForDDL(req, res);
});

router.get('/api/onEms/getDashBoardCmnUserType/:LoggedUserID', verifyToken, function (req, res) {
    cntr.getDashBoardCmnUserType(req, res, req.params.LoggedUserID);
});

router.get('/api/onEms/getStudentToUpdate/:UserID', verifyToken, function (req, res) {
    cntr.getStudentClassWiseByUserID(req, res, req.params.UserID);
});


router.get('/api/onEms/getTotalStudentAndTotalAttendence/:CurrentDate/:InstituteID/:UserTypeID', verifyToken, function (req, res) {
    cntr.getTotalStudentAndTotalAttendence(req, res, req.params.CurrentDate, req.params.InstituteID, req.params.UserTypeID);
});

router.get('/api/onEms/getTotalStudentAndTotalAttendenceDashBoard/:CurrentDate/:InstituteID/:UserTypeID', verifyToken, function (req, res) {
    cntr.getTotalStudentAndTotalAttendenceDashBoard(req, res, req.params.CurrentDate, req.params.InstituteID, req.params.UserTypeID);
});

router.get('/api/onEms/getTotalTeacherAndTotalAttendence/:CurrentDate/:InstituteID/:UserTypeID', verifyToken, function (req, res) {
    cntr.getAllTeacher(req, res, req.params.CurrentDate, req.params.InstituteID, req.params.UserTypeID);
});

router.post('/api/onEms/getStudentList', verifyToken, function (req, res) {
    cntr.getStudentList(req, res, req.body);
});

router.get('/api/onEms/MediumWiseClassDDL/:InstituteID/:MediumID', verifyToken, function (req, res) {
    cntr.MediumWiseClassDDL(req, res, req.params.InstituteID, req.params.MediumID);
});

router.get('/api/onEms/ClassWiseDepartmentDDL/:InstituteID/:ClassID/:MediumID', verifyToken, function (req, res) {
    cntr.ClassWiseDepartmentDDL(req, res, req.params.InstituteID, req.params.ClassID, req.params.MediumID);
});

router.get('/api/onEms/getCmnYear', verifyToken, function (req, res) {
    cntr.getCmnYear(req, res);
});

router.get('/api/onEms/getCmnMonth', verifyToken, function (req, res) {
    cntr.getCmnMonth(req, res);
});

router.get('/api/onEms/getInsClassByInstituteAndMediumID/:InstituteID/:MediumID', verifyToken, function (req, res) {
    cntr.getInsClassByInstituteAndMediumID(req, res, req.params.InstituteID, req.params.MediumID);
});

router.get('/api/onEms/spSetToDayAndToMonthsExpense/:InstituteID/:BranchID', verifyToken, function (req, res) {
    cntr.spSetToDayAndToMonthsExpense(req, res, req.params.InstituteID, req.params.BranchID);
});

router.post('/api/onEms/SetFullYearCalendar', verifyToken, function (req, res) {
    cntr.SetFullYearCalendar(req, res, req.body);
});

router.get('/api/onEms/IfExistAcademicYearCalendar/:YearName/:InstituteID', verifyToken, function (req, res) {
    cntr.IfExistAcademicYearCalendar(req, res, req.params.YearName, req.params.InstituteID );
});

router.get('/api/onEms/RemoveFullYearCalendar/:YearName/:InstituteID', verifyToken, function (req, res) {
    cntr.RemoveFullYearCalendar(req, res, req.params.YearName, req.params.InstituteID);
});

router.get('/api/onEms/spGetDashBoardCalendar/:StartDate/:EndDate/:InstituteID', verifyToken, function (req, res) {
    cntr.spGetDashBoardCalendar(req, res, req.params.StartDate, req.params.EndDate, req.params.InstituteID);
});

router.get('/api/onEms/GetOptionalAndCompulsorySubject/:InstituteID/:MediumID/:ClassID/:DepartmentID', function (req, res) {
    cntr.GetOptionalAndCompulsorySubject(req, res, req.params.InstituteID, req.params.MediumID, req.params.ClassID, req.params.DepartmentID);
});

module.exports = router;


