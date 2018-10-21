const express = require('express');
const router = express.Router();
var cntr = require('../models/insInstitute');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setinsInstitute', verifyToken, function (req, res) {
    cntr.setinsInstitute(req, res, req.body);
});

router.get('/api/onEms/getInstituteByID/:id', verifyToken, function (req, res) {
    cntr.getInstituteByID(req, res, req.params.id);
});

router.get('/api/onEms/getInstituteAvailableSMS/:insId', verifyToken, function (req, res) {
    cntr.getInstituteAvailableSMSByInsId(req, res, req.params.insId);
});

router.post('/api/onEms/setinsInstituteSMSOrder', verifyToken, function (req, res) {
    cntr.setInsInstituteSMSOrder(req, res, req.body);
});

router.get('/api/onEms/getinsInstituteSMSOrder/:insId', verifyToken, function (req, res) {
    cntr.getInsInstituteSMSOrder(req, res, req.params.insId);
});

router.get('/api/onEms/getinsInstituteSMSOrderByOrderID/:insId/:SMSOrderID', verifyToken, function (req, res) {
    cntr.getInsInstituteSMSOrderByOrderID(req, res, req.params.insId, req.params.SMSOrderID);
});

router.get('/api/onEms/getinsInstituteSMSBody/:SMSSetupId/:insId', verifyToken, function (req, res) {
    cntr.getinsInstituteSMSBodyBySetupId(req, res, req.params.SMSSetupId, req.params.insId);
});

router.get('/api/onEms/getAllInstitute', verifyToken, function (req, res) {
    cntr.getAllInstitute(req, res);
});

router.get('/api/onEms/getInstituteType', verifyToken, function (req, res) {
    cntr.getInstituteType(req, res);
});

//router.get('/api/onEms/getAllStatus', verifyToken, function (req, res) {
//    cntr.getAllStatus(req, res);
//});

router.post('/api/onEms/deleteInstitute', verifyToken, function (req, res) {
    cntr.deleteInstitute(req, res, req.body);
});

router.post('/api/onEms/GetInstituteForUI', verifyToken, function (req, res) {
    cntr.getInstituteUI(req, res, req.body);
});

module.exports = router;