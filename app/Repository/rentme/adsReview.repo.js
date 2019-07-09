var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/dbconfig');
const AdsReview = db.AdsReview;
const Op = db.Sequelize.Op;


function AdsReviewRepo(selectFunc, insertFunc){
    AdsReviewRepo.prototype.selectFunc=selectFunc;
    AdsReviewRepo.prototype.insertFunc=insertFunc;
}

//#region get
AdsReviewRepo.prototype.GetByAdID=function(id, success, failed){
  AdsReviewRepo.prototype.selectFunc.prototype.selectCondition("AdsReview", " AdsReview.adID == "+id,
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}
AdsReviewRepo.prototype.GetByUserID=function(id, success, failed){
  AdsReviewRepo.prototype.selectFunc.prototype.selectCondition("AdsReview", " AdsReview.userID == "+id,
  function(row, fields){
    success(row, fields);
  }, function(err){
    failed(err);
  })
}
//#endregion

//#region post
AdsReviewRepo.prototype.Insert=function(model, success, failed){
    AdsReview.create({
        userID:model.userID,
        rating:model.rating,
        description:model.description,
        adID:model.adID
  }).then(ads => {
    success(ads);
  }).catch(err => {
    failed(JSON.stringify({statusCode:500,description:"Fail! Error -> " + err}));
  })
}

AdsReviewRepo.prototype.Update=function(model, success, failed){
  AdsReview.update({
    rating:model.rating,
    description:model.description,
  },{ where: {
            id: {
              [Op.and]: model.id
            },
            userID:{
                [Op.and]: model.userID
            }
          }
  }); 
}
AdsReviewRepo.prototype.Delete=function(model, success, failed){
  AdsReview.destroy({
    where:{
      id: model.id,
      userID: model.userID
    }
  });
}
//#endregion



