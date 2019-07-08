
module.exports = (sequelize, Sequelize) => {
	const UserReview = sequelize.define('Ads', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  userID:{
          type: Sequelize.INTEGER
      },
      rating:{
        type: Sequelize.INTEGER
      },
      description:{
        type: Sequelize.STRING
      }

	});
	return UserReview;
}
