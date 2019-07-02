var express = require('express');
var router = express.Router();

router.get('/getSubCategoryByAdID', function(req, res, next){
    res.send([
        {title:'Rooms', count:1},
        {title:'Bathroom', count:2},
        {title:'Pool', count:1},
        {title:'Gym', count:1}
    ])
})