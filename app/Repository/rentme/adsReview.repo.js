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
  AdsReview.findAll({
    where: {
      id: id
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
  })
}
AdsReviewRepo.prototype.GetByUserID=function(id, success, failed){
  AdsReview.findAll({
    where: {
      userID: id
    }
  }).then(ads => {
    if(!ads){
      failed(JSON.stringify({status:404, description:'Data Not Found'}))
    }else{
      success(ads);
    }
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



