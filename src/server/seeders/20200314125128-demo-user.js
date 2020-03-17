'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Siwakorn',
          lastName: 'Ruenrit',
          email: 'admin@email.com',
          password: '$2b$10$Bdd/gKdUDYDJvJud7LAdt.trPILykTqHYUjkPY6Cbg3PP7E19Td9i', // 12345678
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};