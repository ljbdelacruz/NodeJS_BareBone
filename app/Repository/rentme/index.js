const adsRepo=require('./ads.repo')
const categoryRepo=require('./category.repo');
adsRepo();
module.exports={
  adsRepo:adsRepo,
  categoryRepo:categoryRepo,
}
