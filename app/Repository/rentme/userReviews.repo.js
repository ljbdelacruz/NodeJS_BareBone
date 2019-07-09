var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const UserReview = db.UserReview;


function UserReviewRepo(selectFunc, insertFunc){
    UserReviewRepo.prototype.selectFunc=selectFunc;
    UserReviewRepo.prototype.insertFunc=insertFunc;
}
//#region get
UserReviewRepo.prototype.GetByCategoryID=function(id, success, failed){
    UserReviewRepo.prototype.selectFunc.prototype.selectCondition("UserReview", " RecommendedAdsRepo.categoryTypeID == "+id+" ORDER BY RecommendedAdsRepo.priority ASC",
        function(row, fields){
            success(row, fields);
        }, function(err){
            failed(err);
    })
}

//#endregion

//#region insert
UserReviewRepo.prototype.Insert=function(model, success, failed){
  UserReview.create({
    userID:model.userID,
    rating:model.rating,
    description:model.description,
    userID:model.userID
  }).then(userReview =>{
    success(userReview);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

//#endregion




