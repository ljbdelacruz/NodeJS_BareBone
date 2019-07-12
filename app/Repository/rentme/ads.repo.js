var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const Ads = db.Ads;
const Op = db.Sequelize.Op;


function AdsRepo(selectFunc, insertFunc){
    AdsRepo.prototype.selectFunc=selectFunc;
    AdsRepo.prototype.insertFunc=insertFunc;
}

//#region get
AdsRepo.prototype.GetByLocation=function(long, lat, radius, success, failed){
  Ads.findAll({
    where: {
      longitude:{
        [Op.lt]:(long-radius),
        [Op.gt]:(long+radius)
      },
      latitude:{
        [Op.lt]:(lat-radius),
        [Op.gt]:(lat+radius)
      }
    },
    order: [
      ['priority', 'ASC'],
    ],
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })

}
AdsRepo.prototype.GetByOwnerID=function(id, success, failed){
  Ads.findAll({
    where: {
      ownerID:id
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsRepo.prototype.GetByCategoryID=function(id, success, failed){
  Ads.findAll({
    where: {
      categoryID:id
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsRepo.prototype.GetByTitle=function(title, success, failed){
  Ads.findAll({
    where: {
      title:{
        [Op.like]:title
      }
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsRepo.prototype.GetByRentedUserID=function(id, success, failed){
  Ads.findAll({
    where: {
      rentedByUserID:id
    }
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
AdsRepo.prototype.Insert=function(model, success, failed){
  Ads.create({
    adsID:model.adsID,
    source:model.source
  }).then(ads => {
    success(ads);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}



//#endregion



