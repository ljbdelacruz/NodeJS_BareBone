class AdsImage{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toObject(object){
        this.id=object.id;
        this.adsID=object.adsID
        this.source=object.source;
        this.UID=object.UID;
        this.UID2=object.UID2;
        this.createdAt=object.createdAt;
        this.updatedAt=object.updatedAt;
    }
}
module.exports=AdsImage;

