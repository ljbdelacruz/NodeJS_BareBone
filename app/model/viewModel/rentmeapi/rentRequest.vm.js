class RentRequestVM{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toObject(object){
        this.id=object.id;
        this.userID=object.userID
        this.adID=object.adID
        this.hostID=object.hostID
        this.message=object.message
        this.dateBorrowStart=object.dateBorrowStart
        this.dateBorrowEnd=object.dateBorrowEnd
        this.payable=object.payable
        this.quantity=object.quantity
        this.isApproved=object.isApproved
        this.createdAt=object.createdAt
        this.updatedAt=object.updatedAt
    }
}
module.exports=RentRequestVM;

