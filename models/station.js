//khi tạo model có file station model
//model giúp ta thao tác với nodejs trên code js
//bat valication ở models
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // hàm này giúp ta liên kết lại với nhau
    static associate(models) {
      // define association here
    }
  }


  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        //validate trong thư viện
        validate: {
          notEmpty: true,
          len: [3, 30],
        },
      },
      address: {
        type: DataTypes.STRING,
        // validate  tự custom
        validate: {
          checkLen(value) {
            if (value.length >= 5 && value.length <= 20) {
              return true;
            } else {
              throw new Error("do dai phai tu 5 -20");
            }
          },
        },
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isIn: [["HCM", "DN", "HN"]] },
      },
    },
    {
      sequelize,
      modelName: "Station",
    }
  );
  return Station;
};
