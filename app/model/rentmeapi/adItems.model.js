
module.exports = (sequelize, Sequelize) => {
	const AdItems = sequelize.define('AdItems', {
      id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      adID:{
        type: Sequelize.INTEGER,
      },
      unitIdentifier:{
        type:Sequelize.STRING          
      },
      rentedByUserID:{
        type:Sequelize.INTEGER          
      },
      rentedAt:{
        type:Sequelize.DATE
      },
      returnDate:{
          type:Sequelize.DATE
      }
	});
	return AdItems;
}
