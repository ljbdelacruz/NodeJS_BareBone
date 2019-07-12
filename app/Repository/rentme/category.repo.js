var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const Category = db.Category;

function CategoryRepo(selectFunc, insertFunc){
    CategoryRepo.prototype.selectFunc=selectFunc;
    CategoryRepo.prototype.insertFunc=insertFunc;
}
//#region get
CategoryRepo.prototype.GetByID=function(id, success, failed){
  Category.findAll({
    where: {
      id: id
    }
  }).then(category => {
    if(!category){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(category[0]);
    }
  })
}
CategoryRepo.prototype.GetByAll=function(success, failed){
    Category.findAll({
    }).then(category => {
      if(!category){
        failed(JSON.stringify({status:404, description:'Data Not Found'}))
      }else{
        success(category);
      }
    })
}

//this is subcategory part fetching
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
CategoryRepo.prototype.insert=function(model, success, failed){
  Category.create({
    name:model.name,
    parent:model.parent
  }).then(category => {
    success(category);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
CategoryRepo.prototype.update=function(model, success, failed){
    Category.update(
      { name: model.name, parent:model.parent },
      { where: { id: model.id } }
    ).then(result=>{
      console.log(result);
      if(result[0] == 0){
        //not found my error code 404
        failed({message:"Rows not found!", statusCode:404});
      }else{
        //success scode 200
        success({statusCode:200});
      }
    }).catch(err=>{
      failed(err);
    })

}





//#endregion

module.exports=CategoryRepo;



