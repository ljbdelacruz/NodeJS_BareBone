class AdsRatings{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toObject(object){
        this.id=object.id;
        this.userID=object.userID
        this.rating=object.rating;
        this.description=object.description;
        this.adID=object.adID;
        this.createdAt=object.createdAt;
        this.updatedAt=object.updatedAt;
    }
}
module.exports=AdsRatings;

