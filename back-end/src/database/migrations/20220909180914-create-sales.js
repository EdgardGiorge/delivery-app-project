'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          id: 'id'
        },
        onDelete: 'CASCADE',
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          id: 'id'
        },
        onDelete: 'CASCADE',
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2)
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      sale_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(50),
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
