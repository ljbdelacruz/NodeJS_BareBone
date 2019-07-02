var express = require('express');
var router = express.Router();

router.get('/getCategory', function(req, res, next){
    res.send([
      {name:'Car', isSelected:false}, 
      {name:'Housing', isSelected:false}, 
      {name:'Services', isSelected:false},
      {name:'Equipments', isSelected:false}, 
      {name:'Dorm', isSelected:false}
    ])
})