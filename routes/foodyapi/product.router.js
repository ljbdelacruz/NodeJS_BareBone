var express = require('express');
var router = express.Router();
var prodRepo=require("../../app/config/foody/repository/product.repo");

router.post('/new', function(req, res, next){
    console.log(req.body);
    prodRepo.prototype.insert(req.body.title, req.body.desc, req.body.price, "1ee", req.body.storeId, 0, req.body.category.toLowerCase(), (success)=>{
        console.log(success);
        res.status(200).json({
            success:200
        });
    },(error)=>{
        res.status(500).json({
            status:500,
            message:error
        });
        // console.log(error);
    });
});

router.get('/:category', function(req, res, next){
    console.log(req.params.category);
    prodRepo.prototype.findByCategory(req.params.category.toLowerCase(), (data)=>{
        console.log("Products");
        console.log(data);
        res.status(200).json({
            success:200, 
            data:data
        });
    }, (err)=>{
    })
});


// router.get('/', function(req, res, next){

// });
// router.get('/getUserProduct', function(req, res, next){

// });
// router.get('/getProductByCategory', function(req, res, next){
    
// });
// router.put('/new', function(req, res, next){

// });
// router.post('/update', function(req, res, next){

// });
// router.delete('/delete', function(req, res, next){

// });

module.exports = router;