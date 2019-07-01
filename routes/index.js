var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getAds', function(req, res, next){
  res.send([
       {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''}},
       {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}},
       {images:[], title:'Sports Club ', desc:'Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events', price:'$400', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}}
      ])
});


router.get('/getCategory', function(req, res, next){
  res.send([
    {name:'Car', isSelected:false}, 
    {name:'Housing', isSelected:false}, 
    {name:'Services', isSelected:false},
    {name:'Equipments', isSelected:false}, 
    {name:'Dorm', isSelected:false}
  ])
})

router.get('/getRecommendedAds', function(req, res, next){
  res.send([
    {title:'Club House', price:'$40', description:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', image:[]}, 
    {title:'Jojos Crib', price:'$20', description:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', images:[]},
    {title:'Home Service Spa', price:'$20', description:'Massage Service with Sunspa treatment', images:[]}
  ])
})


module.exports = router;
