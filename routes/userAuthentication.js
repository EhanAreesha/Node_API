const express = require('express');
const router = express.Router();
var cntr = require('../models/userAuthentication');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');


router.post('/api/onEms/setUserAuthentication', verifyToken, function (req, res) {
	cntr.setUserAuthentication(req, res, req.body);
});
router.post('/api/onEms/deleteUserAuthentication', verifyToken, function (req, res) {
	cntr.deleteUserAuthentication(req, res, req.body);
});
router.post('/api/onEms/getExistingParams', verifyToken, function (req, res) {
	cntr.getExistingParams(req, res, req.body);
});
//router.get('/api/onEms/getUserAuthentication/:Insid/:AuthID', function(req,res){
//	cntr.getUserAuthenticationByInsID(req,res,req.params.Insid,req.params.AuthID);
//});
router.post('/api/onEms/getUserAuthentication', verifyToken, function (req, res) {
    cntr.getUserAuthenticationByInsID(req, res, req.body);
});

router.post('/api/onEms/spGetCmnUserAuthenticationByUserID', verifyToken, function (req, res) {
    cntr.spGetCmnUserAuthenticationByUserID(req, res, req.body);
});


module.exports = router;