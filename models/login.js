var db = require('../core/db');
var nodemailer = require("nodemailer");
//Get login info using this function

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "m.j.alam1988@gmail.com",//"m.j.alam1988@gmail.com, muhammadshibleshoaib@gmail.com"
        pass: "cobposjjfuaertzz" //"shible01911622088, cobposjjfuaertzz"
    }//,
    //authMethod: 'NTLM',
    //secure: false,
    //ignoreTLS: false,
    //debug: true
});

var getLoginData = function (req, res, userName, password) {

    console.log("spGetUserLoginData '" + userName + "','" + password + "' ");

    db.executeSql("spGetUserLoginData '" + userName + "','" + password + "' ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var resetPassword = function (req, res, UserID, LoginID, ResetPassword, InstituteID) {
    db.executeSql("spResetPassword " + UserID + ",'" + LoginID + "','" + ResetPassword + "'," + InstituteID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getUserEmailPhoneIfExist = function (req, res, UserEmailPhone) {
    db.executeSql("spGetUserEmailPhoneIfExist '" + UserEmailPhone + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var sendCodeThrouMail = function (req, res, EmailID, CodeSet) {
    var RNumber = Math.floor(Math.random() * 90000) + 10000;
    var dataset = { RandomNo: RNumber, Message: '' };
    var mailOptions = {
        from: 'm.j.alam1988@gmail.com', //"m.j.alam1988@gmail.com, muhammadshibleshoaib@gmail.com"
        to: EmailID,
        subject: 'Varification Code',
        text: 'Your Varification Code is : ' + RNumber//data.recordset[0].Body
    };
    //console.log(mailOptions.to);

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            //console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            dataset.Message = "Sent";
            res.send(dataset);
            res.end();
        }
    });
}


module.exports = {
    getLoginData,
    resetPassword,
    getUserEmailPhoneIfExist,
    sendCodeThrouMail
}