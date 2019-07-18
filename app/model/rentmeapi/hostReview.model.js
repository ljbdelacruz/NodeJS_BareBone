
module.exports = (sequelize, Sequelize) => {
	const HostReview = sequelize.define('HostReviews', {
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
          },
          hostID:{
            type: Sequelize.INTEGER
          }
	});
	return HostReview;
}
