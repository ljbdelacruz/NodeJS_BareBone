/*
  url: /ads
*/
//#region modules
var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')
const global=require('../../app/config/global')
var repo=require('../../app/Repository/rentme/ads.repo');
var model=require('../../app/model/viewModel/rentmeapi/ads.vm');
//#endregion


//#region get
router.get('/getAds', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads);
    }else{
      //implement repo fetching here
      res.send()
    }
});
//fetching ads based on the priority
router.get('/getRecommendedAds', function(req, res, next){
  if(global.demo){
    res.send(dummy.rads)
  }else{
    repo.Get(function(ads){
      res.send(ads);
    }.bind(this), function(err){
      res.send(err);
    }.bind(this))
  }  
})
//fetching ads based on the category searched
router.get('/getRecommendedAdsCategory', function(req, res, next){
  if(global.demo){
    res.send(dummy.rads)
  }else{
    repo.recommendedAdsRepo.Get(function(rads){
      //fetch the ads info by id

    }.bind(this), function(err){

    }.bind(this))
  }  
})

router.get('/getAdsByUser', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads)
    }else{
      var catID="";
      this.repo.adsRepo.GetByCategoryID(catID, function(data){
        res.send(data);
      }.bind(this), function(err){
        res.send(err);
      }.bind(this))
    }

})

router.get('/getByUserCategory', function(req, res, next){
  //get the ads by user category
  if(global.demo){
    res.send(dummy.rads)
  }else{
    res.send({});
  }
})

//#endregion

//#region post
router.post('/new', function(req, res, next){
  if(global.demo){
    res.send(dummy.ads);
  }else{
    let cmodel=new model()
    cmodel.toObject(req.body);
    console.log(JSON.stringify(repo));
    repo.prototype.insert(cmodel, function(data){
      res.send(data);
    }.bind(this), function(err){
      res.send(err);
    }.bind(this))
  }
});
router.post('/update', function(req, res, next){
  if(global.demo){
    res.send(dummy.ads);
  }else{
    let cmodel=new model()
    cmodel.toObject(req.body);
    repo.prototype.update(cmodel, function(data){
      res.send(data);
    }.bind(this), function(err){
      res.send(err);
    }.bind(this))
  }
});
router.post('/remove', function(req, res, next){
  if(global.demo){
    res.send(dummy.ads);
  }else{
    let cmodel=new model()
    cmodel.toObject(req.body);
    repo.prototype.removeByID(cmodel.id, function(data){
      res.send(data);
    }.bind(this), function(err){
      res.send(err);
    }.bind(this))
  }
});

//#endregion



module.exports = router;