module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define("invoice", {
        invoice_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        supplier_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        total_cost: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        indexes: [
            {
                fields: ['date']
            }
        ]
    });

    Invoice.associate = function (models) {
        Invoice.belongsTo(models.Customer, { foreignKey: 'customer_id', as: 'customer_id' });
        Invoice.belongsTo(models.Supplier, { foreignKey: 'supplier_id', as: 'supplier_id' });
    };

    return Invoice;
}