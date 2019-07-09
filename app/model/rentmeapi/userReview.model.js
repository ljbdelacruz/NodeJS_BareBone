
module.exports = (sequelize, Sequelize) => {
	const UserReview = sequelize.define('UserReview', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
				autoIncrement: true,
	  },
	  hostID:{
          type: Sequelize.INTEGER
      },
      rating:{
        type: Sequelize.INTEGER
      },
      description:{
        type: Sequelize.STRING
      },
      userID:{
        type: Sequelize.INTEGER
      }

	});
	return UserReview;
}
