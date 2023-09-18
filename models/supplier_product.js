module.exports = (sequelize, DataTypes) => {
    const SupplierProduct = sequelize.define('supplier_product', {
        supplier_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Supplier', // name of Supplier model
                key: 'supplier_id', // key in Supplier that supplier_id refers to
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Product', // name of your Product model
                key: 'product_id', // key in Product that product_id refers to
            }
        },
    }, {
        tableName: 'supplier_product',
        timestamps: false,
    });

    return SupplierProduct;
}
