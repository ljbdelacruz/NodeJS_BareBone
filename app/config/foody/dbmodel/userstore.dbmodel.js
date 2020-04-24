

module.exports = (sequelize, Sequelize) => {
	const UserStore = sequelize.define('UserStore', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true        
    },
	ownerUUID:{
        type: Sequelize.UUID,
	},
	storeName:{
        type: Sequelize.STRING,
	},
    storeReview: {
        type: Sequelize.DOUBLE
    },
    
	});
	return UserStore;
}


