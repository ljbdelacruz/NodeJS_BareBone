var mongoose=require("mongoose");
const uuidv1 = require('uuid/v1');

const userCartItemScheme = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv1().toString(),
        primaryKey:true
    },
    description:{
        type:String,
        default:""
    },
    prodId:{
        type:String,
        default:""
    },
    cartUUID:{
        type:String,
        default:""
    },
    storeUUID:{
        type:String,
        default:"",
    },
    quantity:{
        type:Number,
        default:0
    },
    //set amount to 0 once item is cancelled or our of stock
    amount:{
        type:Number,
        default:0
    },
    //Order item status: Cancelled, process, Out of Stock, Success
    orderStatus:{
        type:String,
        default:""
    },
    updatedAt:{ type: Date, default: Date.now }
});
var userCartItemModel=mongoose.model("UserCartItem", userCartItemScheme);
module.exports=userCartItemModel;