module.exports = (sequelize, DataTypes) => {
    const InvoiceItem = sequelize.define("invoice_item", {
        invoice_item_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        quanitity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        unit: {
            type: DataTypes.STRING,
        },
        unit_price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        sub_total_price: {
            type: DataTypes.DECIMAL,
        },
        invoice_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        upc: {
            type: DataTypes.STRING,
        },
        indexes: [
            {
                fields: ['date']
            }
        ]
    });

    InvoiceItem.associate = function (models) {
        InvoiceItem.belongsTo(models.Invoice, { foreignKey: 'invoice_id', targetKey: 'invoice_id' });
        InvoiceItem.belongsTo(models.Supplier, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
        InvoiceItem.belongsTo(models.Product, { foreignKey: 'product_id', targetKey: 'product_id' });
        InvoiceItem.belongsTo(models.Customer, { foreignKey: 'customer_id', targetKey: 'customer_id' });
    };

    return InvoiceItem;
}