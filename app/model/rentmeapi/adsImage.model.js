
module.exports = (sequelize, Sequelize) => {
	const AdsImage = sequelize.define('AdsImage', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      adsID:{
          type:Sequelize.INTEGER
      },
      source:{
          type:Sequelize.STRING
      }
	});
	return AdsImage;
}
