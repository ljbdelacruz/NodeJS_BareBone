var express = require('express');
var router = express.Router();
var apis=require('../../app/Repository/rentme')
var global=require('../../app/config/global')
var dummy=require('../../app/seeders/dummy.data')

//#region get
router.get('/getCategory', function(req, res, next){
    if(global.demo){
      res.send(dummy.category)
    }else{
      apis.categoryRepo.GetByAll(function(data){
        res.send(data);
      }, function(err){
        console.log(err);
        res.send(err);
      })
    }
})

//#endregion


module.exports = router;