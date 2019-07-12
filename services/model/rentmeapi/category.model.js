class Category{
    constructor(id, name, parent){
        this.id=id;
        this.name=name;
        this.parent=parent;
    }
    stringify(){
        return JSON.stringify(self);
    }
    toObject(object){
        this.id=object.id;
        this.name=object.name
        this.parent=object.parent;
    }
}
module.exports=Category;

