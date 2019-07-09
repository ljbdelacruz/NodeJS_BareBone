var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const RentRequest = db.RentRequest;


function RentRequestRepo(selectFunc, insertFunc){
    RentRequestRepo.prototype.selectFunc=selectFunc;
    RentRequestRepo.prototype.insertFunc=insertFunc;
}

//#region get
RentRequestRepo.prototype.GetByHostID=function(id, success, failed){
    RentRequestRepo.prototype.selectFunc.prototype.selectCondition("RentRequest", " RentRequest.hostID == "+id,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
RentRequestRepo.prototype.GetByUserID=function(id, success, failed){
    RentRequestRepo.prototype.selectFunc.prototype.selectCondition("RentRequest", " RentRequest.userID == "+id,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
//#endregion

//#region insert
RentRequestRepo.prototype.Insert=function(model, success, failed){
  RentRequest.create({
    userID:model.userID,
    adID:model.adID,
    hostID:model.hostID,
    message:model.message,
    dateBorrowStart:model.dateBorrowStart,
    dateBorrowEnd:model.dateBorrowEnd,
    payable:model.payable,
    quantity:model.quantity,
    isApproved:model.isApproved
  }).then(userReview =>{
    success(userReview);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
RentRequestRepo.prototype.Update=function(model, success, failed){
    RentRequest.update({
        message:model.message,
        dateBorrowStart:model.dateBorrowStart,
        dateBorrowEnd:model.dateBorrowEnd,
        payable:model.payable,
        quantity:model.quantity,
        isApproved:model.isApproved
    }, 
        { where: {
              id: {
                [Op.and]: model.id
              },
              userID:{
                  [Op.and]: model.userID
              }
            }
    }); 
}
RentRequestRepo.prototype.Delete=function(model, success, failed){
    RentRequest.destroy({
      where: {
        id: model.id,
        userID: model.userID
      }
    });
}

//#endregion




