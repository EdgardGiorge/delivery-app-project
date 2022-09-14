const Products = (sequelize, DataTypes) => {
  const tableProducts = sequelize.define('products',
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      urlImage: {
        type: DataTypes.STRING,
        field: 'url_image',
      },
    },
    { timestamps: false, tableName: 'products' });

  return tableProducts;
};

module.exports = Products;
