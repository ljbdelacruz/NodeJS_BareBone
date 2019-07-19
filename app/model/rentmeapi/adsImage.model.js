module.exports = (sequelize, Sequelize) => {
	const AdsImage = sequelize.define('AdsImage', {
      id: {
          type: Sequelize.UUID,
          primaryKey: true,
      },
      adsID:{
          type:Sequelize.INTEGER
      },
      source:{
          type:Sequelize.STRING(1000),

      },
      //set the id on the owner of the image
      //2nd UID is for identification 
      UID:{
          type:Sequelize.STRING
      },
      UID2:{
        type:Sequelize.STRING
      }
	});
	return AdsImage;
}
