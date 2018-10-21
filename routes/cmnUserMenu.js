const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnUserMenu');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.get('/api/onEms/getCmnMenuByUser/:id', function (req, res) {
    cntr.getCmnMenuByUser(req, res, req.params.id);
});

router.get('/api/onEms/getCmnMenuByUserMultiType/:id/:UserTypeID', function (req, res) {
    cntr.getCmnMenuByUserMultiType(req, res, req.params.id, req.params.UserTypeID);
});

module.exports = router;