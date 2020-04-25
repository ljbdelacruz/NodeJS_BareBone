var mongoose=require("mongoose");
const uuidv1 = require('uuid/v1');

const userStoresScheme = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv1().toString(),
        primaryKey:true
    },
    ownerUUID:{
        type:String,
        default:"",
    },
    storeName:{
        type:String,
        default:"",
        unique:[true, "Store Name Already Taken"]
    },
    storeLogo:{
        type:String,
        default:"",
    },
    storeReview:{
        type:Double,
        default:0
    },
    updatedAt:{ type: Date, default: Date.now },
    longitude:{
        type:Double,
        default:0
    },
    latitude:{
        type:Double,
        default:0
    },
    //this is used for items list
    signatureDish:{
        type:String,
        default:""
    }
});
var userStoresModel=mongoose.model("UserCart", userStoresScheme);
module.exports=userStoresModel;