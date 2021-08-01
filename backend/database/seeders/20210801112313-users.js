'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        firsName: 'Aleksey',
        lastName: 'Belchenkov',
        email: 'belchenkov@gmail.com',
        password: bcrypt.hashSync('12qwasZX', 10),
        gender: 'male'
      },
      {
        firsName: 'Sam',
        lastName: 'Smith',
        email: 's.smith@gmail.com',
        password: bcrypt.hashSync('12qwasZX', 10),
        gender: 'male'
      },
      {
        firsName: 'Kate',
        lastName: 'Woods',
        email: 'r.call@gmail.com',
        password: bcrypt.hashSync('12qwasZX', 10),
        gender: 'female'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Users', null, {});
  }
};
