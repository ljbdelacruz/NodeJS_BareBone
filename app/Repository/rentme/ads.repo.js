var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/rentme/dbconfig');
const Ads = db.Ads;
const Op = db.Sequelize.Op;


function AdsRepo(selectFunc, insertFunc){
    AdsRepo.prototype.selectFunc=selectFunc;
    AdsRepo.prototype.insertFunc=insertFunc;
}

//#region get
AdsRepo.prototype.GetByLocation=function(long, lat, radius, success, failed){
  Ads.findAll({
    where: {
      longitude:{
        [Op.lt]:(long-radius),
        [Op.gt]:(long+radius)
      },
      latitude:{
        [Op.lt]:(lat-radius),
        [Op.gt]:(lat+radius)
      }
    },
    order: [
      ['priority', 'ASC'],
    ],
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })

}
AdsRepo.prototype.GetByOwnerID=function(id, success, failed){
  Ads.findAll({
    where: {
      ownerID:id
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsRepo.prototype.GetByCategoryID=function(id,  success, failed){
  Ads.findAll({
    where: {
      categoryID:id
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsRepo.prototype.GetByCategoryIDWithLimit=function(id, limit,  success, failed){
  Ads.findAll({
    where: {
      categoryID:id,
    },
    limit:limit
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsRepo.prototype.GetByTitle=function(title, success, failed){
  Ads.findAll({
    where: {
      title:{
        [Op.like]:title
      }
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsRepo.prototype.GetByRentedUserID=function(id, success, failed){
  Ads.findAll({
    where: {
      rentedByUserID:id
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })

}
//#endregion

//#region post
AdsRepo.prototype.insert=function(model, success, failed){
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
AdsRepo.prototype.update=function(model, success, failed){
  Category.update(
    { 
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
    },
    { 
      where: { 
        id: model.id
      } 
    }
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


AdsRepo.prototype.removeByID=function(id, success, failed){
  Ads.destroy({
    where: {
      id:id
    }
  })
}


//#endregion



