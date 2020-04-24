

module.exports = (sequelize, Sequelize) => {
	const UsersCartItem = sequelize.define('UsersCartItem', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true        
        },
        cartItemUUID:{
            type: Sequelize.UUID,
        },
        cartUUID:{
            type: Sequelize.UUID,
        },
        productUUID:{
            type: Sequelize.UUID,
        },
        quantity:{
            type: Sequelize.INTEGER,
        },
        subPrice:{
            type: Sequelize.DOUBLE,
        },

	});
	return UsersCartItem;
}


