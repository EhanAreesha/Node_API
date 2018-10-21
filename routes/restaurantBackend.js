const express = require('express');
const router = express.Router();
var cntr = require('../models/restaurantBackend');

//VerifyToken Module
let verifyToken = require('../core/verifyToken');

router.post('/api/onEms/SetRestaurant', verifyToken, function (req, res) {
    cntr.SetRestaurant(req, res, req.body);
});

router.get('/api/onEms/getRestaurantByID/:id', verifyToken, function (req, res) {
    cntr.getRestaurantByID(req, res, req.params.id);
});

router.get('/api/onEms/GetAvailableHours/:InstituteID/:DayID/:InsOpenDayID', verifyToken, function (req, res) {
    cntr.GetAvailableHours(req, res, req.params.InstituteID, req.params.DayID, req.params.InsOpenDayID);
});

router.get('/api/onEms/getBranchByID/:insid/:BranchId', verifyToken, function (req, res) {
    cntr.getBranchByID(req, res, req.params.insid, req.params.BranchId);
}); 

router.post('/api/onEms/SetInsAvailableHours', verifyToken, function (req, res) {
    cntr.SetInsAvailableHours(req, res, req.body);
});

router.get('/api/onEms/GetAllRestaurant/:InstituteID', verifyToken, function (req, res) {
    cntr.GetAllRestaurant(req, res, req.params.InstituteID);
});

router.post('/api/onEms/UpdateRestaurant', verifyToken, function (req, res) {
    cntr.UpdateRestaurant(req, res, req.body);
});

router.get('/api/onEms/GetAllReviewsByInstitute/:InstituteID', verifyToken, function (req, res) {
    cntr.GetAllReviewsByInstitute(req, res, req.params.InstituteID);
});


router.post('/api/onEms/UpdateReview', verifyToken, function (req, res) {
    cntr.UpdateReview(req, res, req.body);
});

router.get('/api/onEms/getRestaurantDesh', verifyToken, function (req, res) {
    cntr.getRestaurantDesh(req, res);
});

router.get('/api/onEms/GetAllLanguages/:LanguageID', verifyToken, function (req, res) {
    cntr.GetAllLanguages(req, res, req.params.LanguageID);
});
    

module.exports = router;