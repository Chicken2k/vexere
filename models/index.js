'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//fs là cái gì ?
//fs giúp ta có thể đọc  file 
//đọc toàn bộ file trong model , đọc xong thì sẽ tạo thành 1 cái mảng 

//đoạn fs là export model tự động , mỗi lần tạo model là tự động export model luôn
fs
  .readdirSync(__dirname)
  //filter dùng để lọc ra file js 
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
  //__dirname, file sẽ gọi file hiện tại và gọi hằng
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // lưu vào Ob database
    //model.name chính là modelName bên station
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
