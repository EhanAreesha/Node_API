var settings = require("../settings");

var show500 = function(req,res,err){
    if(settings.httpMsgFormate === "HTML"){
        res.writeHead(500,"Internal Error occurred",{"Content-type":"text/html"});
        res.write("<html><head><title>500</title></head><body>500:Internal Error.Details : "+err+"</body></html>");
    }else{
        res.writeHead(500,"Internal Error occurred",{"Content-type":"application/json"});
        res.write(JSON.stringify({data:"ERROR Occurred:" +err}));
    }
    res.end();
}

var sendJson = function(req,res,err){

    res.writeHead(200,{"Content-type":"application/json"});
    if(data){
        res.write(JSON.stringify(data));
    }
    res.end();
}


module.exports = {
    show500,
    sendJson
}