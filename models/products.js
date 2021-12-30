const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class product extends Model {
		/**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
		static associate() {
			// define association here
		}
	}
	product.init({
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		name: {
            type: DataTypes.STRING,
			allowNull: false,
        },
		description: {
            type: DataTypes.STRING,
			allowNull: false,
        },
		quantity: {
            type: DataTypes.INTERGER,
			allowNull: false,
        },
		price: {
            type: DataTypes.INTEGER,
			allowNull: false,
        },
		published: {
            type: DataTypes.BOOLEAN,
        },
        image: [
            type: DataTypes.STRING,
			allowNull: false,
        ]
	}, {
		sequelize,
		modelName: 'user',
		paranoid: true,
		underscored: true
	});

	return product;
};
