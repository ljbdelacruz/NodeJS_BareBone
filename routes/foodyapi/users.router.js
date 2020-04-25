var express = require('express');
var router = express.Router();
const userInfoRepo=require("../../app/config/foody/repository/userinfo.repo");


// * User Login
router.post("/userRegister", function(req, res, next){
    userInfoRepo.prototype.registerUser(req.body.firstName, req.body.lastName, req.body.email, 0, req.body.password, (data)=>{
        res.status(200).json({
            status:200,
            data:data
        })
    }, (err)=>{
        res.status(400).json({
            status:500,
            message:err
        })
    })
})
router.post("/userLogin", function(req, res, next){
    userInfoRepo.prototype.userLogin(req.body.email, req.body.password, (data)=>{
        res.status(200).json({
            status:200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            status:500,
            message:err
        })
    })
})





// * Facebook 
router.post("/fbregister", function(req, res, next){
    userInfoRepo.prototype.fbRegister(req.body.firstName, req.body.lastName, 0, req.body.fbId, (data)=>{
        res.status(200).json({
            success:200,
            data:data
        })
    }, (err)=>{
        res.status(500).json({
            status:500,
            message:err
        })
    })
});

router.post("/fblogin", function(req, res, next){
    userInfoRepo.prototype.fbLogin(req.body.fbId, (data)=>{
        console.log(data);
        if(data != null){
            res.status(200).json({
                status:200,
                data:data
            })
        }else{
            res.status(400).json({
                status:400,
                message:"Unable to process request"
            })
        }
    },(err)=>{
        res.status(500).json({
            status:500,
            message:err
        })
    })
});




module.exports = router;