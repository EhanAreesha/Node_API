const express = require('express');
const router = express.Router();
var cntr = require('../models/cmnMenu');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/setmenu', verifyToken, function (req, res) {
    cntr.setMenu(req, res, req.body);
});


router.post('/api/onEms/savePremissionRecord', verifyToken, function (req, res) {
    cntr.savePremissionRecord(req, res, req.body);
});


router.post('/api/onEms/setModule', verifyToken, function (req, res) {
    cntr.setModule(req, res, req.body);
});

router.post('/api/onEms/setMenuPermission', verifyToken, function (req, res) {
    cntr.setMenuPermission(req, res, req.body);
});

router.post('/api/onEms/updateModulePermission', verifyToken, function (req, res) {
    cntr.updateModulePermission(req, res, req.body);
});

router.get('/api/onEms/getmenu', verifyToken, function (req, res) {
    cntr.getMenuDdl(req, res);
});

router.get('/api/onEms/getmenuPermission/:InstituteID/:ModuleID/:UserTypeID', verifyToken, function (req, res) {
    cntr.getMenuPermission(req, res, req.params.InstituteID, req.params.ModuleID, req.params.UserTypeID);
});

router.get('/api/onEms/getmenu/:id', verifyToken, function (req, res) {
    cntr.getMenu(req, res, req.params.id);
});

router.get('/api/onEms/getmenutype', verifyToken, function (req, res) {
    cntr.getMenuType(req, res);
});



//router.get('/api/onEms/getStatus', function (req, res) {
//    cntr.getStatus(req, res);
//});


router.get('/api/onEms/getLoginUser', function (req, res) {
    cntr.getLoginUser(req, res);
});




router.get('/api/onEms/getmodule/:moduleID', verifyToken, function (req, res) {
    cntr.getModule(req, res, req.params.moduleID);
});

router.get('/api/onEms/getmodulePermission/:InstituteID', verifyToken, function (req, res) {
    cntr.getModulePermission(req, res, req.params.InstituteID, req.params.UserTypeID);
});


module.exports = router;
