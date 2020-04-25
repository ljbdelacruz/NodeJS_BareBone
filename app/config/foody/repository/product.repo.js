var product=require("../mongodbscheme/product.model.js");
const uuidv1 = require('uuid/v1');
function ProductRepo(){
}

ProductRepo.prototype.insert=function(title, desc, price, ownerId, storeId, productReview, category, success, failed){
    const item = product({
      id:uuidv1().toString(),
      title:title,
      description:desc, 
      price:price,
      ownerId:ownerId,
      storeId:storeId,
      productReview:productReview,
      category:category
    });
    item.save().then(data=>{
        success(data);
    }).catch(err=>{
        failed(err);
    });
}


ProductRepo.prototype.findByCategory= async function(category, success, failed){
    success(await product.find({category:category}))
}
module.exports=ProductRepo;


