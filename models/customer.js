module.exports = (sequelize, DataTypes) => {
    const customer = sequelize.define("customer", {
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        } //Add other fileds later
    });

    return customer;
}