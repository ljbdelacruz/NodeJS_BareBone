var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const Category = db.Category;

function CategoryRepo(selectFunc, insertFunc){
    CategoryRepo.prototype.selectFunc=selectFunc;
    CategoryRepo.prototype.insertFunc=insertFunc;
}
//#region get
CategoryRepo.prototype.GetByID=function(id, success, failed){
  Category.find({
    where: {
      id: id
    }
  }).then(category => {
    if(!category){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(category);
    }
  })
}
CategoryRepo.prototype.GetByAll=function(success, failed){
    Category.findAll({

    }).then(category => {
      if(!category){
        failed(JSON.stringify({status:404, description:'Data Not Found'}))
      }else{
        console.log(category);
        success(category);
      }
    })
}

//this is subcategory part fetching
CategoryRepo.prototype.GetByParent=function(parentID, success, failed){
  Category.findAll({
    where: {
      parent: parentID
    }
  }).then(category => {
    if(!category){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(category);
    }
  })
}
//#endregion

//#region post
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
CategoryRepo.prototype.removeByID=function(id, success, failed){
  Category.destroy({
    where: {
      id:id
    }
  })
}






//#endregion

module.exports=CategoryRepo;



