
module.exports = (sequelize, Sequelize) => {
	const RentRequest = sequelize.define('RentRequest', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
	    userID:{
        type: Sequelize.INTEGER
      },
      adItemID:{
        type: Sequelize.INTEGER
      },
      hostID:{
        type: Sequelize.INTEGER
      },
      message:{
        type:Sequelize.STRING
      },
      dateBorrowStart:{
        type:Sequelize.DATE
      },
      dateBorrowEnd:{
        type:Sequelize.DATE
      },
      payable:{
        type: Sequelize.FLOAT
      },
      quantity:{
        type: Sequelize.INTEGER 
      },
      isApproved:{
          type: Sequelize.BOOLEAN
      }
	});
	return RentRequest;
}
