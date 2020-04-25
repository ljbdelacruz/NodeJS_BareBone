var mongoose=require("mongoose");
const uuidv1 = require('uuid/v1');

const userInfoScheme = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv1().toString(),
        primaryKey:true
    },
    firstName:{
        type:String,
        default:""
    },
    lastName:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        default:"",
        unique:[true, "Email address already taken"]
    },
    isFbLogin:{
        type:Boolean,
        default:false
    },
    fbId:{
        type:String,
        default:""
    },
    // 0 - Unverified, 1 - Verified, 2 - Completely Member
    accountVerificationStatus:{
        type:Number,
        default:0
    },
    updatedAt:{ type: Date, default: Date.now },
    isMerchantAccountActive:{
        type:Boolean,
        default:false
    },
    //0-None, 1 - For Review, 2- Activated
    merchantAccountStatus:{
        type:Number,
        default:0
    },
    //Review from merchants he/she has transacts with
    userReview:{
        type:Number,
        default:0
    },
    password:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});
var userInfoModel=mongoose.model("UserInfo", userInfoScheme);
module.exports=userInfoModel;