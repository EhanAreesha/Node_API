const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnDay');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.get('/api/onEms/getcmnDay', verifyToken, function (req, res) {
    cntr.getcmnDay(req, res);
});

router.get('/api/onEms/getinsweekend/:weekID/:insID', verifyToken, function (req, res) {
    cntr.getinsweekend(req, res, req.params.weekID, req.params.insID);
});

router.get('/api/onEms/getAllWeekendById/:id', verifyToken, function (req, res) {
    cntr.getAllWeekendById(req, res, req.params.id);
});

router.post('/api/onEms/setDay', verifyToken, function (req, res) {
    cntr.setDay(req, res, req.body);
});

router.post('/api/onEms/deleteInsWeekEnd', verifyToken, function (req, res) {
    cntr.deleteInsWeekEnd(req, res, req.body);
})


module.exports = router;