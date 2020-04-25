var category=require("../mongodbscheme/category.model");

function CategoryRepo(){
}

CategoryRepo.prototype.insert=function(desc, value, categoryType, success, failed){
    const item = category({
        description:desc,
        value:value,
        categoryType:categoryType
      });
      item.save().then(data=>{
          success(data);
      }).catch(err=>{
          failed(err);
      });
}
CategoryRepo.prototype.findByCategory= async function(type, success, failed){
    success(await category.find({categoryType:type}))
}



module.exports=CategoryRepo;






