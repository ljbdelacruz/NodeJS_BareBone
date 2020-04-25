var express = require('express');
var router = express.Router();
var userCart=require("../../app/config/foody/repository/usercart.repo");
var userCartItem=require("../../app/config/foody/repository/userCartItem.repo");


//Cart
router.get('/cart/:ownerId', function(req, res, next){
    userCart.prototype.findByOwnerId(req.params.ownerId, (data)=>{
        res.status(200).json({
            status:200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            status:500,
            message:err
        });
    })
})

router.post('/new/cart', function(req, res, next){
    userCart.prototype.insert(req.body.desc, req.body.prodId, req.body.ownerId, req.body.totalAmount, 0, (data)=>{
        res.status(200).json({
            status:200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            status:500,
            message:err
        })
    })
});

//cart item
router.get('/cartitem/:cartId', function(req, res, next){
    userCartItem.prototype.findByCartUUID(req.params.cartId, (data)=>{
        res.status(200).json({
            status:200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            status:500,
            message:err
        });
    })
})
router.post('/new/cartitem', function(req, res, next){
    userCartItem.prototype.insert(req.body.desc, req.body.prodId, req.body.cartUUID, req.body.storeUUID, req.body.quantity, req.body.amount, req.body.orderStatus, (data)=>{
        res.status(200).json({
            status:200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            status:500,
            message:err
        })
    })
});







module.exports = router;