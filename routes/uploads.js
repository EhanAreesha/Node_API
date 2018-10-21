

const express = require('express');
const router = express.Router();
// var cntr = require('../models/uploads');
var multer = require("multer");
var fs = require('fs');
var path = require('path');




var instituteName = null;
var className = null;
var Section = null;



const multerConfig = {
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            
          
           // var filePath = path.resolve('E:/uploads/');
           var filePath = 'uploads/';
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            }

           //var filePath = path.resolve('E:/uploads/Institute/');
            var filePath = 'uploads/Institute/';
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            }


            //filePath = path.resolve('E:/uploads/Institute/' + instituteName);
            filePath = 'uploads/Institute/' + instituteName;
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            }



            //filePath = path.resolve('E:/uploads/Institute/' + instituteName + '/' + className);
            filePath = 'uploads/Institute/' + instituteName + '/' + className;
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            }


            if (Section === null) {
                Section = 'NA';
            }

            //filePath = path.resolve('E:/uploads/Institute/' + instituteName + '/' + className + '/' + Section);
            filePath = 'uploads/Institute/' + instituteName + '/' + className + '/' + Section;
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            }

            //filePath = path.resolve('E:/uploads/Institute/' + instituteName + '/' + className + '/' + Section + '/Image/');
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            }

            next(null, filePath)



        },
        filename: function (req, file, next) {
            console.log(file);
            const imageType = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.' + imageType)
        }
    }),
    // fileFilter : function(req,file,next){
    //     if(!file)
    // }
}

router.post('/api/onEms/uploads/:insName/:Class/:Section', multer(multerConfig).single('file'), function (req, res) {


    instituteName = req.params.insName;
    className = req.params.Class;
    Section = req.params.Section;

    if (req.file) {
        console.log(req.file);
        res.json(JSON.stringify(req.file));
        req.body.photo = req.file.filename;
        console.log(req.body.photo);

    }
});
router.post('/api/onEms/Mobile/uploads', multer(multerConfig).single('file'), function (req, res) {
    if (req.file) {
        console.log(req.file);
        res.json(JSON.parse(JSON.stringify(req.file)));
        req.body.photo = req.file.filename;
        console.log(req.body.photo);

    }
});



module.exports = router;