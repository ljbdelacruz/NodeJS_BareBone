var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const AdImage = db.AdImage;
const Op = db.Sequelize.Op;


function AdsImageRepo(selectFunc, insertFunc){
  AdsImageRepo.prototype.selectFunc=selectFunc;
  AdsImageRepo.prototype.insertFunc=insertFunc;
}

//#region get
AdsImageRepo.prototype.GetByAdID=function(id, success, failed){
  AdImage.findAll({
    where: {
      adsID:id
    },
    order: [
      ['createdAt', 'ASC'],
    ],
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsImageRepo.prototype.GetByUID=function(uid, uid2, success, failed){
  AdImage.findAll({
    where: {
      UID:uid,
      UID2:uid2
    },
    order: [
      ['createdAt', 'ASC'],
    ],
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })

}

//#endregion

//#region post
AdsImageRepo.prototype.insert=function(model, success, failed){
  AdImage.create({
    id:model.id,
    adsID:model.adsID,
    source:model.source,
    UID:model.UID,
    UID2:model.UID2
  }).then(ads => {
    success(ads);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
AdsImageRepo.prototype.remove=function(model, success, failed){
  AdImage.destroy({
    where: {
      id: model.id,
      UID:model.UID,
      UID2:model.UID2
    }
  }).then(data => {
    if(data == 1){
      success({statusCode:200, description:"Success"});
    }else{
      failed({statusCode:404, description:"Data Not Found!"});
    }
  }).catch(err=>{
    failed({statusCode:500,description:"Fail! Error -> " + err});
  });
}



//#endregion

module.exports=AdsImageRepo;