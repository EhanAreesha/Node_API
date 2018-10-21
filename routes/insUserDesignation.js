const express = require('express');
const router = express.Router();
var cntr = require('../models/insUserDesignation');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setUserDesignation', verifyToken, function (req, res) {
    cntr.setUserDesignation(req, res, req.body);
});

router.get('/api/onEms/getUserDesignation', verifyToken, function (req, res) {
    cntr.getUserDesignation(req, res);
});

router.get('/api/onEms/getUserDesignationByID/:id', verifyToken, function (req, res) {
    cntr.getUserDesignationByID(req, res, req.params.id);
});

router.post('/api/onEms/deleteDesignation', verifyToken, function (req, res) {
    cntr.deleteInsDesignation(req, res, req.body);
});

router.post('/api/onEms/getDesignation', verifyToken, function (req, res) {
    cntr.getDesignation(req, res, req.body);
});


module.exports = router;