
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
