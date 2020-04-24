const db = require('../dbconfig.js');
const Category = db.Category;
exports.seed = () => {
	Category.create({
        description:"Japanese", 
        value:"japanese",
        categoryType:"foodcategory", 
    });
}