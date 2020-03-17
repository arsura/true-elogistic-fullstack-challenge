'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'PRS SE Custom 24 35th Anniversary',
          price: '31430.00',
          description: 'PRS-designed 85/15 TCI S humbucking pickups',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Framus GPS Panthera II Supreme',
          price: '70400.00',
          description: '3A Flamed Maple top and Mahogany back',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
