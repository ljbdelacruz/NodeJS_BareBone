var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const RecommendedAds = db.RecommendedAds;


function RecommendedAdsRepo(selectFunc, insertFunc){
    RecommendedAdsRepo.prototype.selectFunc=selectFunc;
    RecommendedAdsRepo.prototype.insertFunc=insertFunc;
}
//#region get
RecommendedAdsRepo.prototype.GetByCategoryID=function(id, success, failed){
  RecommendedAdsRepo.prototype.selectFunc.prototype.selectCondition("RecommendedAdsRepo", " RecommendedAdsRepo.categoryTypeID == "+id+" ORDER BY RecommendedAdsRepo.priority ASC",
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}

//#endregion

//#region insert
RecommendedAdsRepo.prototype.Insert=function(model, success, failed){
  RecommendedAds.create({
    adID:model.adID,
    priority:model.priority,
    categoryTypeID:model.categoryTypeID
  }).then(category =>{
    success(category);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

//#endregion




