
//#region ads
const adsRepo=require('./ads.repo')
const recommendedAdsRepo=require('./recommendedAds.repo')
const rentRequestRepo=require('./rentRequest.repo');
const adItemsRepo=require('./adItems.repo');

//#endregion

const categoryRepo=require('./category.repo');

//#region review
const userReviewRepo=require('./userReviews.repo');
const hostReviewRepo=require('./hostReview.repo');
const adsReviewRepo=require('./ads.repo');
//#endregion

module.exports={
  //#region ads
  adsRepo:adsRepo,
  adItemsRepo:adItemsRepo,
  rentRequestRepo:rentRequestRepo,
  recommendedAdsRepo:recommendedAdsRepo,
  //#endregion

  categoryRepo:categoryRepo,
  
  //#region review
  userReviewRepo:userReviewRepo,
  adsReviewRepo:adsReviewRepo,
  hostReviewRepo:hostReviewRepo
  //#endregion
}
