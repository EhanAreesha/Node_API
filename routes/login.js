const express = require('express');
const router = express.Router();
var cntr = require('../models/login');
var app = express();

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.get('/api/onEms/getLoginInformation/:userName/:password', function (req, res) {
    cntr.getLoginData(req, res, req.params.userName, req.params.password);
});

router.get('/api/onEms/resetPassword/:UserID/:LoginID/:ResetPassword/:InstituteID', function (req, res) {
    cntr.resetPassword(req, res, req.params.UserID, req.params.LoginID, req.params.ResetPassword, req.params.InstituteID);
});

router.get('/api/onEms/getUserEmailPhoneIfExist/:UserEmailPhone', function (req, res) {
    cntr.getUserEmailPhoneIfExist(req, res, req.params.UserEmailPhone);
});

router.get('/api/onEms/sendCodeThrouMail/:EmailID/:CodeSet', function (req, res) {
    cntr.sendCodeThrouMail(req, res, req.params.EmailID, req.params.CodeSet);
});

module.exports = router;