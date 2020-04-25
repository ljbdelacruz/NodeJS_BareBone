var userStore=require("../mongodbscheme/userStores.model");
const uuidv1 = require('uuid/v1');
function UserStoreRepo(){
}
UserStoreRepo.prototype.insert=function(storeName, ownerUUID, storeLogo, orderStatus, success, failed){
    const item = userCart({
        storeName:storeName,
        ownerUUID:ownerUUID,
        storeLogo:storeLogo
    });
    item.save().then(data=>{
        success(data);
    }).catch(err=>{
        failed(err);
    });
}
UserStoreRepo.prototype.updateLocation=function(longitude, latitude, success, failed){
    //TODO: update location for store to be on user search list for stores
}


UserStoreRepo.prototype.findStoreByStoreName= async function(searchText, success, failed){
    success(await userCart.find({ searchText: { $regex: '.*' + "storeName" + '.*' } },
    function(err,data){
        console.log('data',data);
    }))
}
UserStoreRepo.prototype.findStoreByRadius = async function(longitude, latitude, radius, success, failed){
    //TODO: Find stores available based on your delivery location
    
}


UserStoreRepo.prototype.findStoreById= async function(id, success, failed){
    success(await userCart.findOne({id:id}))
}
module.exports=UserStoreRepo;


