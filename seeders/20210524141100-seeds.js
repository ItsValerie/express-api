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
      email :'mailatvalerie@gmail.com'
    }])
  }
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Manufacturers', [{
      name: 'Apple',
      location: 'San Fancisco',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Manufacturers', [{
      name: 'Apple'
    }])
  }
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Phones', [{
      name: 'IPhone 12',
      quantity: 20000,
      release_date: "2016-06-21",
      createdAt: new Date(),
      updatedAt: new Date(),
      manufacturer_id: 1
     }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Phones', [{
      name: 'IPhone 12',
    }])
  }
};
