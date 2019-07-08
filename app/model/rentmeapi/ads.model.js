
module.exports = (sequelize, Sequelize) => {
	const Ads = sequelize.define('Ads', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  title:{
		  type: Sequelize.STRING
	  },
	  description: {
      type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      currencyCode:{
        type: Sequelize.INTEGER
      },
      ownerID:{
        type: Sequelize.INTEGER,
      },
      categoryID:{
        type: Sequelize.INTEGER
      }

	});
	return Ads;
}
