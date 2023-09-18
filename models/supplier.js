module.exports = (sequelize, DataTypes) => {
    const Supplier = sequelize.define("supplier", {
        supplier_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        supplier_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        is_vendor: {
            type: DataTypes.BOOLEAN,
        },
    });

    return Supplier;
}