var db = require('../core/db');
var BaseJoi = require('joi');
var Extension = require('joi-date-extensions');
var IpAddress = require('../iPAddress');
const Joi = BaseJoi.extend(Extension);



var getRestaurantDesh = function (req, res, reqBody) {
    //var bool = reqBody.IsActive === true ? 1 : 0;

    var sql = "spGetAllRestaurantDesh";

    console.log(sql);
    //  console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);

        }
    });
}

var SetRestaurant = function (req, res, reqBody) {
    //var bool = reqBody.IsActive === true ? 1 : 0;
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 300);
        });
    }
    var userID = reqBody.UserID;
    var logedUser = reqBody.LoggedUserID;
    var sql = "spSetRestaurant  " + parseInt(reqBody.InstituteID) + ", N'" + reqBody.InstituteName + "', " + reqBody.UserID + ", " + reqBody.LanguageID + ", '" + reqBody.ContactNo + "', N'" + reqBody.City + "',  N'" + reqBody.State + "',N'" + reqBody.ZipCode + "', N'" + reqBody.Address + "', N'" + reqBody.Lat + "',N'" + reqBody.Long + "', N'" + reqBody.Phone + "', N'" + reqBody.Website + "',N'" + reqBody.Email + "', N'" + reqBody.FacebookID + "',N'" + reqBody.TwitterID + "', N'" + reqBody.GooglePlusID + "', N'" + reqBody.Description + "', N'" + reqBody.ImageURL + "', N'" + reqBody.ProductList + "', " + reqBody.CategoryID + ", " + reqBody.IsApproved + ", " + reqBody.IsDeleted + ",N'" + reqBody.Country + "', " + reqBody.LoggedUserID + ",'" + IpAddress.IP + "'";

    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
            var InstituteID = data.recordset[0].ReturnValue;

            async function asyncCall() {
               
                        var sqld = "spUpdateCmnUser " +
                            userID + "," +                          
                            InstituteID + "," +
                            logedUser + ", '" +
                            IpAddress.IP + "'," +
                            0 + "";//isdeleted;

                        console.log(sqld);

                        var detailDelay = await Delay();
                        db.executeSql(sqld, function (data, err) {
                            if (err) {
                                //throw err;
                            } else {
                                res.send(data.recordset);
                                console.log("updated Successfully");
                            }
                            //res.end();
                        });                  
            }
            asyncCall();           
        }
        res.end();
    });
}


var getRestaurantByID = function (req, res, id) {

   var sql = "spGetRestautantByID " + id + "";
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

var GetAvailableHours = function (req, res, InstituteID, DayID, InsOpenDayID) {

    var sql = "spGetAvailableHours " + InstituteID + "," + DayID + "," + InsOpenDayID + "";
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


var SetInsAvailableHours = function (req, res, reqBody) {
    //var bool = reqBody.IsActive === true ? 1 : 0;
    var arr = reqBody.AvailableArray;
    for (var i = 0; i < arr.length; i++) {
        var sql = "spSetInsAvailableHours  " + arr[i].InsOpenDayID + "," + arr[i].DayID + ", " + arr[i].OpenTime + ", " + arr[i].CloseTime + "," + arr[i].IsClosed + "," + reqBody.InstituteID + "," + reqBody.IsDeleted + ", " + reqBody.LoggedUserID + ",'" + IpAddress.IP + "'";

        console.log(sql);
        //  console.log(sql);
        db.executeSql(sql, function (data, err) {
            if (err) {
                throw err;
            } else {
                res.send(data.recordset);
               
            }
            res.end();
        });
       
    }
   
}


var GetAllRestaurant = function (req, res, InstituteID) {

    var sql = "spGetAllRestaurant " + InstituteID + "";
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


var UpdateRestaurant = function (req, res, reqBody) {
    //var bool = reqBody.IsActive === true ? 1 : 0;

    var sql = "spUpdateRestaurant  " + reqBody.InstituteID + "," + reqBody.IsApproved+"";

    console.log(sql);
    //  console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);

        }
    });
}

var GetAllReviewsByInstitute = function (req, res, InstituteID) {

    var sql = "spGetAllReviewsByInstitute " + InstituteID + "";
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


var UpdateReview = function (req, res, reqBody) {
    //var bool = reqBody.IsActive === true ? 1 : 0;

    var sql = "spUpdateReview  " + reqBody.InstituteID + "," + reqBody.IsApproved + "," + reqBody.ItemReviewID + "";

    console.log(sql);
    //  console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);

        }
    });
}

var GetAllLanguages = function (req, res, LanguageID) {

    var sql = "spGetAllLanguages " + LanguageID + "";
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

module.exports = {
    SetRestaurant,
    getRestaurantByID,
    GetAvailableHours,
    SetInsAvailableHours,
    GetAllRestaurant,
    UpdateRestaurant,
    GetAllReviewsByInstitute,
    UpdateReview,
    getRestaurantDesh,
    GetAllLanguages

}