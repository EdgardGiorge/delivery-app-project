const sales = (sequelize, DataTypes) => {
  const tableSales = sequelize.define("sales",
    {
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      },
      sellerId: {
        type: DataTypes.INTEGER,
        field: 'seller_id'
      },
      totalPrice: {
        type: DataTypes.DECIMAL,
        field: 'total_price',
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        field: 'delivery_address'
      },
      deliveryNumber: {
        type: DataTypes.STRING,
        field: 'delivery_number'
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pendente'
      },
      saleDate: {
        type: DataTypes.DATE,
        field: 'sale_date',
        defaultValue: DataTypes.NOW,
        get: function () {
          return this.getDataValue('saleDate')
            .toLocaleString('pt-BR', { timeZone: 'UTC' });
        }
      }
    },
    { timestamps: false, tableName: 'sales' }
  );

  tableSales.associate = (models) => {
    tableSales.belongsTo(models.users, {
      foreignKey: 'user_id', as: 'user',
    });

    tableSales.belongsTo(models.users, {
      foreignKey: 'seller_id', as: 'seller',
    });
  };

  return tableSales;
};

module.exports = sales;
