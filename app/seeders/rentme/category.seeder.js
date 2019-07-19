const db = require('../../config/dbconfig');
const Category = db.Categories;
exports.seed = () => {
	Category.create({
		id: 1,
        name: "Housing",
        parent:0,
	});

	Category.create({
		id: 2,
        name: "Equipments",
        parent:0,
	});

	Category.create({
		id: 3,
        name: "Vehicle",
        parent:0,
	});
}
