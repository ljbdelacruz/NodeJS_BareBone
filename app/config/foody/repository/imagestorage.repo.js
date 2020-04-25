var imageStorage=require("../mongodbscheme/imagestorage.model");
const uuidv1 = require('uuid/v1');
function ImageStorageRepo(){
}
ImageStorageRepo.prototype.insert=function(src, type, ownerId, success, failed){
    const item = imageStorage({
        source:src,
        type:type,
        ownerId:ownerId
    });
    item.save().then(data=>{
        success(data);
    }).catch(err=>{
        failed(err);
    });
}

ImageStorageRepo.prototype.findByOwnerId= async function(oid, type, success, failed){
    success(await imageStorage.find({ownerId:oid, type:type}))
}
module.exports=ImageStorageRepo;


