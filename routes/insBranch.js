const express = require('express');
const router = express.Router();
var cntr = require('../models/insBranch');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setBranch', verifyToken, function (req, res) {
    cntr.setBranch(req, res, req.body);
});

router.post('/api/onEms/deleteInsBranch', verifyToken, function (req, res) {
    cntr.deleteInsBranch(req, res, req.body);
});

router.post('/api/onEms/getAllbranchUI', verifyToken, function (req, res) {
    cntr.getInsBranchUI(req, res, req.body);
});

router.get('/api/onEms/getBranch', verifyToken, function (req, res) {
    cntr.getBranch(req, res);
});

router.get('/api/onEms/getBranchByID/:insid/:BranchId', verifyToken, function (req, res) {
    cntr.getBranchByID(req, res, req.params.insid, req.params.BranchId);
});

router.get('/api/onEms/getBranchByInsID/:insid', verifyToken, function (req, res) {
    cntr.getBranchByInsID(req, res, req.params.insid);
});

//router.get('/api/onEms/getBranchByBranchID/:id', function(req,res){
//    cntr.getBranchByBranchID(req,res,req.params.insid,req.params.id);
//}); 

module.exports = router;