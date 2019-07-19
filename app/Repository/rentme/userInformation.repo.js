var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const UserInformation = db.UserInformation;
const Op = db.Sequelize.Op;

function RentRequestRepo(selectFunc, insertFunc){
    RentRequestRepo.prototype.selectFunc=selectFunc;
    RentRequestRepo.prototype.insertFunc=insertFunc;
}
//#region get
RentRequestRepo.prototype.GetByID=function(id, success, failed){
  UserInformation.findOne({
    where: {
      id:id
    }
  }).then(data => {
    if(!data){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(data);
    }
  })
}
RentRequestRepo.prototype.GetBySocialUID=function(id, success, failed){
    UserInformation.findOne({
      where: {
        socialUID:id
      }
    }).then(data => {
      if(!data){
        failed(JSON.stringify({status:404, description:'Data Not Found'}))
      }else{
        success(data);
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


