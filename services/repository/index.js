var userAPI=require('./usersAPI');
var adsRepo=require('./ads.repository')
//setup api db connector
userAPI(connection.selectFunc);
module.exports={
    adsRepo:adsRepo
}






