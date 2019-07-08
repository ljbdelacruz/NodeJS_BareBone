var connections=require('../../../services/data/mysqlconfig')
function CategoryRepo(selectFunc, insertFunc){
    CategoryRepo.prototype.selectFunc=selectFunc;
    CategoryRepo.prototype.insertFunc=insertFunc;
}
//#region get
CategoryRepo.prototype.GetByID=function(id, success, failed){
  CategoryRepo.prototype.selectFunc.prototype.selectCondition("Category", " Category.id == "+id,
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}
CategoryRepo.prototype.GetByAll=function(id, success, failed){
    CategoryRepo.prototype.selectFunc.prototype.selectAll("Category",
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
CategoryRepo.prototype.GetByParent=function(id, success, failed){
    CategoryRepo.prototype.selectFunc.prototype.selectCondition("Category"," Category.parent="+id,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
//#endregion






