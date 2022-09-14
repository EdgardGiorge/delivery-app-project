const users = (sequelize, DataTypes) => {
  const tableUsers = sequelize.define('users', 
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    { timestamps: false, tableName: 'users' });

  tableUsers.associate = (models) => {
    tableUsers.hasMany(models.sales, {
      foreignKey: 'user_id', as: 'user',
    });

    tableUsers.hasMany(models.sales, {
      foreignKey: 'seller_id', as: 'seller',
    });
  };

  return tableUsers;
};

module.exports = users;
