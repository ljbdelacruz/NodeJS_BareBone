module.exports = (sequelize, Sequelize) => {
	const Categories = sequelize.define('Category', {
	  id: {
      type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  name:{
		  type: Sequelize.STRING
    },
    //if the category is a sub category of the category
    //set 0 if none
    parent:{
      type: Sequelize.INTEGER
    },

  });


	return Categories;
}
