class RentRequestVM{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toObject(object){
        id:object.id
        userID:object.userID
        adID:object.adID
        hostID:object.hostID
        message:object.message
        dateBorrowStart:object.dateBorrowStart
        dateBorrowEnd:object.dateBorrowEnd
        payable:object.payable
        quantity:object.quantity
        isApproved:object.isApproved
        createdAt:object.createdAt
        updatedAt:object.updatedAt
    }
}
module.exports=RentRequestVM;

