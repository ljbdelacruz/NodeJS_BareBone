var connections=require('../Plugins/ljnodelinq/mysqlconfig')
function AdsRepo(selectFunc, insertFunc){
    AdsRepo.prototype.selectFunc=selectFunc;
    AdsRepo.prototype.insertFunc=insertFunc;
}
BranchRepo.prototype.GetByStoreID=function(id, success, failed){
  BranchRepo.prototype.selectFunc.prototype.selectCondition("Ads", " Branch.store_id == "+id,
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}
