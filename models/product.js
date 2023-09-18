module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Product;
}