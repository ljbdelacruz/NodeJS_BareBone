var express = require('express');
var router = express.Router();
const categoryRepo=require("../../app/config/foody/repository/category.repo.js");

router.get('/type/:type', function(req, res, next){
    categoryRepo.prototype.findByCategory(req.params.type, (data)=>{
        res.status(200).json({
            status:200,
            data:data
        })
    }, (err)=>{
        res.send(500).json({
            success:500,
            message:err
        })
    })
});

router.post('/new', function(req, res, next){
    categoryRepo.prototype.insert(req.body.desc, req.body.value, req.body.categoryType, (data)=>{
        res.status(200).json({
            status:200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            success:500,
            message:err
        })
    })
})






module.exports = router;