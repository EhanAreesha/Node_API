var utf8 = require('utf8');
var crypto = require('crypto');
var db = require('./db');

var encConfig = {
    hType: "sha256",
    eType: "base64",
    cEnc: "ascii"
};

var validateToken = function (req, res, next) {
    var auth = req.headers.authorization;
    if (auth == undefined) {
        return res.status(404).send({ message: 'Invalid Request!!' });
    }
    else {
        var token = req.headers['authorization'];
        if ((token == 'Request_From_onEMS_Android_app') || (token == 'Request_From_onEMS_Win_app')) {
            next();
        }
        else {
            var userAgent = req.headers['user-agent'];

            var tokenymodel = {};
            var tokenArray = token.split(/(\s+)/);
            tokenymodel = { reqToken: tokenArray[0] };

            var key = utf8.encode(new Buffer(tokenymodel.reqToken, encConfig.eType.toString()).toString(encConfig.cEnc));
            const parts = key.split(':');
            var keymodel = {};

            if (parts.length === 5) {
                keymodel = {
                    clientToken: parts[0],
                    instId: parts[1],
                    userid: parts[2],
                    menuId: parts[3],
                    actionType: parts[4],
                    useragent: 'Chrome/Mozzila'
                };
            }

            //Generate Token Server-Side
            var message = [keymodel.userid, keymodel.useragent].join(':').toString();
            //console.log(message);

            var sec_key = keymodel.actionType;
            var servertoken = crypto.createHmac(encConfig.hType.toString(), sec_key).update(message).digest(encConfig.eType.toString());

            //Validate Token
            if (keymodel.clientToken == servertoken) {
                var query = "[spUserAuthorization] '" + keymodel.userid + "'," + parseInt(keymodel.menuId) + ",'" + keymodel.actionType + "'," + parseInt(keymodel.instId) + "";
                //console.log(query);
                db.executeSql(query, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        var response = data.recordset[0].result;
                        if (response == 'true') {
                            next();
                        }
                        else {
                            return res.status(403).send({ message: 'Authorization Failed!! You are not Permitted!!' });
                        }
                    }
                });
            }
            else {
                return res.status(404).send({ message: 'Invalid Token!!' });
            }
        }
    }
}

module.exports = validateToken;