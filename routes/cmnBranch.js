const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnBranch');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setBranch', verifyToken, function (req, res) {
    cntr.setBranch(req, res, req.body);
});

router.get('/api/onEms/getBranch', verifyToken, function (req, res) {
    cntr.getBranch(req, res);
});

router.get('/api/onEms/getBranchByID/:id', verifyToken, function (req, res) {
    cntr.getBranchByID(req, res, req.params.id);
});

module.exports = router;