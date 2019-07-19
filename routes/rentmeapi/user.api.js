//#region modules
var express = require('express');
var router = express.Router();
var repo=require('../../app/Repository/rentme/userInformation.repo')
var global=require('../../app/config/global')
var model=require('../../app/model/viewModel/rentmeapi/userInformation.vm');
const uuidv1 = require('uuid/v1');
//#endregion


//#region get
router.get('/id/:id', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    if(global.demo){
        res.send([
            {id:1, userInfo:{username:'ljbdelacruz'}, ratings:4},
            {id:2, userInfo:{username:'ljbdelacruz1'}, ratings:3},
            {id:3, userInfo:{username:'ljbdelacruz2'}, ratings:3}
        ])
    }else{
        repo.prototype.GetByID(req.params.id, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
});
router.get('/social/:id', function(req, res, next){
    if(global.demo){
        res.send([
            {id:1, userInfo:{username:'ljbdelacruz'}, ratings:4},
            {id:2, userInfo:{username:'ljbdelacruz1'}, ratings:3},
            {id:3, userInfo:{username:'ljbdelacruz2'}, ratings:3}
        ])
    }else{
        repo.prototype.GetBySocialUID(req.params.id, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
})

//#endregion

//#region post
router.post('/auth', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send({username:'ljbdelacruz', accessToken:'1ee'})
});
router.post('/registerSocial', function(req, res, next) {
    if(global.demo){
        res.send({})
    }else{
        let cmodel=new model()
        cmodel.toObject(req.body);
        cmodel.id=uuidv1();
        repo.prototype.insertSocial(cmodel, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
});
router.post('/register', function(req, res, next) {
    if(global.demo){
        res.send({})
    }else{
        let cmodel=new model()
        cmodel.toObject(req.body);
        cmodel.id=uuidv1();
        repo.prototype.insert(cmodel, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
});

router.post('/update', function(req, res, next){
    if(global.demo){
        res.send({})
    }else{
        let cmodel=new model()
        cmodel.toObject(req.body);
        repo.prototype.update(cmodel, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
})
router.post('/remove', function(req, res, next){
    if(global.demo){
        res.send({})
    }else{
        let cmodel=new model()
        cmodel.toObject(req.body);
        repo.prototype.update(cmodel, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
})
//#endregion




module.exports = router;


