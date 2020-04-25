var mongoose=require("mongoose");
const uuidv1 = require('uuid/v1');

const imageStorageScheme = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv1().toString(),
        primaryKey:true
    },
    source:{
        type:String,
        default:""
    },
    type:{
        type:String,
        default:""
    },
    ownerId:{
        type:String,
        default:""
    }
});
var imageStorageModel=mongoose.model("ImageStorage", imageStorageScheme);
module.exports=imageStorageModel;