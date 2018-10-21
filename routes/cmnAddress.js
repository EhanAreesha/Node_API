const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnAddress');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setAdress', verifyToken, function (req, res) {
    cntr.setAdress(req, res, req.body);
});

router.post('/api/onEms/deleteAddress', verifyToken, function (req, res) {
    cntr.deleteAddress(req, res, req.body);
});

router.get('/api/onEms/getAdress', verifyToken, function (req, res) {
    cntr.getAdress(req, res);
});

router.get('/api/onEms/getCityById/:id', verifyToken, function (req, res) {
    cntr.getCityById(req, res, req.params.id);
});

// router.get('/api/onEms/getmenutype', function(req,res){
// 	cntr.getMenuType(req,res);
// });
// router.get('/api/onEms/getmodule', function(req,res){
// 	cntr.getModule(req,res);
// });

module.exports = router;
