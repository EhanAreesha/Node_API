const express = require('express');
const router = express.Router();
var cntr = require('../models/InsNotice');

router.post('/api/onEms/setInsNotice', function (req, res) {
    cntr.setInsNotice(req, res, req.body);
});

router.get('/api/onEms/getNoticeListByInsID/:InstituteID', function (req, res) {
    cntr.getNoticeListByInsID(req, res, req.params.InstituteID);
});

router.post('/api/onEms/getNoticeListUIGrid', function (req, res) {
    cntr.getNoticeListUIGrid(req, res, req.body);
});

router.post('/api/onEms/SpGetInsNoticeUserList', function (req, res) {
    cntr.SpGetInsNoticeUserList(req, res, req.body);
});

router.post('/api/onEms/deleteInsNotice', function (req, res) {
    cntr.deleteInsNotice(req, res, req.body);
});

router.get('/api/onEms/getUserWiseNoticeForSocketIO/:InstituteID/:NoticeID', function (req, res) {
    cntr.getUserWiseNoticeForSocketIO(req, res, req.params.InstituteID, req.params.NoticeID);
});

module.exports = router;