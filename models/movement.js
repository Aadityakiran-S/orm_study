module.exports = (sequelize, DataTypes) => {
    const Movement = sequelize.define("movement", {
        movement_keyword: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        incoming_or_outgoing: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Movement;
}