var express = require('express');
var router = express.Router();


router.get('/getByAdID', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send([
        {id:1, userInfo:{username:'ljbdelacruz'}, ratings:4},
        {id:2, userInfo:{username:'ljbdelacruz1'}, ratings:3},
        {id:3, userInfo:{username:'ljbdelacruz2'}, ratings:3}
    ])
});

router.get('/getAdReview', function(req, res, next){
    res.send({})
})
module.exports = router;

