var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/rentme/dbconfig');
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
    },
    order:[
      ['updatedAt', 'ASC']
    ]
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
    },
    order:[
      ['updatedAt', 'ASC']
    ]
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
RentRequestRepo.prototype.insert=function(model, success, failed){
  RentRequest.create({
    userID:model.userID,
    adID: model.adID,
    hostID:model.hostID,
    message:model.message,
    dateBorrowStart:model.dateBorrowStart,
    dateBorrowEnd:model.dateBorrowEnd,
    payable:model.payable,
    quantity:model.quantity,
    isApproved: model.isApproved,
  }).then(data =>{
    success(data);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
RentRequestRepo.prototype.update=function(model, success, failed){
    RentRequest.update({
        message:model.message,
        dateBorrowStart:model.dateBorrowStart,
        dateBorrowEnd:model.dateBorrowEnd,
        payable:model.payable,
        quantity:model.quantity,
        isApproved:model.isApproved
    }, 
        { where: {
              id: model.id,
              userID:model.userID
            }
    }).then(data=>{
      if(data[0] == 1){
      }else{
        failed({statusCode:404, description:"Data Not Found!"});
      }
    }).catch(err=>{
      failed({statusCode:500,description:"Fail! Error -> " + err});
    });
}
RentRequestRepo.prototype.remove=function(model, success, failed){
    RentRequest.destroy({
      where: {
        id: model.id,
        userID: model.userID
      }
    }).then(data => {
      if(data == 1){
        success({statusCode:200, description:"Success"});
      }else{
        failed({statusCode:404, description:"Data Not Found!"});
      }
    }).catch(err=>{
      failed({statusCode:500,description:"Fail! Error -> " + err});
    });;
}

//#endregion

module.exports=RentRequestRepo;


