

module.exports = (sequelize, Sequelize) => {
	const UsersCart = sequelize.define('UsersCart', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true        
    },
	cartUUID:{
        type: Sequelize.UUID,
    },
    ownerUUID:{
        type: Sequelize.UUID,
    },
    totalAmount:{
        type: Sequelize.DOUBLE,
    },
	});
	return UsersCart;
}


