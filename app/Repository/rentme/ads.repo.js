var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const Ads = db.Ads;
const Op = db.Sequelize.Op;


function AdsRepo(selectFunc, insertFunc){
    AdsRepo.prototype.selectFunc=selectFunc;
    AdsRepo.prototype.insertFunc=insertFunc;
}

//#region get
AdsRepo.prototype.GetByOwnerID=function(id, success, failed){
  AdsRepo.prototype.selectFunc.prototype.selectCondition("Ads", " Ads.ownerID == "+id,
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}
AdsRepo.prototype.GetByCategoryID=function(id, success, failed){
    AdsRepo.prototype.selectFunc.prototype.selectCondition("Ads", " Ads.categoryID == "+id,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
AdsRepo.prototype.GetByTitle=function(title, success, failed){
    AdsRepo.prototype.selectFunc.prototype.selectCondition("Ads", " Ads.title == "+title,
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
    title:model.title,
    description:model.description,
    price:model.price,
    currencyCode:model.currencyCode,
    ownerID:model.ownerID,
    categoryID:model.categoryID
  }).then(ads => {
    success(ads);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

//#endregion



