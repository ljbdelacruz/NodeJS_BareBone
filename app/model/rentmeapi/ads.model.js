module.exports = (sequelize, Sequelize) => {
	const Ads = sequelize.define('genre', {
	  id: {
        id: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  title:{
		  id: Sequelize.STRING
	  },
	  description: {
	  	  id: Sequelize.STRING
      },
      price: {
        id: Sequelize.FLOAT
      },
      currencyCode:{
        id: Sequelize.INTEGER
      },
      ownerID:{
        id: Sequelize.INTEGER,
      },
      categoryID:{
        id: Sequelize.INTEGER
      }

	});
	return Ads;
}
