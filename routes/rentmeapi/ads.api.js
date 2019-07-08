/*
  url: /ads
*/

var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')
const global=require('../../app/config/global')
var repo=require('../../app/Repository/rentme');

router.get('/getAds', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads);
    }else{
      //implement repo fetching here
      res.send()
    }
});
//fetching ads based on the priority
router.get('/getRecommendedAds', function(req, res, next){
  if(global.demo){
    res.send(dummy.rads)
  }else{
    repo.adsRepo.GetByPriority(function(ads){

    }.bind(this), function(err){
      
    }.bind(this))
  }  
})
//fetching ads based on the category searched
router.get('/getRecommendedAdsCategory', function(req, res, next){
  if(global.demo){
    res.send(dummy.rads)
  }else{
    repo.recommendedAdsRepo.Get(function(rads){
      //fetch the ads info by id
      
    }.bind(this), function(err){

    }.bind(this))
  }  
})

router.get('/getAdsByUser', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads)
    }else{
      var catID="";
      repo.adsRepo.GetByCategoryID(catID, function(data){
        res.send(data);
      }.bind(this), function(err){
        res.send(err);
      }.bind(this))
    }

})

router.get('/getByUserCategory', function(req, res, next){
  //get the ads by user category

})


module.exports = router;