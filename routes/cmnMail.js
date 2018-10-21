const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnMail');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setMail', verifyToken, function (req, res) {
    cntr.setMail(req, res, req.body);
});

router.get('/api/onEms/getMail', verifyToken, function (req, res) {
    cntr.getMail(req, res);
});

router.get('/api/onEms/getMailById/:id', verifyToken, function (req, res) {
    cntr.getMailById(req, res, req.params.id);
});

router.get('/api/onEms/getInstituteName', verifyToken, function (req, res) {
    cntr.getInstituteName(req, res);
});

router.get('/api/onEms/getallmail', verifyToken, function (req, res) {
    cntr.getMailTypeName(req, res);
});

router.post('/api/onEms/deleteInsMail', verifyToken, function (req, res) {
    cntr.deleteInsMail(req, res, req.body);
});

router.post('/api/onEms/getInsMailUI', verifyToken, function (req, res) {
    cntr.getInsMailUI(req, res, req.body);
});

module.exports = router;
