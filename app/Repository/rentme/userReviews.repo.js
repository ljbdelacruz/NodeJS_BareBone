var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const UserReview = db.UserReview;


function UserReviewRepo(selectFunc, insertFunc){
    UserReviewRepo.prototype.selectFunc=selectFunc;
    UserReviewRepo.prototype.insertFunc=insertFunc;
}
//#region get
UserReviewRepo.prototype.GetByUserID=function(id, success, failed){
    UserReviewRepo.prototype.selectFunc.prototype.selectCondition("UserReview", " UserReview.userID == "+id,
        function(row, fields){
            success(row, fields);
        }, function(err){
            failed(err);
    })
}
UserReviewRepo.prototype.GetByHostID=function(id, success, failed){
  UserReviewRepo.prototype.selectFunc.prototype.selectCondition("UserReview", " UserReview.hostID == "+id,
      function(row, fields){
          success(row, fields);
      }, function(err){
          failed(err);
  })
}

//#endregion

//#region post
UserReviewRepo.prototype.Insert=function(model, success, failed){
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

UserReviewRepo.prototype.Update=function(model, success, failed){
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

UserReviewRepo.prototype.Delete=function(model, success, failed){
  UserReview.destroy({
    where: {
      id: model.id,
      hostID: model.hostID
    }
  });
}


//#endregion




