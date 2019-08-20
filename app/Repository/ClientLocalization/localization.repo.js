const db = require('../../config/ClientLocalization/dbconfig');
const CLLocalization = db.CLLocalization;
//Init Sequelize Operation
const Op = db.Sequelize.Op;
function LocalizationRepo(){
}
LocalizationRepo.prototype.getByAppID=function(id, success, failed){
  CLLocalization.findAll({
    where:{
      appid:id
    },
  }).then(version => {
    if(!version){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(version);
    }
  })
}
module.exports=LocalizationRepo;

