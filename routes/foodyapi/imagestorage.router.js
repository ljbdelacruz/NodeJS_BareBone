var express = require('express');
var router = express.Router();
const imageStorageRepo=require("../../app/config/foody/repository/imagestorage.repo.js");



router.post('/new', function(req, res, next){
    imageStorageRepo.prototype.insert(req.body.src, req.body.type, req.body.ownerId, (data)=>{
        res.status(200).json({
            status: 200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            status:500,
            message:err
        });
    })
});

router.get('/:ownerId/:type', function(req, res, next){
    imageStorageRepo.prototype.findByOwnerId(req.params.ownerId, req.params.type, (data)=>{
        res.status(200).json({
            status: 200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            status:500,
            message:err
        });
    })
})


module.exports = router;