
var mongoose=require("mongoose");
const uuidv1 = require('uuid/v1');

const prodScheme = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv1().toString(),
        primaryKey:true
    },
    title:{
        type:String,
        required:[true, "Please provide product Title"]
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:[true, "Please provide product on price"]
    },
    ownerId:{
        type:String,
        required:[true, "Please set user owner id"]
    },
    storeId:{
        type:String,
        required:[true, "Please set store UUID"]
    },
    productReview:{
        type:Number,
        default:0
    },
    category:{
        type: String,
        default:""
    },
    // * Tags of this product used for searching 
    tags:[{
        type: String,
        default:["Test"]
    }],
    isAllowSubscription:{
        type:Boolean,
        default:false
    },
    mainImage:{
        type:String,
        default:"",
    },
    isAvailable:{
        type:Boolean,
        default:true
    }
});
var prodModel=mongoose.model("Product", prodScheme);
module.exports=prodModel;