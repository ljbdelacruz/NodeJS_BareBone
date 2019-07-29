var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/rentme/dbconfig');
const Categories = db.Categories;

function CategoryRepo(selectFunc, insertFunc){
    CategoryRepo.prototype.selectFunc=selectFunc;
    CategoryRepo.prototype.insertFunc=insertFunc;
}
//#region get
CategoryRepo.prototype.GetByID=function(id, success, failed){
  Categories.findOne({
    where:{
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
CategoryRepo.prototype.GetByAll=function(parentid,success, failed){
  Categories.findAll({
    where: {
      parent: parentid
    },
  }).then(category => {

    if(!category){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(category);
    }
  })
  
}

//this is subcategory part fetching
CategoryRepo.prototype.GetByParent=function(parentID, success, failed){
  Categories.findAll({
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
  Categories.create({
    name:model.name,
    parent:model.parent
  }).then(category => {
    success(JSON.stringify({statusCode:200, description:"Success"}));
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
CategoryRepo.prototype.update=function(model, success, failed){
  Categories.update(
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
  Categories.destroy({
    where: {
      id:id
    }
  }).then(data=>{
    if(data == 1){
      success({statusCode:200, description:"Success"});
    }else{
      failed({statusCode:404, description:"Data Not Found!"});
    }
  }).catch(err=>{
    failed({statusCode:500,description:"Fail! Error -> " + err});
  });
}






//#endregion

module.exports=CategoryRepo;



