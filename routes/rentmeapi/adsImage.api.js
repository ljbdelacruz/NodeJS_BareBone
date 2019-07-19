/*
  url: /adsimage
*/
//#region modules
var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')
const global=require('../../app/config/global')
var repo=require('../../app/Repository/rentme/adsImage.repo');
var model=require('../../app/model/viewModel/rentmeapi/adsImage.vm');
const fs = require('fs');
const uuidv1 = require('uuid/v1');
//#endregion

//#region get
router.get('/ad/:id', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads);
    }else{
      //implement repo fetching here
      repo.prototype.GetByAdID(req.params.id, function(data){
          res.send(data)
      }.bind(this), function(err){
          res.send(err);
      }.bind(this))
    }
});
router.get('/uid/:uid/:uid2', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads);
    }else{
      //implement repo fetching here
      repo.prototype.GetByUID(req.params.uid, req.params.uid2, function(data){
          res.send(data)
      }.bind(this), function(err){
          res.send(err);
      }.bind(this))
    }
});
//reading the base64 string file in the host
router.get('/readtxt/:name', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads);
    }else{
      //implement repo fetching here
      fs.readFile("./app/img/uploads/"+req.params.name+".txt", 'utf8', function(err, data) {
        if (err) throw err;
        res.send(data);
      });
    }
});
//#endregion

//#region post
//for saving on the host via txt the base64 string
router.post('/totxt', function(req, res, next){
    if(global.demo){
        //invoke demo data
        res.send({})
    }else{
        //do saving the base64 to txt
      var stream = fs.createWriteStream("./app/img/uploads/"+req.body.filename+".txt");
      stream.once('open', function(fd) {
        stream.write(req.body.source);
        stream.end();
      });
      res.send({statusCode:200, description:"Success Saving"});
    }
})
//saving the file path and where it can be located
router.post('/new', function(req, res, next){
    if(global.demo){
      res.send({});
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
//for 3rd party cloud image storage
router.post('/upload', function(req, res, next){
    if(global.demo){
      res.send({});
    }else{
        //upload image
        //do image upload here pass base64 string and convert to image for upload in the cloud image storage        
        res.send("url for the uploaded image")
    }
});

//#endregion



module.exports = router;