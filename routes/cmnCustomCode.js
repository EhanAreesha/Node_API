const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnCustomCode');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setCustomCode', verifyToken, function (req, res) {
    cntr.setCustomCode(req, res, req.body);
});

router.post('/api/onEms/GetAllCustomCode', verifyToken, function (req, res) {
    cntr.GetAllCustomCode(req, res, req.body);
});

router.post('/api/onEms/spGetCustomCodeDetailByID', verifyToken, function (req, res) {
    cntr.spGetCustomCodeDetailByID(req, res, req.body);
});

//router.get('/api/onEms/getInstitute', verifyToken, function (req, res) {
//    cntr.getInstituteCatagory(req, res);
//});

router.get('/api/onEms/spDeleteCustomCodeMasterDetail/:RecordID', verifyToken, function (req, res) {
    cntr.spDeleteCustomCodeMasterDetail(req, res, req.params.RecordID);
});

//router.get('/api/onEms/getAllClasses', verifyToken, function (req, res) {
//    cntr.getAllClass(req, res);
//});

//router.get('/api/onEms/getClsClassRoutineById/:ShiftID/:MediumID/:ClassID/:SectionID/:DepartmentID/:InstituteID', verifyToken, function (req, res) {
//    cntr.getClsClassRoutineById(req, res, req.params.ShiftID, req.params.MediumID, req.params.ClassID, req.params.SectionID, req.params.DepartmentID, req.params.InstituteID);
//});

//router.post('/api/onEms/setClsClassRoutineMasterDetail', verifyToken, function (req, res) {
//    cntr.setClsClassRoutineMasterDetail(req, res, req.body);
//});

module.exports = router;