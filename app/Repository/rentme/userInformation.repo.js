var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/rentme/dbconfig');
const UserInformation = db.UserInformation;
const Op = db.Sequelize.Op;

function UserInformationRepo(selectFunc, insertFunc){
    RentRequestRepo.prototype.selectFunc=selectFunc;
    RentRequestRepo.prototype.insertFunc=insertFunc;
}
//#region get
UserInformationRepo.prototype.GetByID=function(id, success, failed){
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
UserInformationRepo.prototype.GetBySocialUID=function(id, success, failed){
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
UserInformationRepo.prototype.insertSocial=function(model, success, failed){
  UserInformation.create({
    id:model.id,
    socialUID:model.socialUID,
    isVerified:true,
    isHost:false,
    registration:model.registration
  }).then(data =>{
    success(data);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}
UserInformationRepo.prototype.insert=function(model, success, failed){
    UserInformation.create({
        id:model.id,
        firstname:model.firstname,
        lastname:model.lastname,
        socialUID:model.socialUID,
        registration:model.registration,
        isVerified:false,
        isHost:false,
        registration:model.registration,
        emailAddress: JSON.stringify(model.emailAddress),
        contactNumber:JSON.stringify(model.contactNumber),
        profileimage:model.profileimage
    }).then(data =>{
      success(data);
    }).catch(err => {
      failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
    })
}
UserInformationRepo.prototype.update=function(model, success, failed){
    UserInformation.update({
        firstname:model.firstname,
        lastname:model.lastname,
        profileimage:model.profileimage,
        isVerified:model.isVerified,
        isHost:model.isHost,
        emailAddress:model.emailAddress,
        contactNumber:model.contactNumber,
    }, 
    { where: {
              id: model.id,
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

UserInformationRepo.prototype.remove=function(model, success, failed){
    UserInformation.destroy({
      where: {
        id: model.id,
        socialUID:model.socialUID
      }
    }).then(data => {
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

module.exports=UserInformationRepo;


