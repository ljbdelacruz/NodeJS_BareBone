var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const RentRequest = db.RentRequest;
const Op = db.Sequelize.Op;

function RentRequestRepo(selectFunc, insertFunc){
    RentRequestRepo.prototype.selectFunc=selectFunc;
    RentRequestRepo.prototype.insertFunc=insertFunc;
}
//#region get
RentRequestRepo.prototype.GetByHostID=function(id, success, failed){
  RentRequest.findAll({
    where: {
      hostID:id
    }
  }).then(hostReview => {
    if(!hostReview){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(hostReview);
    }
  })
}
RentRequestRepo.prototype.GetByUserID=function(id, success, failed){
  RentRequest.findAll({
    where: {
      userID:id
    }
  }).then(hostReview => {
    if(!hostReview){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(hostReview);
    }
  })
}
//#endregion

//#region post
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




