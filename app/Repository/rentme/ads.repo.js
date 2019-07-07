var connections=require('../../../services/data/mysqlconfig')
function AdsRepo(selectFunc, insertFunc){
    AdsRepo.prototype.selectFunc=selectFunc;
    AdsRepo.prototype.insertFunc=insertFunc;
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



