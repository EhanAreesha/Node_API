var db = require('../core/db');
var IpAddress = require('../iPAddress');
var nodemailer = require("nodemailer");


var getResSearch = function (req, res, Name, Loc) {
    console.log("spGetHalalListSearch " + Name + "," + Loc + "");
    db.executeSql("spGetHalalListSearch " + Name + "," + Loc+"", function (data, err) {
       
        var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
        // console.log(result.length);
        if (result.length == 0) {
            result = "[]";
            res.send(result);
        } else {
            res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
        }
        res.end();
       
    });
}
var getResDDL = function (req, res) {

    db.executeSql("select * from InsInstitute where IsDeleted = 0 ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getResDetail = function (req, res, ID) {
    console.log("spGetHalalDetail " + ID + "");
    db.executeSql("spGetHalalDetail " + ID + "", function (data, err) {

        var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
        // console.log(result.length);
        if (result.length == 0) {
            result = "[]";
            res.send(result);
        } else {
            res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
        }
        res.end();

    });
}


var checkIpForReview = function (req, res, InstituteID) {
    console.log("select count(ReviewEmail) Result from CmnItemReview where CreatePc='" + IpAddress.IP + "' and InstituteID=" + InstituteID + "");
    db.executeSql("select count(ReviewEmail) Result from CmnItemReview where CreatePc='" + IpAddress.IP + "' and InstituteID=" + InstituteID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}





var setReview = function (req, res, reqbody) {
    var sql = "spSetCmnItemReview " + reqbody.ItemReviewID + ",'" + reqbody.Description + "','" + reqbody.Email + "'," + reqbody.ReviewPercent + ",'" + reqbody.ReviewBy + "'," + 1 + "," + 0 + "," + reqbody.InstituteID + ",'" + IpAddress.IP + "', " + 0 + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
         res.end();
    });
    
}

var getExistingParams = function (req, res, Property, Flag) {

    db.executeSql("spCmnUserAuthenticationExistingParams '" + Property + "', " + Flag + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var setUserJoin = function (req, res, reqBody) {
    console.log(req.reqBody);
    var sql = "bspSetCmnUser  " + reqBody.UserID + ",'" + reqBody.UserNo + "'," + reqBody.UserTypeID + ",'" + reqBody.UserTitleID + "','" + reqBody.UserFirstName + "','" + reqBody.UserMiddleName + "','" + reqBody.UserLastName + "','" + reqBody.UserFullName + "','" + reqBody.EmailID + "','" + reqBody.MobileNo + "'," + reqBody.GenderID + "," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.LoggedUserID + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    console.log('User data');
    console.log(sql);
    console.log('User data');
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
            console.log(data.recordset[0])
            var userID = data.recordset[0].ReturnValue;
            console.log('Auth data');
            var sql = "spSetCmnUserAuthentication   " + reqBody.AuthenticationID + ", " + userID + ", '" + reqBody.LoginID + "', '" + reqBody.EmailID + "', '" + reqBody.MobileNo + "', '" + reqBody.Password + "', '" + reqBody.ConfirmPassword + "', '" + reqBody.RegistrationDate + "', '" + reqBody.ExpireDate + "','" + reqBody.ExpireTime + "', '" + reqBody.ActivationDate + "', '" + reqBody.ActivationTime + "',  " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
            console.log('Auth data');
            console.log(sql);
            db.executeSql(sql, function (data, err) {
                if (err) {
                    throw err;
                } else {
                    res.send(data.recordset);
                }
                res.end();
            });
        }
        res.end();
    });
}
var headerFooterInfo= function (req, res) {

    db.executeSql("select * from InsInstitute where IsDeleted = 0  and InstituteID=1 ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

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


var getEmailVarificationCode = function (req, res, EmailID, RNumber) {
    console.log(EmailID);
    console.log(RNumber);
    var mailOptions = {
        from: 'm.j.alam1988@gmail.com', //"m.j.alam1988@gmail.com, muhammadshibleshoaib@gmail.com"
        to: EmailID,
        subject: 'Verification Code',
        text: 'Your Verification Code is : ' + RNumber//data.recordset[0].Body
    };
    //console.log(mailOptions.to);

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            //console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
}









module.exports = {
    getResDDL,
    getResSearch,
    getResDetail,
    setReview,
    getExistingParams,
    setUserJoin,
    headerFooterInfo,
    checkIpForReview,
    getEmailVarificationCode
}