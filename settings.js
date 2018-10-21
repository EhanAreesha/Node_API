var dbConfig = {
    //local
    //user: 'sa',
    //password: 'e34rE#$R',
    //server: 'IT-DEV100-LP\\MSSQLSERVER2016',
    //database: 'onEmsLive',
    //port: 1433

    user: 'khasan',
    password: 'ehanAreesha',
    server: 'KHASAN',
    database: 'IntraDB',
    port: 1433

    
};
var webPort = 1000;
var httpMsgFormate = "JSON";
var hostAdress = 'http://localhost:1000'

module.exports = {
    dbConfig,
    webPort,
    httpMsgFormate,
    hostAdress
}