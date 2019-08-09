
module.exports = (sequelize, Sequelize) => {
	const Host = sequelize.define('Host', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
                    autoIncrement: true,
          },
          userID:{
              type: Sequelize.INTEGER
          }
	});
	return Host;
}
