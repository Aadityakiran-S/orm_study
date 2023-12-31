module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("customer", {
        customer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Customer;
}