'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'mail@mail.com',
      name: 'Valerie',
      password: 'secret',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
      email :'mail@mail.com'
    }])
  }
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Manufacturers', [{
      name: 'Apple',
      location: 'San Francisco',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Google',
      location: 'San Francisco',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Manufacturers', [{
      name: 'Apple'
    }, {
      name: 'Google'
    }])
  }
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Phones', [{
      name: 'IPhone 12',
      quantity: 20000,
      release_date: "2021-06-06",
      createdAt: new Date(),
      updatedAt: new Date(),
      manufacturer_id: 1
     }, {
      name: 'IPhone 11',
      quantity: 30000,
      release_date: "2019-05-03",
      createdAt: new Date(),
      updatedAt: new Date(),
      manufacturer_id: 1
     }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Phones', [{
      name: 'IPhone 12',
    }, {
      name: 'IPhone 11',
    }])
  }
};
