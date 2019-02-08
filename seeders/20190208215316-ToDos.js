'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ToDos', [
      {
        description: 'read',
        UserId: 1,
        done: true,
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        description: 'study',
        UserId: 2,
        done: true,
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        description: 'sleep',
        UserId: 1,
        done: true,
        createdAt: 'now()',
        updatedAt: 'now()'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
