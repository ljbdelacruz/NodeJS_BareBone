module.exports = (sequelize, Sequelize) => {
	const RecommendedAds = sequelize.define('RecommendedAds', {
	  id:{
        id: Sequelize.INTEGER,
        primaryKey: true,
		autoIncrement: true,
      },
      adID:{
          id:Sequelize.INTEGER
      },
      priority:{
        id:Sequelize.INTEGER
      },
      categoryTypeID:{
        id:Sequelize.INTEGER
      }
	});
	return RecommendedAds;
}
