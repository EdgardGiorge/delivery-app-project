'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'administrator'
      },
      {
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller'
      },
      {
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'customer'
      },
      {
        name: 'Vitor',
        email: 'vitor@gmail.com',
        password: '5f4dcc3b5aa765d61d8327deb882cf99',
        role: 'admin'
      },
      {
        name: 'Laura',
        email: 'laura@gmail.com',
        password: '5f4dcc3b5aa765d61d8327deb882cf99',
        role: 'admin'
      },
      {
        name: 'Eduardo',
        email: 'eduardo@gmail.com',
        password: '5f4dcc3b5aa765d61d8327deb882cf99',
        role: 'admin'
      },
      {
        name: 'Thales',
        email: 'thales@gmail.com',
        password: '5f4dcc3b5aa765d61d8327deb882cf99',
        role: 'admin'
      },
      {
        name: 'Kelly',
        email: 'kelly@gmail.com',
        password: '5f4dcc3b5aa765d61d8327deb882cf99',
        role: 'admin'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
