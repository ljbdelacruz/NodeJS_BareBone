var userCart=require("../mongodbscheme/usercart.model");
const uuidv1 = require('uuid/v1');
function UserCartRepo(){
}
UserCartRepo.prototype.insert=function(desc, ownerUUID, totalAmount, orderStatus, success, failed){
    const item = userCart({
        description:desc,
        ownerUUID:ownerUUID,
        totalAmount:totalAmount,
        orderStatus:orderStatus
    });
    item.save().then(data=>{
        success(data);
    }).catch(err=>{
        failed(err);
    });
}

UserCartRepo.prototype.findByOwnerId= async function(ownerId, success, failed){
    success(await userCart.find({ownerUUID:ownerId}))
}
module.exports=UserCartRepo;


