var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const AdItems = db.AdItems;
const Op = db.Sequelize.Op;

function AdItemsRepo(selectFunc, insertFunc){
    AdItemsRepo.prototype.selectFunc=selectFunc;
    AdItemsRepo.prototype.insertFunc=insertFunc;
}
//#region get
AdItemsRepo.prototype.GetByAdID=function(id, success, failed){
    AdItemsRepo.prototype.selectFunc.prototype.selectCondition("AdItems", " AdItemsRepo.adID == "+id,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
AdItemsRepo.prototype.GetByRentedUserID=function(id, success, failed){
    AdItemsRepo.prototype.selectFunc.prototype.selectCondition("AdItems", " AdItemsRepo.rentedByUserID == "+id,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}

//#endregion

//#region post
AdItemsRepo.prototype.Insert=function(model, success, failed){
  AdItems.create({
    adID:model.adID,
    unitIdentifier:model.unitIdentifier,
    rentedByUserID:model.rentedByUserID,
    rentedAt:model.rentedAt,
    returnDate:model.returnDate,
    available:model.available,
  }).then(ads => {
    success(ads);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
AdItemsRepo.prototype.Update=function(model, success, failed){
    AdItems.update({
        unitIdentifier:model.unitIdentifier,
        rentedByUserID:model.rentedByUserID,
        rentedAt:model.rentedAt,
        returnDate:model.returnDate,
        available:model.available,
    },{ where: {
              id: {
                [Op.and]: model.id
              },
              adID:{
                  [Op.and]: model.adID
              }
      }
    }); 
}
AdItemsRepo.prototype.Delete=function(model, success, failed){
    AdItems.destroy({
      where: {
        id: model.id,
        adID: model.adID
      }
    });
}


//#endregion



