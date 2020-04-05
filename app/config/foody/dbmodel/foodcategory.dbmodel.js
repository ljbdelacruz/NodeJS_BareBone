module.exports = (sequelize, Sequelize) => {
	const Category = sequelize.define('cllocalization', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true        
    },
	description:{
        type: Sequelize.STRING,
	},
	value: {
        type: Sequelize.STRING
    },
    categoryType: {
        type: Sequelize.STRING
    },
	});
	return FoodCategory;
}
