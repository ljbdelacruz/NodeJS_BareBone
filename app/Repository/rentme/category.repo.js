var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const Category = db.Category;


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
CategoryRepo.prototype.GetByAll=function(success, failed){
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

//#region insert
CategoryRepo.prototype.Insert=function(model, success, failed){
  Ads.create({
    name:model.name,
    parent:model.parent
  }).then(category => {
    success(category);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

//#endregion




