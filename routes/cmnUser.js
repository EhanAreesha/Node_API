const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnUser');
const bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setUserGuardian', verifyToken, function (req, res) {
    cntr.setUserGuardian(req, res, req.body);
});

router.post('/api/onEms/setUserStudent', verifyToken, function (req, res) {
    cntr.setUserStudent(req, res, req.body);
});

router.get('/api/onEms/getUser', verifyToken, function (req, res) {
    cntr.getUser(req, res);
});

router.get('/api/onEms/getLastInputUser', verifyToken, function (req, res) {
    cntr.getLastInputUser(req, res);
});

router.get('/api/onEms/getUser/:id', verifyToken, function (req, res) {
    cntr.getUserByID(req, res, req.params.id);
});

router.get('/api/onEms/getUser/:userID/:typeID/:instituteID', verifyToken, function (req, res) {
    cntr.getUserByTypeID(req, res, req.params.userID, req.params.typeID, req.params.instituteID);
});

router.get('/api/onEms/getUserMasterDetails/:userID', verifyToken, function (req, res) {
    cntr.getUserMasterDetailsByID(req, res, req.params.userID);
});

router.post('/api/onEms/setBulkAddress', verifyToken, parseUrlencoded, function (req, res) {
    cntr.setBulkAddress(req, res, req.body);
});

router.get('/api/onEms/getUserExprienceList', verifyToken, function (req, res) {
    cntr.getUserExprience(req, res);
});

router.delete('/api/onEms/deleteUser/:userID', verifyToken, function (req, res) {
    cntr.deleteUserByID(req, res, req.params.userID);
});

router.post('/api/onEms/setStudentBasicInfo', verifyToken, function (req, res) {
    cntr.setStudentBasicInfo(req, res, req.body);
});

router.post('/api/onEms/SetExcelData', verifyToken, function (req, res) {
    cntr.SetExcelData(req, res, req.body);
});

router.post('/api/onEms/getAllEmployee', verifyToken, function (req, res) {
    cntr.getAllEmployee(req, res, req.body);
});

router.get('/api/onEms/getUserType/:id', verifyToken, function (req, res) {
    cntr.getUserType(req, res, req.params.id);
});
router.get('/api/onEms/getDesignationByInstituteID/:InstituteID', function (req, res) {
    cntr.getDesignationByInstitute(req, res, req.params.InstituteID);
});
router.get('/api/onEms/getDepartmentByInstituteID/:InstituteID', function (req, res) {
    cntr.getDepartmentByInstitute(req, res, req.params.InstituteID);
});

router.post('/api/onEms/getClassWiseAllStudent', verifyToken, function (req, res) {
    cntr.getClassWiseAllStudent(req, res, req.body);
});

router.post('/api/onEms/getInsGuardian', verifyToken, function (req, res) {
    cntr.getInsGuardian(req, res, req.body);
});

router.get('/api/onEms/getrptStudentInfoDetail/:InstituteID/:BranchID/:MediumID/:ClassID/:DepartmentID/:SectionID/:ShiftID', function (req, res) {
    cntr.getrptStudentInfoDetail(req, res, req.params.InstituteID, req.params.BranchID, req.params.MediumID, req.params.ClassID, req.params.DepartmentID, req.params.SectionID, req.params.ShiftID);
});

router.get('/api/onEms/getrptStudentInfoSummary/:InstituteID/:BranchID', function (req, res) {
    cntr.getrptStudentInfoSummary(req, res, req.params.InstituteID, req.params.BranchID);
});

 
module.exports = router;