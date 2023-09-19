module.exports = (sequelize, DataTypes) => {
    const SupplierProduct = sequelize.define('supplier_product', {
        supplier_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    });

    SupplierProduct.associate = function (models) {
        SupplierProduct.belongsTo(models.Supplier, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
        SupplierProduct.belongsTo(models.Product, { foreignKey: 'product_id', targetKey: 'product_id' });
    };

    return SupplierProduct;
}
