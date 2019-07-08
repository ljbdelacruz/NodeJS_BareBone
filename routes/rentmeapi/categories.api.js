var express = require('express');
var router = express.Router();
var apis=require('../../app/Repository/rentme')

//#region get
router.get('/getCategory', function(req, res, next){
    apis.categoryRepo.GetByAll(function(data){
      console.log(data);
    }, function(err){
      console.log(err);
    })

    res.send([
      // {name:'Car', isSelected:false}, 
      // {name:'Housing', isSelected:false}, 
      // {name:'Services', isSelected:false},
      // {name:'Equipments', isSelected:false}, 
      // {name:'Dorm', isSelected:false}
    ])
})

//#endregion


module.exports = router;