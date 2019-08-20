const db = require('../../config/ClientLocalization/dbconfig');
const CLAppVersioning = db.CLAppVersioning;
//Init Sequelize Operation
const Op = db.Sequelize.Op;


function AppVersioningRepo(){
}
AppVersioningRepo.prototype.checkVersion=function(id, success, failed){
    CLAppVersioning.findOne({
      where:{
        id:1
      },
    }).then(version => {
      if(!version){
        failed(JSON.stringify({status:404, description:'Data Not Found'}))
      }else{
        success(version);
      }
    })
}
module.exports=AppVersioningRepo;

