const adsRepo=require('./ads.repo')
const categoryRepo=require('./category.repo');
const recommendedAdsRepo=require('./recommendedAds.repo')
const userReviewRepo=require('./userReviews.repo');

module.exports={
  adsRepo:adsRepo,
  categoryRepo:categoryRepo,
  recommendedAdsRepo:recommendedAdsRepo,
  userReviewRepo:userReviewRepo,
  
}
