var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const UserReview = db.UserReview;
const Op = db.Sequelize.Op;
function UserReviewRepo(selectFunc, insertFunc){
    UserReviewRepo.prototype.selectFunc=selectFunc;
    UserReviewRepo.prototype.insertFunc=insertFunc;
}
//#region get
UserReviewRepo.prototype.GetByUserID=function(id, success, failed){
  UserReview.findAll({
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
UserReviewRepo.prototype.GetByHostID=function(id, success, failed){
  UserReview.findAll({
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

//#endregion

//#region post
UserReviewRepo.prototype.insert=function(model, success, failed){
  UserReview.create({
    hostID:model.hostID,
    rating:model.rating,
    description:model.description,
    userID:model.userID
  }).then(userReview =>{
    success(userReview);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

UserReviewRepo.prototype.update=function(model, success, failed){
  UserReview.update({
    rating:model.rating,
    description:model.description,
  },{ where: {
        id: {
          [Op.and]: model.id
        }
    }
  }); 
}

UserReviewRepo.prototype.remove=function(model, success, failed){
  UserReview.destroy({
    where: {
      id: model.id,
      hostID: model.hostID
    }
  });
}


//#endregion




