module.exports = (sequelize, Sequelize) => {
	const UserInformation = sequelize.define('UserInformation', {
      id: {
          type: Sequelize.UUID,
          primaryKey: true,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      profileimage: {
        type: Sequelize.STRING,
      },
      //facebook, in the app, gmail and etc
      registration: {
        type: Sequelize.STRING,
      },
      //if facebook check if same then fetch this profile
      socialUID:{
        type: Sequelize.STRING,
      },
      //stored in array json format
      contactNumber:{
        type: Sequelize.STRING,
      },
      //stored in array json format
      emailAddress:{
        type: Sequelize.STRING,
      },
      isVerified:{
        type: Sequelize.BOOLEAN,
      },
      isHost:{
        type: Sequelize.BOOLEAN,
      }
	});
	return UserInformation;
}
