var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/rentme/dbconfig');
const HostReviews = db.HostReviews;
const Op = db.Sequelize.Op;

function HostReviewRepo(selectFunc, insertFunc){
    HostReviewRepo.prototype.selectFunc=selectFunc;
    HostReviewRepo.prototype.insertFunc=insertFunc;
}

//#region get
HostReviewRepo.prototype.GetByHostID=function(id, success, failed){
  HostReviews.findOne({
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
HostReviewRepo.prototype.GetByUserID=function(id, success, failed){
  HostReviews.findAll({
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
HostReviewRepo.prototype.GetByUserHostID=function(hid, uid, success, failed){
  HostReviews.findAll({
    where: {
      userID:uid,
      hostID:hid
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
HostReviewRepo.prototype.insert=function(model, success, failed){
  HostReviews.create({
        userID:model.userID,
        rating:model.rating,
        description:model.description,
        hostID:model.hostID
  }).then(ads => {
    success(ads);
  }).catch(err =>{
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

HostReviewRepo.prototype.update=function(model, success, failed){
  HostReviews.update({
    rating:model.rating,
    description:model.description,
  }, 
      { where: {
            id:{
              [Op.and]: model.id,
            },
            userID:{
              [Op.and]: model.userID,
            }
          }
  }).then(data=>{
    if(data[0] == 1){
      success({statusCode:200, description:"Success"});
    }else{
      failed({statusCode:404, description:"Data Not Found!"});
    }
  }).catch(err=>{
    failed({statusCode:500,description:"Fail! Error -> " + err});
  }); 
}
HostReviewRepo.prototype.remove=function(model, success, failed){
  HostReviews.destroy({
    where: {
      id: model.id,
      userID: model.userID
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

module.exports=HostReviewRepo;

