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
        }
    }, {
        indexes: [
            {
                fields: ['date']
            }
        ]
    });

    Invoice.associate = function (models) {
        Invoice.belongsTo(models.customer, { foreignKey: 'customer_id', targetKey: 'customer_id' });
        Invoice.belongsTo(models.supplier, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
    };

    return Invoice;
}