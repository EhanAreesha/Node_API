var multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {


        //Creating Folder if not exists 
        var filePath = './uploads/';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }

        //Creating Folder if not exists 
        var filePath = './uploads/Institute/';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }


        filePath = './uploads/Institute/' + instituteName;
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }

        filePath = './uploads/Institute/' + instituteName + '/User/';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }

        filePath = './uploads/Institute/' + instituteName + '/User/Student/';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }


        filePath = './uploads/Institute/' + instituteName + '/User/Student/' + className;
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }


        if (Section === null) {
            Section = 'NA';
        }

        filePath = './uploads/Institute/' + instituteName + '/User/Student/' + className + '/' + Section;
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }

        filePath = './uploads/Institute/' + instituteName + '/User/Student/' + className + '/' + Section + '/Image/';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }

        next(null, filePath)


        // cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const imageType = file.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + imageType)
    }
})

var upload = multer({ storage: storage }).single('UserImage');

module.exports = {
    storage,
    upload
}