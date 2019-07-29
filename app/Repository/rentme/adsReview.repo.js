var connections=require('../../../services/data/mysqlconfig')
const db = require('../../config/rentme/dbconfig');
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
      adID: id,
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
AdsReviewRepo.prototype.GetByUserADID=function(adid, uid, success, failed){
  AdsReview.findOne({
    where: {
      userID: uid,
      adID:adid
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
AdsReviewRepo.prototype.insert=function(model, success, failed){
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

AdsReviewRepo.prototype.update=function(model, success, failed){
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
AdsReviewRepo.prototype.remove=function(model, success, failed){
  AdsReview.destroy({
    where:{
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

module.exports=AdsReviewRepo;


