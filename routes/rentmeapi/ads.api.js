/*
  url: /ads
*/

var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')
const global=require('../../app/config/global')

router.get('/getAds', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads);
    }else{
      //implement repo fetching here
      res.send()
    }
});

router.get('/getRecommendedAds', function(req, res, next){
  if(global.demo){
    res.send(dummy.rads)
  }else{
    res.send();
  }  
})

router.get('/getAdsByUser', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads)
    }

})

router.get('/getByUserCategory', function(req, res, next){
  //get the ads by user category
})


module.exports = router;