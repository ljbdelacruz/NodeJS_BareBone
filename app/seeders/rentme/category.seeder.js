const db = require('../../config/dbconfig');
const Category = db.Category;
exports.seed = () => {
	Role.create({
		id: 1,
        name: "Housing",
        parent:0,
	});

	Role.create({
		id: 2,
        name: "Equipments",
        parent:0,
	});

	Role.create({
		id: 3,
        name: "Vehicle",
        parent:0,
	});
}
