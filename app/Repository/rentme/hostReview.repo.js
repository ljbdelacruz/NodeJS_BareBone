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
    HostReviewRepo.prototype.selectFunc.prototype.selectCondition("HostReview", " HostReview.hostID == "+id,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
HostReviewRepo.prototype.GetByUserID=function(id, success, failed){
    HostReviewRepo.prototype.selectFunc.prototype.selectCondition("HostReview", " HostReview.userID == "+id,
    function(row, fields){
      success(row, fields);
    }, function(err){
      failed(err);
    })
}
//#endregion

//#region post
HostReviewRepo.prototype.Insert=function(model, success, failed){
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

HostReviewRepo.prototype.Update=function(model, success, failed){
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
HostReviewRepo.prototype.Delete=function(model, success, failed){
  HostReview.destroy({
    where: {
      id: model.id,
      userID: model.userID
    }
  });
}
//#endregion



