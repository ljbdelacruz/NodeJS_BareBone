var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const Ads = db.Ads;
const Op = db.Sequelize.Op;


function AdsRepo(selectFunc, insertFunc){
    AdsRepo.prototype.selectFunc=selectFunc;
    AdsRepo.prototype.insertFunc=insertFunc;
}

//#region get
AdsRepo.prototype.GetByLocation=function(long, lat, success, failed){
  AdsRepo.prototype.selectFunc.prototype.selectCondition("Ads", long+" < Ads.longitude && Ads.longitude > "+(-long)+" && "+
  lat+" < Ads.latitude && Ads.latitude > "+(-lat)+" ORDER BY Ads.priority ASC",
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}
AdsRepo.prototype.GetByPriority=function(success, failed){
  AdsRepo.prototype.selectFunc.prototype.selectCondition("Ads", " ORDER BY Ads.priority ASC",
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}
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
    categoryID:model.categoryID,
    priority:model.priority,
    longitude:model.longitude,
    latitude:model.latitude,

    unitIdentifier:model.unitIdentifier,
    rentedByUserID:model.rentedByUserID,
    rentedAt:model.rentedAt,
    returnDate:model.returnDate,
    available:model.available
  }).then(ads => {
    success(ads);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}



//#endregion



