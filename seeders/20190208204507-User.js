'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Jaime',
        email: 'jaime@gmail.com',
        password: '12345',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        name: 'Sara',
        email: 'sara@gmail.com',
        password: '67890',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        name: 'Steven',
        email: 'steven@gmail.com',
        password: 'abcde',
        createdAt: 'now()',
        updatedAt: 'now()'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
