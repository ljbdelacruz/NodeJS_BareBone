/*   
    URL: /userrating

*/
//#region modules
var express = require('express');
var router = express.Router();
var repo=require('../../app/Repository/rentme/rentRequest.repo')
var global=require('../../app/config/global')
var model=require('../../app/model/viewModel/rentmeapi/rentRequest.vm')
//#endregion


//#region get
router.get('/hostid/:id', function(req, res, next) {
    if(global.demo){
        res.send({})
    }else{
        repo.prototype.GetByHostID(req.params.id, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
});
router.get('/userid/:id', function(req, res, next) {
    if(global.demo){
        res.send({})
    }else{
        repo.prototype.GetByHostID(req.params.id, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
});


//#endregion


//#region post
router.post('/new', function(req, res, next){
    let cmodel=new model()
    cmodel.toObject(req.body);
    repo.prototype.insert(cmodel, function(data){
        res.send(data);
    }.bind(this), function(err){
        res.send(err);
    }.bind(this))
})
router.post('/update', function(req, res, next){
    let cmodel=new model()
    cmodel.toObject(req.body);
    repo.prototype.update(cmodel, function(data){
        res.send(data);
    }.bind(this), function(err){
        res.send(err);
    }.bind(this))
})
router.post('/remove', function(req, res, next){
    let cmodel=new model()
    cmodel.toObject(req.body);
    repo.prototype.remove(cmodel, function(data){
        res.send(data);
    }.bind(this), function(err){
        res.send(err);
    }.bind(this))
})
//#endregion

//#endregion
module.exports = router;

