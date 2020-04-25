var mongoose=require("mongoose");
const uuidv1 = require('uuid/v1');

const categoryScheme = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv1().toString(),
        primaryKey:true
    },
    description:{
        type:String,
        default:""
    },
    value:{
        type:String,
        default:""
    },
    categoryType:{
        type:String,
        default:""
    }
});
var categoryModel=mongoose.model("category", categoryScheme);
module.exports=categoryModel;