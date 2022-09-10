'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: 1,
        seller_id: 1,
        total_price: 9.99,
        delivery_address: 'SP',
        delivery_number: 1,
        status: 'Pendente'
      },
      {
        user_id: 2,
        seller_id: 2,
        total_price: 19.99,
        delivery_address: 'MG',
        delivery_number: 2,
        status: 'Pendente'
      },
      {
        user_id: 3,
        seller_id: 3,
        total_price: 29.99,
        delivery_address: 'DF',
        delivery_number: 3,
        status: 'Pendente'
      },
      {
        user_id: 4,
        seller_id: 4,
        total_price: 49.99,
        delivery_address: 'RJ',
        delivery_number: 10,
        status: 'Pendente'
      },
      {
        user_id: 5,
        seller_id: 5,
        total_price: 5.99,
        delivery_address: 'PE',
        delivery_number: 11,
        status: 'Pendente'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
