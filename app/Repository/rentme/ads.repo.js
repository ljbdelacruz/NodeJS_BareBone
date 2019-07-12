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

    AdsRepo.prototype.selectFunc.prototype.selectCondition("Ads", " Ads.title == "+title,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
AdsRepo.prototype.GetByRentedUserID=function(id, success, failed){
  AdsRepo.prototype.selectFunc.prototype.selectCondition("Ads", " Ads.rentedByUserID == "+id,
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
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



