

module.exports = (sequelize, Sequelize) => {
	const UsersInfo = sequelize.define('UsersInfo', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true        
    },
	storeUUID:{
        type: Sequelize.UUID,
	},
	userUUID:{
        type: Sequelize.UUID,
	},
	firstName:{
        type: Sequelize.STRING,
	},
	lastName: {
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    fbId: {
        type: Sequelize.STRING
    },
    userReview: {
        type: Sequelize.DOUBLE
    },

	});
	return UsersInfo;
}


