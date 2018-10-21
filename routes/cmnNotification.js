const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnNotification');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setNotification', verifyToken, function (req, res) {
    cntr.setNotification(req, res, req.body);
});

router.get('/api/onEms/getNotification', verifyToken, function (req, res) {
    cntr.getNotification(req, res);
});

router.get('/api/onEms/getNotificationById/:id', verifyToken, function (req, res) {
    cntr.getNotificationById(req, res, req.params.id);
});

router.get('/api/onEms/getNotificationTypeName', verifyToken, function (req, res) {
    cntr.getNotificationTypeName(req, res);
});

module.exports = router;
