'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'mailatvalerie@gmail.com',
      name: 'Valerie',
      password: 'secret',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
      email: 'mailatvalerie@gmail.com',
    }])
  }
};
