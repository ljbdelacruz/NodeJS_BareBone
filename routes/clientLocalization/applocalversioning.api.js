
/*
    url: /applocalversion/
*/

var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')
const global=require('../../app/config/ClientLocalization/global')
var repo=require('../../app/Repository/ClientLocalization/appVersioning.repo')

router.get('/checkVersion/:id', function(req, res, next){
    console.log(req.params.id);
    if(global.demo){
        res.send({desc:"DUMMY MODE"});
    }else{
        repo.prototype.checkVersion(req.params.id, 
            function(local){
              res.send(local);
            }, function(err){
              res.send(err);
            }
        )
    }
});


module.exports = router;