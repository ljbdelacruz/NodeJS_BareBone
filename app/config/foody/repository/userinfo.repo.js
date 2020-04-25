var userInfo=require("../mongodbscheme/userinfo.model");
const uuidv1 = require('uuid/v1');
function UserInfoRepo(){
}

//User Access
UserInfoRepo.prototype.registerUser=function(firstName, lastName, email, accountVerificationStatus, password,  success, failed){
    const item = userInfo({
        firstName: firstName,
        lastName: lastName,
        email: email,
        accountVerificationStatus: accountVerificationStatus,
        password: password
    });
    item.save().then(data=>{
        success(data);
    }).catch(err=>{
        console.log(err);
        if(err.keyPattern.email == 1){
            failed("Please use different email address");
        }else{
            failed("Unable to process request");
        }
    });
}
UserInfoRepo.prototype.fbRegister=function(firstName, lastName, accountVerificationStatus, fbId,  success, failed){
    const item = userInfo({
        firstName: firstName,
        lastName: lastName,
        accountVerificationStatus: accountVerificationStatus,
        fbId: fbId
    });
    item.save().then(data=>{
        success(data);
    }).catch(err=>{
        failed(err);
    });
}
UserInfoRepo.prototype.userLogin= async function(email, password, failed){
    success(await userInfo.findOne({email:email, password:password}))
}
UserInfoRepo.prototype.fbLogin= async function(fbId, success, failed){
    try{
        success(await userInfo.findOne({fbId: fbId}));
    }catch{
        failed("Unable to process request");
    }
}

// User Admin Access
UserInfoRepo.prototype.findUserByAccountStatus= async function(accountVerificationStatus, success, failed){
    success(await userInfo.find({accountVerificationStatus:accountVerificationStatus}))
}
UserInfoRepo.prototype.findUserByMerchantAccountStatus = async function(merchantAccountStatus, success, failed){
    try{
        success(await userInfo.find({merchantAccountStatus:merchantAccountStatus}))
    }catch(err){
        failed(err);
    }
}

module.exports=UserInfoRepo;


