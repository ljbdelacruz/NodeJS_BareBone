var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const HostReview = db.HostReview;
const Op = db.Sequelize.Op;

function HostReviewRepo(selectFunc, insertFunc){
    HostReviewRepo.prototype.selectFunc=selectFunc;
    HostReviewRepo.prototype.insertFunc=insertFunc;
}

//#region get
HostReviewRepo.prototype.GetByHostID=function(id, success, failed){
  HostReview.findAll({
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
  HostReview.findAll({
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
  HostReview.findAll({
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
  HostReview.create({
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
  HostReview.update({
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
  }); 
}
HostReviewRepo.prototype.remove=function(model, success, failed){
  HostReview.destroy({
    where: {
      id: model.id,
      userID: model.userID
    }
  });
}
//#endregion



