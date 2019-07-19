class RentRequestVM{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toObject(object){
        this.id=object.id;
        this.firstname=object.firstname
        this.lastname=object.lastname
        this.profileimage=object.profileimage
        this.registration=object.registration
        this.socialUID=object.socialUID
        this.isVerified=object.isVerified
        this.isHost=object.isHost
        this.createdAt=object.createdAt
        this.updatedAt=object.updatedAt
    }
}
module.exports=RentRequestVM;

