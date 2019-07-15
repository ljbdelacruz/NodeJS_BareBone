/*   
    URL: /userrating

*/
//#region modules
var express = require('express');
var router = express.Router();
var body=require('body-parser')
var repo=require('../../app/Repository/rentme/hostReview.repo')
var global=require('../../app/config/global')
var model=require('../../app/model/viewModel/rentmeapi/hostRatings.vm')
//#endregion

//#region get
router.get('/userid/:id', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    if(global.demo){
        res.send([
            {id:1, userInfo:{username:'ljbdelacruz'}, ratings:4},
            {id:2, userInfo:{username:'ljbdelacruz1'}, ratings:3},
            {id:3, userInfo:{username:'ljbdelacruz2'}, ratings:3}
        ])
    }else{
        repo.prototype.GetByUserID(req.params.id, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
});

router.get('/hostid/:id', function(req, res, next){
    if(global.demo){
        res.send({})
    }else{
        repo.prototype.GetByHostID(req.params.id, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
})

router.get('/hostid/:hid/:uid', function(req, res, next){
    if(global.demo){
        res.send({})
    }else{
        repo.prototype.GetByUserHostID(req.params.hid, req.params.uid, function(data){
            res.send(data);
        }.bind(this), function(err){
            res.send(err);
        }.bind(this))
    }
})
//#endregion

//#region post
router.post('/new', function(req, res, next){
    console.log("SHITE!");
    console.log(req.body)
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
router.post("/test", function(req, res, next){
    console.log("WHAT!");
    res.send({statusCode:200});
})
router.get("/test1", function(req, res, next){
    console.log("WHAT!");
    res.send({statusCode:200});
})



//#endregion
module.exports = router;

