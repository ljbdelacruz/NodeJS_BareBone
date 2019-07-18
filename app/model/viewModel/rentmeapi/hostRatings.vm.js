class Ratings{
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
        this.hostID=object.hostID;
        this.createdAt=object.createdAt;
        this.updatedAt=object.updatedAt;
    }
}
module.exports=Ratings;

