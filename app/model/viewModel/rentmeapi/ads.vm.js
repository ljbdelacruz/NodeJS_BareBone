class AdsVM{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toObject(object){
        this.id=object.id;
        this.title=object.title
        this.description=object.description
        this.price=object.price
        this.currencyCode=object.currencyCode
        this.ownerID=object.ownerID
        this.categoryID=object.categoryID
        this.priority=object.priority
        this.longitude=object.longitude
        this.latitude=object.latitude
        this.unitIdentifier=object.unitIdentifier
        this.rentedByUserID=object.rentedByUserID
        this.rentedAt=object.rentedAt
        this.returnDate=object.returnDate
        this.available=object.available
    }
}
module.exports=AdsVM;

