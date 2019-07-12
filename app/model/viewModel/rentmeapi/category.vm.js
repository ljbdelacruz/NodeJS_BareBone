class CategoryVM{
    constructor(id, name, parent){
        this.id=id;
        this.name=name;
        this.parent=parent;
    }
    stringify(){
        return JSON.stringify(this);
    }
    toObject(object){
        this.id=object.id;
        this.name=object.name
        this.parent=object.parent;
    }
}
module.exports=CategoryVM;

