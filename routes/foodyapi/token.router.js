var express = require('express');
var router = express.Router();
const constant = require('../../app/config/foody/global');

router.get('/', function(req, res, next){
    res.status(200).json({
        success:200,
        error:"",
        data:{
            token:{type:"Auth ", token:"1ee"}
        }
    });
});
router.post('/', function(req, res, next){
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
    res.status(200).json({
        success:200,
        error:"",
        data:{
            token:{type:"Token ", token:"1ee"}
        }
    });
    // res.send("Authenticate User Login and get access token");
});





module.exports = router;