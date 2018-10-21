const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnUserRegistration');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/postCmnUserResistration', verifyToken, function (req, res) {
    cntr.postCmnUserResistration(req, res, req.body);
});

router.post('/api/onEms/putCmnUserResistration', verifyToken, function (req, res) {
    cntr.putCmnUserResistration(req, res, req.body);
});

router.post('/api/onEms/getAllStudentByInsID', verifyToken, function (req, res) {
    cntr.getAllStudentByInsID(req, res, req.body);
});

router.get('/api/onEms/getCmnUserResistrationByUserID/:id', verifyToken, function (req, res) {
    cntr.getCmnUserResistrationByUserID(req, res, req.params.id);
});
router.get('/api/onEms/GetAccYearlyFeesForReceivebleGenerate/:InstituteID/:MediumID/:ClassID/:DepartmentID', verifyToken, function (req, res) {
    cntr.GetAccYearlyFeesForReceivebleGenerate(req, res, req.params.InstituteID, req.params.MediumID, req.params.ClassID, req.params.DepartmentID);
});

module.exports = router;