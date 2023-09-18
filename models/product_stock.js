module.exports = (sequelize, DataTypes) => {
    const ProductStock = sequelize.define("product_stock", {
        stock_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
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
        current_quantity: {
            type: DataTypes.DECIMAL,
        },
        measure_keyword: {
            type: DataTypes.STRING,
        },
        invoice_item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        incoming_or_outgoing: {
            type: DataTypes.BOOLEAN,
        },
        incoming_or_outgoing_qty: {
            type: DataTypes.DECIMAL,
        },
        movement_keyword: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
        },
        indexes: [
            {
                fields: ['date']
            }
        ]
    });

    ProductStock.associate = function (models) {
        ProductStock.belongsTo(models.Product, { foreignKey: 'product_id', targetKey: 'product_id' });
        ProductStock.belongsTo(models.Customer, { foreignKey: 'customer_id', targetKey: 'customer_id' });
        ProductStock.belongsTo(models.Supplier, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
        ProductStock.belongsTo(models.Measurement, { foreignKey: 'measure_keyword', targetKey: 'measure_keyword' });
        ProductStock.belongsTo(models.InvoiceItem, { foreignKey: 'invoice_item_id', targetKey: 'invoice_item_id' });
        ProductStock.belongsTo(models.Movement, { foreignKey: 'movement_keyword', targetKey: 'movement_keyword' });
    };

    return ProductStock;
}