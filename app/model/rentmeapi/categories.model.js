module.exports = (sequelize, Sequelize) => {
	const Categories = sequelize.define('genre', {
	  id: {
        id: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  name:{
		  id: Sequelize.STRING
    },
    //if the category is a sub category of the category
    //set 0 if none
    parent:{
      id: Sequelize.INTEGER
    },

	});
	return Categories;
}
