/*
  url: /ads
*/
//#region modules
var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')
const global=require('../../app/config/rentme/global')
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
router.get('/searchads/:cid/:title', function(req, res, next){
  if(global.demo){
    res.send("DEMO");
  }else{
    console.log(req.params.title+" "+req.params.cid);
    repo.prototype.GetByTitleCategory(req.params.title, req.params.cid, 
    function(data){
      console.log(data);
      res.send(data);
    }, function(){
      res.send("ERROR!");
    })
  }
})
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
router.get('/getRecommendedAdsCategory/:cid', function(req, res, next){
  if(global.demo){
    res.send(dummy.rads)
  }else{
    repo.prototype.GetByCategoryID(req.params.cid, function(rads){
      //fetch the ads info by id
      res.send(rads);
    }.bind(this), function(err){
      res.send(err);
    }.bind(this))
  }  
})

router.get('/getAdsByUser/:uid', function(req, res, next){
    if(global.demo){
      res.send(dummy.ads)
    }else{
      repo.prototype.GetByOwnerID(req.params.uid, function(data){
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