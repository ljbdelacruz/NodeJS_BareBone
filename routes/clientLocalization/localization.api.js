/*
    url: /localization/
*/

var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')
const global=require('../../app/config/ClientLocalization/global')
var repo=require('../../app/Repository/ClientLocalization/localization.repo')

router.get('/getByAppID/:id', function(req, res, next){
    if(global.demo){
        res.send({desc:"DUMMY MODE"});
    }else{
        repo.prototype.getByAppID(req.params.id, 
            function(local){
              res.send(local);
            }, function(err){
              res.send(err);
            }
        )
    }
});

module.exports = router;



