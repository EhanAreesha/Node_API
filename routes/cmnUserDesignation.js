const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnUserDesignation');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setUserDesignation', function (req, res) {
    cntr.setUserDesignation(req, res, req.body);
});

router.get('/api/onEms/getUserDesignation', function (req, res) {
    cntr.getUserDesignation(req, res);
});

router.get('/api/onEms/getUserDesignationByID/:id', function (req, res) {
    cntr.getUserDesignationByID(req, res, req.params.id);
});

module.exports = router;