var express = require('express');
var router = express.Router();
router.get('/getAds', function(req, res, next){
    res.send([
         {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''}},
         {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}},
         {images:[], title:'Sports Club ', desc:'Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events', price:'$400', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}}

        ])
  });
module.exports = router;