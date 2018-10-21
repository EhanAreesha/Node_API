const express = require('express');
const router = express.Router();
var cntr = require('../models/insNotification');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setNotification', verifyToken, function (req, res) {
    cntr.setNotification(req, res, req.body);
});
router.post('/api/onEms/getNotification', verifyToken, function (req, res) {
    cntr.getNotification(req, res, req.body);
});
router.get('/api/onEms/getNotificationById/:id', verifyToken, function (req, res) {
    cntr.getNotificationById(req, res, req.params.id);
});
router.get('/api/onEms/getNotificationTypeName', verifyToken, function (req, res) {
    cntr.getNotificationTypeName(req, res);
});
router.get('/api/onEms/getNotificationType', verifyToken, function (req, res) {
    cntr.getNotificationType(req, res);
});
router.post('/api/onEms/deleteInsNotification', verifyToken, function (req, res) {
    cntr.deleteInsNotification(req, res, req.body);
});
router.post('/api/onEms/getAllNotificationUI', verifyToken, function (req, res) {
    cntr.getAllNotificationUI(req, res, req.body);
});


module.exports = router;
