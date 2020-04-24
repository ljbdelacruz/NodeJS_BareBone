var express = require('express');
var router = express.Router();

/* GET home page. */
//#region get
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/getAds', function(req, res, next){
//   res.send([
//       {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', 
//        owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''},
//        review:{review:3, reviewer:120}
//       },
//        {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''},
//        review:{review:3.5, reviewer:11}
//       },
//        {images:[], title:'Sports Club ', desc:'Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events', price:'$400', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''},
//        review:{review:4, reviewer:89}
//       }
//       ])
// });
// router.get('/getCategory', function(req, res, next){
//   res.send([
//     {name:'Car', isSelected:false}, 
//     {name:'Housing', isSelected:false}, 
//     {name:'Services', isSelected:false},
//     {name:'Equipments', isSelected:false}, 
//     {name:'Dorm', isSelected:false}
//   ])
// })

// router.get('/getRecommendedAds', function(req, res, next){
//   res.send([
//    {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', 
//     owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''},
//     review:{review:3, reviewer:120}
//    },
//    {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''},
//     review:{review:3.5, reviewer:11}
//    },
//    {images:[], title:'Sports Club ', desc:'Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events', price:'$400', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''},
//     review:{review:4, reviewer:89}
//    }
//   ])
// })
// //#endregion

// //#region imageAssets
// router.get('/assets/images/fingerprint.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/"+"fingerprint.png");
// });
// router.get('/assets/images/qr-code.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/"+"qr-code.png");
// });
// router.get('/assets/images/facebook.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/"+"facebook.png");
// });
// router.get('/assets/images/gmail.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/"+"gmail.png");
// });
// router.get('/assets/images/success.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/"+"success.png");
// });
// router.get('/assets/images/username.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/"+"username.png");
// });
// router.get('/assets/images/password.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/"+"password.png");
// });

// //#region flags
// router.get('/assets/images/usa.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/flags/"+"usa.png");
// });
// router.get('/assets/images/germany.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/flags/"+"germany.png");
// });
// router.get('/assets/images/japan.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/flags/"+"japan.png");
// });
// //#endregion

// //#region buttons
// router.get('/assets/images/l-arrow.png', function (req, res) {
//   res.sendFile(__dirname +"/assets/images/buttons/"+"l-arrow.png");
// });
// //#endregion

// //#endregion

module.exports = router;
