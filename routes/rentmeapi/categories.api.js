var express = require('express');
var router = express.Router();
var apis=require('../../app/Repository/rentme/category.repo')
var global=require('../../app/config/global')
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
        res.send(data);        
      }.bind(this))
    }
})
router.get('/all', function(req, res, next){
  if(global.demo){
    res.send(dummy.category)
  }else{
    apis.prototype.GetByAll(function(data){
      res.send(data);
    }.bind(this), function(err){
      res.send(data);        
    }.bind(this))
  }
})

//#endregion


//#region post
router.post('/new', function(req, res, next){
  let cmodel=new model()
  cmodel.toObject(req.body);
  apis.prototype.insert(cmodel, function(data){
    res.send(data);
  }.bind(this), function(err){
    res.send(data);        
  }.bind(this))
})
router.post('/update', function(req, res, next){
  let cmodel=new model()
  cmodel.toObject(req.body);
  apis.prototype.update(cmodel, function(data){
    res.send(data);
  }.bind(this), function(err){
    res.send(err);        
  }.bind(this))
})
//#endregion


module.exports = router;