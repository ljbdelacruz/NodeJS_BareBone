var express = require('express');
var router = express.Router();
const constant = require('../../app/config/foody/global');


router.get(constants.version1API+'/token', function(req, res, next){
    res.send("return token for authentication login");
});




module.exports = router;