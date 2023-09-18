module.exports = (sequelize, DataTypes) => {
    const Measurement = sequelize.define("measurement", {
        measure_keyword: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        unit_in_si: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Measurement;
}