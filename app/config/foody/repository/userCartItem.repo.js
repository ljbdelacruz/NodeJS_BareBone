var userCartItem=require("../mongodbscheme/usercartitem.model");
const uuidv1 = require('uuid/v1');
function UserCartItemRepo(){
}
UserCartItemRepo.prototype.insert=function(desc, prodId, cartUUID, storeUUID, quantity, amount, orderStatus, success, failed){
    const item = userCartItem({
        description:desc,
        prodId:prodId,
        cartUUID:cartUUID,
        storeUUID:storeUUID,
        quantity:quantity,
        amount:amount,
        orderStatus:orderStatus
    });
    item.save().then(data=>{
        success(data);
    }).catch(err=>{
        failed(err);
    });
}

UserCartItemRepo.prototype.findByCartUUID= async function(cartUUID, success, failed){
    success(await userCartItem.find({cartUUID:cartUUID}))
}
module.exports=UserCartItemRepo;


