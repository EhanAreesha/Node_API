const express = require('express');
const router = express.Router();
var cntr = require('../models/FrontRestaurent');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');



router.get('/api/getResDDL', function (req, res) {
    cntr.getResDDL(req, res);
});
router.get('/api/getResSearch/:Name/:Loc', function (req, res) {
    cntr.getResSearch(req, res, req.params.Name, req.params.Loc);
});
router.get('/api/getResDetail/:ID', function (req, res) {
    cntr.getResDetail(req, res, req.params.ID);
});
router.post('/api/setReview', function (req, res) {
    cntr.setReview(req, res, req.body);
});
router.get('/api/getExistingParams/:Property/:Flag', function (req, res) {
    cntr.getExistingParams(req, res, req.params.Property, req.params.Flag);
});
router.post('/api/setUserAndUserAuthenticationForFront', function (req, res) {

    cntr.setUserJoin(req, res, req.body);
});
router.get('/api/headerFooterInfo', function (req, res) {
    cntr.headerFooterInfo(req, res);
});
router.get('/api/checkIpForReview/:InstituteID', function (req, res) {
    cntr.checkIpForReview(req, res, req.params.InstituteID);
});
router.get('/api/getEmailVarificationCode/:EmailID/:RNumber', function (req, res) {
    cntr.getEmailVarificationCode(req, res, req.params.EmailID, req.params.RNumber);
});
module.exports = router;
