var mongoose=require("mongoose");
const uuidv1 = require('uuid/v1');

const userCartScheme = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv1().toString(),
        primaryKey:true
    },
    description:{
        type:String,
        default:""
    },
    ownerUUID:{
        type:String,
        default:"",
    },
    totalAmount:{
        type:Number,
        default:0
    },

    //Status: 0 - To Pay, 1 - To Ship, 2 - To Be Delivered, 3 - To Receive, 4 - To Rate, 5 - To Complete
    orderStatus:{
        type:Number,
        default:0,
    },
    updatedAt:{ type: Date, default: Date.now }
    
});
var userCartModel=mongoose.model("UserCart", userCartScheme);
module.exports=userCartModel;