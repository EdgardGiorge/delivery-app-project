const salesProducts = (sequelize, DataTypes) => {
  const tableSalesProducts = sequelize.define("salesProducts", {
    saleId: {
      type: DataTypes.INTEGER,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id',
    },
    quantity: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'sales_products' });

  tableSalesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      through: tableSalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products'
    });

    models.products.belongsToMany(models.sales, {
      through: tableSalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales'
    });
  };

  return tableSalesProducts;
}

module.exports = salesProducts;
