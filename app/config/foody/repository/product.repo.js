const db = require('../dbconfig');
const ProductDB = db.Product;
//Init Sequelize Operation
const Op = db.Sequelize.Op;

function ProductRepo(){
}

ProductRepo.prototype.checkVersion=function(id, success, failed){
    
    // ProductDB.findOne({
    //   where:{
    //     id:1
    //   },
    // }).then(version => {
    //   if(!version){
    //     failed(JSON.stringify({status:404, description:'Data Not Found'}))
    //   }else{
    //     success(version);
    //   }
    // })

}
module.exports=AppVersioningRepo;


