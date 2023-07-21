// sinh ra file khi tạo model
// migrate giúp ta tạo bảng trong database

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
// up để tạo bảng
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
// dow để xoá bảng 
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stations');
  }
};