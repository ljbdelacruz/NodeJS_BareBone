/*
  url: /ads
*/

var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')

router.get('/getAds', function(req, res, next){
    res.send(dummy.ads);
});

router.get('/getRecommendedAds', function(req, res, next){
  res.send([
   {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', 
    owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''},
    review:{review:3, reviewer:120}
   },
    {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''},
    review:{review:3.5, reviewer:11}
   },
   {images:[], title:'Sports Club ', desc:'Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events', price:'$400', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''},
    review:{review:4, reviewer:89}
   }
  ])
  
})

router.get('/getAdsByUser', function(req, res, next){
    res.send([
      
    ])
})

router.get('/getByUserCategory', function(req, res, next){
  //get the ads by user category
})


module.exports = router;