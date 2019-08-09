/*
  URL: /category
*/


var express = require('express');
var router = express.Router();
var apis=require('../../app/Repository/rentme/category.repo')
var global=require('../../app/config/rentme/global')
var dummy=require('../../app/seeders/dummy.data')
var body=require('body-parser')
var model=require('../../app/model/viewModel/rentmeapi/category.vm')

//#region get
router.get('/:id', function(req, res, next){
    if(global.demo){
      res.send(dummy.category)
    }else{
      apis.prototype.GetByID(req.params.id, function(data){
        res.send(data);
      }.bind(this), function(err){
        res.send(err);
      }.bind(this))
    }
})
//#endregion

module.exports = router;