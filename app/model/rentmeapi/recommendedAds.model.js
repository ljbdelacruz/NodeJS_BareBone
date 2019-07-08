module.exports = (sequelize, Sequelize) => {
	const RecommendedAds = sequelize.define('RecommendedAds', {
	  id:{
      type: Sequelize.INTEGER,
        primaryKey: true,
		autoIncrement: true,
      },
      adID:{
        type:Sequelize.INTEGER
      },
      priority:{
        type:Sequelize.INTEGER
      },
      categoryTypeID:{
        type:Sequelize.INTEGER
      }
	});
	return RecommendedAds;
}
