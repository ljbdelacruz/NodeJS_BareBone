var express = require('express');
var router = express.Router();
const global=require('../../app/config/rentme/global')
const dummy=require('../../app/seeders/dummy.data')
const repo=require('../../app/Repository/rentme/category.repo');

router.get('/getSubCategoryByAdID', function(req, res, next){
    if(global.demo){
        res.send(dummy.categories);        
    }else{
        res.send([])
    }
})
module.exports = router;