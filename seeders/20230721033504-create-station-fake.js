// câu lệnh tạo ra seeder :
//sequelize seed:generate --name create-station-fake

// câu lệnh tạo ra database đã chuẩn bị :
//sequelize db:seed:all

// câu lệnh xoá DB:
//sequelize db:seed:undo:all

//seeder backup lại dữ liệu
// seeder giúp hỗ trợ ta trong quá trình phát triển , khôi phục dữ liệu cho các tính năng như xoá,cập nhạt
//up tạo ra down xoá đi

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    //bulkInsert là câu lệnh insert dữ liệu vào bảng mà ta cần

    await queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "John Doe",
          address: "da nang",
          province: "da nang  2",
          createdAt: "2023-07-20 09:38:55",
          updatedAt: "2023-07-20 09:38:55",
        },
        {
          name: "John Doe",
          address: "da nang",
          province: "da nang  2",
          createdAt: "2023-07-20 09:38:55",
          updatedAt: "2023-07-20 09:38:55",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // câu lệnh xoá DB:
    //sequelize db:seed:undo:all
    await queryInterface.bulkDelete("stations", null, {});
  },
};
